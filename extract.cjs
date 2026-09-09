const fs = require("fs");
let content = fs.readFileSync("src/App.tsx", "utf-8");

// The wrapper is <div className="grid md:grid-cols-2 gap-8">
// Let's find each project block individually. They all start with:
// {/* Project X */}
// <div className="bg-surface rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group relative overflow-hidden">
// and end right before the next {/* Project Y */} or `</div>` of the grid.

const pmsStart = content.indexOf("{/* Project 1 */}");
const corpStart = content.indexOf("{/* Project 2 */}");
const infraStart = content.indexOf("{/* Project 3 */}");
const nwStart = content.indexOf("{/* Project 4 */}");
const helpdeskStart = content.indexOf("{/* Project 5 */}"); // actually this was labelled as Project 5? Wait, let's check.
