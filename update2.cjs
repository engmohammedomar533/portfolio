const fs = require("fs");

let content = fs.readFileSync("src/App.tsx", "utf-8");

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
  /<\/div>\s*\)\s*\}\s*export default App/i,
  `${scrollTopBtn}\n    </div>\n  )\n}\n\nexport default App`
);

fs.writeFileSync("src/App.tsx", content);
console.log("Done adding scroll button");