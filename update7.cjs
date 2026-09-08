const fs = require("fs");
let content = fs.readFileSync("src/App.tsx", "utf-8");

const replacements = [
  {
    find: `AI Training Hackathon</h4>
                        <a href="/Certificates/Kanz AI.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Kanz AI - July 2026</p>`,
    rep: `AI Training Hackathon</h4>
                        <a href="/Certificates/Kanz AI.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Kanz AI - July 2026</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: KANZ-ATT-2C0397537D</p>`
  },
  {
    find: `MCSE: Cloud Platform & Infrastructure</h4>
                        <a href="/Certificates/Microsoft Certified Solutions Expert Cloud Platform and Infrastructure Charter Member.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Sep 2016</p>`,
    rep: `MCSE: Cloud Platform & Infrastructure</h4>
                        <a href="/Certificates/Microsoft Certified Solutions Expert Cloud Platform and Infrastructure Charter Member.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Sep 2016</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: 50594E-9057FX</p>`
  },
  {
    find: `MCSE: Server Infrastructure</h4>
                        <a href="/Certificates/Microsoft Certified Solutions Expert Server Infrastructure.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Mar 2015</p>`,
    rep: `MCSE: Server Infrastructure</h4>
                        <a href="/Certificates/Microsoft Certified Solutions Expert Server Infrastructure.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Mar 2015</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: Y2EFF4-51125D</p>`
  },
  {
    find: `MCSA: Windows Server 2012</h4>
                        <a href="/Certificates/MCSA Windows Server 2012.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Certified Solutions Associate - Mar 2015</p>`,
    rep: `MCSA: Windows Server 2012</h4>
                        <a href="/Certificates/MCSA Windows Server 2012.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Certified Solutions Associate - Mar 2015</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: 4F8968-8417A3</p>`
  },
  {
    find: `Certified Ethical Hacker (CEH v8)</h4>
                        <a href="/Certificates/Certified Ethical Hacker V8.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">EC-Council - Feb 2015</p>`,
    rep: `Certified Ethical Hacker (CEH v8)</h4>
                        <a href="/Certificates/Certified Ethical Hacker V8.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">EC-Council - Feb 2015</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: ECC77846676460</p>`
  },
  {
    find: `Microsoft Certified Professional</h4>
                        <a href="/Certificates/Microsoft Certified Professional.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">MCP Certification - Dec 2014</p>`,
    rep: `Microsoft Certified Professional</h4>
                        <a href="/Certificates/Microsoft Certified Professional.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">MCP Certification - Dec 2014</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: B88T2A-6DB4C9</p>`
  },
  {
    find: `MTA: Networking Fundamentals</h4>
                        <a href="/Certificates/MTA Networking Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>`,
    rep: `MTA: Networking Fundamentals</h4>
                        <a href="/Certificates/MTA Networking Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: D04864-B28EF4</p>`
  },
  {
    find: `MTA: Security Fundamentals</h4>
                        <a href="/Certificates/MTA Security Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>`,
    rep: `MTA: Security Fundamentals</h4>
                        <a href="/Certificates/MTA Security Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                          <Download size={14}/> PDF
                        </a>
                      </div>
                      <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: 5F2EA9-797X01</p>`
  }
];

let missed = false;
for (const r of replacements) {
  if (content.indexOf(r.find) !== -1) {
    content = content.replace(r.find, r.rep);
  } else {
    console.log("Could not find:", r.find.substring(0, 50));
    missed = true;
  }
}

if (!missed) {
  fs.writeFileSync("src/App.tsx", content);
  console.log("Success");
}