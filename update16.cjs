const fs = require("fs");
let content = fs.readFileSync("src/App.tsx", "utf-8");

const p1 = "{/* Project 1 */}";
const p2 = "{/* Project 2 */}";
const p3 = "{/* Project 3 */}";
const p4 = "{/* Project 4 */}";
const p5 = "{/* Project 5 */}";
// The end of the grid should be after Project 5. Let's find the end of Project 5.
// It ends right before `</div>\n          </div>\n        </section>` or similar.
const endMarker = "            </div>\n          </div>\n        </section>";

let idx1 = content.indexOf(p1);
let idx2 = content.indexOf(p2);
let idx3 = content.indexOf(p3);
let idx4 = content.indexOf(p4);
let idx5 = content.indexOf(p5);
let endIdx = content.indexOf("            </div>\n          </div>\n        </section>");

if (idx1 === -1 || idx2 === -1 || idx3 === -1 || idx4 === -1 || idx5 === -1 || endIdx === -1) {
    // If the exact end marker fails, we can just find the closing tags of Project 5.
    // Let's do a more robust splitting.
}

let block1 = content.substring(idx1, idx2);
let block2 = content.substring(idx2, idx3);
let block3 = content.substring(idx3, idx4);
let block4 = content.substring(idx4, idx5);
let block5 = content.substring(idx5, endIdx);

// Note: The blocks contain their own closing tags.
// But wait, the indentation of Project 5 looks slightly different (`<div className="...` is indented 2 extra spaces?).
// That's fine, we'll just swap the strings around.

const prefix = content.substring(0, idx1);
const suffix = content.substring(endIdx);

// Change the comments so they are correct:
block1 = block1.replace("{/* Project 1 */}", "{/* Project 1 (Osos PMS) */}");
block5 = block5.replace("{/* Project 5 */}", "{/* Project 2 (IT Helpdesk) */}");
block3 = block3.replace("{/* Project 3 */}", "{/* Project 3 (Enterprise IT) */}");
block4 = block4.replace("{/* Project 4 */}", "{/* Project 4 (Network Migration) */}");
block2 = block2.replace("{/* Project 2 */}", "{/* Project 5 (Corporate Platform) */}");

const newGrid = block1 + block5 + block3 + block4 + block2;

const newContent = prefix + newGrid + suffix;
fs.writeFileSync("src/App.tsx", newContent);
console.log("Projects reordered!");