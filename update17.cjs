const fs = require("fs");
let content = fs.readFileSync("src/App.tsx", "utf-8");

const p1Idx = content.indexOf("{/* Project 1 */}");
const p2Idx = content.indexOf("{/* Project 2 */}");
const p3Idx = content.indexOf("{/* Project 3 */}");
const p4Idx = content.indexOf("{/* Project 4 */}");
const p5Idx = content.indexOf("{/* Project 5 */}");
const endIdx = content.indexOf("\n            </div>\n            </section>");

if ([p1Idx, p2Idx, p3Idx, p4Idx, p5Idx, endIdx].includes(-1)) {
    console.error("Could not find one of the project markers");
    process.exit(1);
}

const preGrid = content.substring(0, p1Idx);
const p1 = content.substring(p1Idx, p2Idx);
const p2 = content.substring(p2Idx, p3Idx);
const p3 = content.substring(p3Idx, p4Idx);
const p4 = content.substring(p4Idx, p5Idx);
const p5 = content.substring(p5Idx, endIdx + 1); // Keeps the newline
const postGrid = content.substring(endIdx + 1); // starts at `            </div>\n            </section>`

// Replace comments for accurate numbering
const newP1 = p1; // Osos PMS
const newP2 = p5.replace("{/* Project 5 */}", "{/* Project 2 */}").replace("              {/* Project 2", "            {/* Project 2").replace(/                <div/g, "              <div");
const newP3 = p3; // Enterprise IT Infrastructure
const newP4 = p4; // Makkah HQ
const newP5 = p2.replace("{/* Project 2 */}", "{/* Project 5 */}"); // Osos Corporate Platform

const newContent = preGrid + newP1 + newP2 + newP3 + newP4 + newP5 + postGrid;
fs.writeFileSync("src/App.tsx", newContent);
console.log("Successfully reordered projects.");