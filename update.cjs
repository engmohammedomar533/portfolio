const fs = require("fs");

let content = fs.readFileSync("src/App.tsx", "utf-8");

// 1. Add ArrowUp to lucide-react imports
content = content.replace(
  "import { Server, Shield, Cloud, Terminal, ExternalLink, Mail, Download, Briefcase, GraduationCap, Lock, Sun, Moon } from 'lucide-react';",
  "import { Server, Shield, Cloud, Terminal, ExternalLink, Mail, Download, Briefcase, GraduationCap, Lock, Sun, Moon, ArrowUp } from 'lucide-react';"
);

// 2. Add Home to Navbar
content = content.replace(
  `<a href="#about" className="hover:text-primary transition-colors">About</a>`,
  `<a href="#" className="hover:text-primary transition-colors">Home</a>\n            <a href="#about" className="hover:text-primary transition-colors">About</a>`
);

// 3. Add Project 5
const project5 = `
              {/* Project 5 */}
              <div className="bg-surface rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Terminal size={100} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Internal IT Helpdesk System</h3>
                <p className="text-muted mb-6">
                  Engineered a comprehensive internal IT ticketing system with role-based access control, real-time status tracking, automated email alerts via Resend, and full photographic documentation for hardware resolutions.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <Server size={16} className="text-primary"/>
                    <span>Next.js 14 App Router & Vercel Postgres</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Cloud size={16} className="text-primary"/>
                    <span>Prisma ORM & @vercel/blob Storage</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Terminal size={16} className="text-primary"/>
                    <span>React + Tailwind CSS + Shadcn UI</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <a href="https://helpdesk.ososalbnaa.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    Visit Live Portal <ExternalLink size={16}/>
                  </a>
                  <a href="https://github.com/engmohammedomar533/IT-Ticketing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    View Source <ExternalLink size={16}/>
                  </a>
                </div>
              </div>`;

// Find where "Project 4" div ends
let p4Index = content.indexOf("{/* Project 4 */}");
if (p4Index !== -1) {
  // Find the closing div of Project 4
  // It should be followed by `</div>` for the grid, then `</section>`
  let sectionEnd = content.indexOf("</section>", p4Index);
  let insertPos = content.lastIndexOf("</div>", sectionEnd);
  // Actually, the grid is wrapped in a div. 
  // Let's replace the grid's closing div.
  // Wait, let's just find `            </div>\n          </section>\n\n          {/* Experience */}`
  content = content.replace(
    /(\s*)<\/div>\s*<\/section>\s*\{\/\* Experience \*\/\}/,
    `\n${project5}\n$1</div>\n          </section>\n\n          {/* Experience */}`
  );
} else {
  console.log("Could not find Project 4");
}

// 4. Add Scroll-To-Top button state and UI
// Add state
content = content.replace(
  "const [isDark, setIsDark] = useState(true);",
  "const [isDark, setIsDark] = useState(true);\n  const [showScrollTop, setShowScrollTop] = useState(false);\n\n  useEffect(() => {\n    const handleScroll = () => {\n      setShowScrollTop(window.scrollY > 400);\n    };\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, []);"
);

// Add Button UI at the end, right before the last closing div of the App
const scrollTopBtn = `
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={\`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-background shadow-lg transition-all duration-300 z-50 hover:bg-sky-300 \${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }\`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
`;

content = content.replace(
  /<\/div>\s*$/i,
  `${scrollTopBtn}\n    </div>`
);

fs.writeFileSync("src/App.tsx", content);
console.log("Done updating App.tsx");