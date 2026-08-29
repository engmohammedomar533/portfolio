import { Server, Shield, Cloud, Terminal, ExternalLink, Mail, Download, Briefcase, GraduationCap, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary selection:text-background">
      
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-surface">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight"><span className="text-primary">&gt;_</span> Younis</span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          </div>
          <a href="#contact" className="px-4 py-2 bg-primary text-background font-semibold rounded hover:bg-sky-300 transition-colors">
            Contact Me
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-primary text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Actively transitioning to Cloud & DevOps
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Mohammed</span>. <br/>
              I build and secure cloud infrastructure.
            </h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              Senior Systems Administrator with 10+ years of enterprise experience. 
              Specializing in Linux, Windows Server, Networking, and deploying full-stack 
              SaaS architectures on robust cloud environments (DigitalOcean, Azure).
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded hover:bg-sky-300 transition-all">
                <Mail size={20}/> Hire Me
              </a>
              <a href="/Certificates/Mohammed_Younis.pdf" className="flex items-center gap-2 px-6 py-3 bg-surface text-text font-bold rounded hover:bg-slate-700 transition-all border border-slate-700" target="_blank" rel="noreferrer">
                <Download size={20}/> Download CV
              </a>
            </div>
            <div className="flex gap-6 pt-6 text-muted">
              <a href="https://github.com/engmohammedomar533" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
              </a>
              <a href="https://linkedin.com/in/mohammed-younis-my" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Highlight Stats */}
        <section className="border-y border-surface bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">10+</h3>
              <p className="text-sm font-medium text-muted uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">2</h3>
              <p className="text-sm font-medium text-muted uppercase tracking-wider">Cloud Platforms</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">4+</h3>
              <p className="text-sm font-medium text-muted uppercase tracking-wider">Major Certs</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">100%</h3>
              <p className="text-sm font-medium text-muted uppercase tracking-wider">Uptime Focus</p>
            </div>
          </div>
        </section>

        {/* Featured Projects (Case Studies) */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-4 mb-12">
            <Terminal className="text-primary" size={32}/>
            <h2 className="text-3xl font-bold">Featured Architecture</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-surface rounded-xl p-8 border border-slate-700 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cloud size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Osos PMS (Enterprise SaaS)</h3>
              <p className="text-muted mb-6">
                Architected, developed, and deployed a highly available custom Project Management System for an engineering consultancy. 
                Replaces expensive tools like Procore with a bespoke Cloud infrastructure.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Server size={16} className="text-primary"/>
                  <span>DigitalOcean App Platform & Managed PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield size={16} className="text-primary"/>
                  <span>Automated PITR Backups & SSL Termination</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Terminal size={16} className="text-primary"/>
                  <span>FastAPI (Python) + React + Tailwind</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-yellow-400/80 font-medium px-3 py-1.5 bg-yellow-400/10 rounded-full text-sm">
                <Lock size={14}/> Private Enterprise Repo (In Development)
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-surface rounded-xl p-8 border border-slate-700 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Osos Corporate Platform</h3>
              <p className="text-muted mb-6">
                Engineered and deployed a modern, lightning-fast public web presence using Jamstack methodology.
                Utilized Vercel Edge CDN for global performance with zero monthly hosting costs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Cloud size={16} className="text-primary"/>
                  <span>Vercel Edge Network</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield size={16} className="text-primary"/>
                  <span>Automated CI/CD via GitHub</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Terminal size={16} className="text-primary"/>
                  <span>React + SEO Optimization</span>
                </div>
              </div>
              <a href="https://ososalbnaa.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Visit Live Site <ExternalLink size={16}/>
              </a>
            </div>
          

            {/* Project 3 */}
            <div className="bg-surface rounded-xl p-8 border border-slate-700 hover:border-primary/50 transition-colors group relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Enterprise IT Infrastructure Deployment</h3>
              <p className="text-muted mb-6 max-w-3xl">
                Comprehensive deployment of an enterprise-grade IT infrastructure. Features a fully segmented Omada SDN network, Active Directory (AD DS) configuration for secure file services, and a resilient 4-layer Disaster Recovery strategy including Bare Metal restores and RAID software mirroring.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Server size={16} className="text-primary"/>
                  <span>Windows Server 2025 & AD DS</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Cloud size={16} className="text-primary"/>
                  <span>Omada SDN & VLANs</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield size={16} className="text-primary"/>
                  <span>Disaster Recovery (RAID/VSS)</span>
                </div>
              </div>
              <a href="https://github.com/engmohammedomar533/Enterprise-IT-Infrastructure-Deployment" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View Source on GitHub <ExternalLink size={16}/>
              </a>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-primary" size={32}/>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-12">
            
            {/* Job 1 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-primary rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Osos Engineering</h4>
                  <p className="text-sm text-muted">Apr 2025 - Present</p>
                </div>
                <div className="md:col-span-3 bg-surface p-6 rounded-xl border border-slate-800">
                  <h3 className="text-xl font-bold mb-1">IT Systems Administrator & Developer</h3>
                  <p className="text-muted text-sm mb-4">Remote - Makkah Saudi Arabia & Tanta Branch</p>
                  <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                    <li>Designed and deployed a complete Active Directory-based infrastructure for 16 employees, including centralized authentication, secure file services, printer deployment, attendance management, backup, and disaster recovery solutions.</li>
                    <li>Deployed and administer Windows Server 2025 managing AD DS, DNS, centralized DHCP, and restricted file shares with strict NTFS security models.</li>
                    <li>Designed and implemented a resilient network topology via Omada SDN, configuring TP-Link ER605 routers, SG2218P managed switches, EAP620 HD access points, and VLAN segmentation.</li>
                    <li>Engineered a comprehensive 4-layer Disaster Recovery strategy: RAID1 software mirroring, Volume Shadow Copies, daily Bare Metal Windows Server Backups, and external backup repositories.</li>
                    <li>Configured ZKTeco BioTime 9.0.6 attendance system, syncing MB5000 biometric terminals in real-time.</li>
                    <li>Developed full-stack web application using Python (FastAPI), PostgreSQL, and React with Git version control.</li>
                    <li>Provisioned and managed Linux-based cloud infrastructure (DigitalOcean droplets) to host custom enterprise PMS.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-slate-600 rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Concentrix</h4>
                  <p className="text-sm text-muted">Nov 2025 - Feb 2026</p>
                </div>
                <div className="md:col-span-3 bg-surface/50 p-6 rounded-xl border border-slate-800/50">
                  <h3 className="text-xl font-bold mb-1">Technical Support Advisor (Tier 1)</h3>
                  <p className="text-muted text-sm mb-4">Cairo, Egypt</p>
                  <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                    <li>Provided real-time Tier 1 technical troubleshooting for international customers ensuring rapid First Call Resolution (FCR).</li>
                    <li>Diagnosed and resolved account access, connectivity, and software configuration issues while strictly adhering to SLAs.</li>
                    <li>Maintained detailed technical documentation and logged complex technical scenarios in the CRM system with high accuracy to support Tier 2 escalations.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Job 3 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-slate-600 rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Green Buildings</h4>
                  <p className="text-sm text-muted">Aug 2024 - Dec 2024</p>
                </div>
                <div className="md:col-span-3 bg-surface/50 p-6 rounded-xl border border-slate-800/50">
                  <h3 className="text-xl font-bold mb-1">IT Systems Administrator</h3>
                  <p className="text-muted text-sm mb-4">Makkah, Saudi Arabia</p>
                  <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                    <li>Managed daily IT operations and provided on-site technical support for staff covering hardware, network, and OS issues.</li>
                    <li>Maintained network infrastructure uptime by troubleshooting DNS, DHCP, and LAN/WAN connectivity issues effectively.</li>
                    <li>Administered Active Directory user accounts - managing permissions, password resets, and file-sharing access controls.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 4 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-slate-600 rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Modern Designs</h4>
                  <p className="text-sm text-muted">Jun 2015 - Aug 2024</p>
                </div>
                <div className="md:col-span-3 bg-surface/50 p-6 rounded-xl border border-slate-800/50">
                  <h3 className="text-xl font-bold mb-1">IT Systems Administrator</h3>
                  <p className="text-muted text-sm mb-4">Makkah, Saudi Arabia</p>
                  <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                    <li>Sole IT administrator managing the full IT infrastructure independently for 9 consecutive years.</li>
                    <li>Administered Windows Server environments and Active Directory Domain Services (AD DS).</li>
                    <li>Managed virtualization platforms including VMware and Hyper-V, ensuring high availability.</li>
                    <li>Implemented and maintained comprehensive backup and disaster recovery solutions.</li>
                    <li>Troubleshot network and system issues ensuring maximum uptime and business continuity.</li>
                    <li>Served as primary technical contact for all IT-related operations and vendor communications.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Training & Diplomas */}
        <section id="training" className="max-w-6xl mx-auto px-6 py-24 border-t border-surface">
          <div className="flex items-center gap-4 mb-12">
            <Cloud className="text-primary" size={32}/>
            <h2 className="text-3xl font-bold">Training & Diplomas</h2>
          </div>

          {/* AMIT Full Stack Python */}
          <div className="bg-surface rounded-xl p-8 border border-slate-700 relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Terminal size={100} />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">Full Stack Python Development Diploma</h3>
                <p className="text-lg text-muted">AMIT Learning • 180 Hours <span className="ml-2 text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded align-middle">Completed</span></p>
              </div>
              <a href="/Certificates/full stack  python .pdf" download className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-800 text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600">
                <Download size={16}/> Program Details
              </a>
            </div>
            <p className="text-muted mb-8 max-w-3xl relative z-10">
              Comprehensive full-stack software development program covering both front-end engineering and back-end architecture with Python, Django, and PostgreSQL.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sky-400">Front-End</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> HTML5 & CSS3</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> JavaScript & DOM</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> React.js & Next.js</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-blue-400">Back-End (Python)</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Python Native & OOP</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Django Framework</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> APIs & Web Automation</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-orange-400">Databases</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> PostgreSQL</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Advanced SQL</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> NoSQL Foundations</li>
                </ul>
              </div>
            </div>
            
            <a href="/Certificates/full stack  python .pdf" download className="md:hidden mt-6 flex justify-center items-center gap-2 px-4 py-3 bg-slate-800 text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600 relative z-10">
              <Download size={16}/> Download Program Syllabus
            </a>
          </div>

          <div className="bg-surface rounded-xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <GraduationCap size={100} />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">Cloud Engineering Program (Architect & Administration)</h3>
                <p className="text-lg text-muted">IT Gate Academy • 6 Months (320 Hours)</p>
              </div>
              <a href="/Certificates/Cloud.pdf" download className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-800 text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600">
                <Download size={16}/> Program Details
              </a>
            </div>
            <p className="text-muted mb-8 max-w-3xl relative z-10">
              Currently enrolled in a comprehensive multi-cloud engineering diploma covering deep infrastructure, Microsoft Azure, and Amazon Web Services (AWS) architectures and administration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sky-400">Level 1: Infrastructure</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded">Completed</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> CCNA (Fast Track)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> MCSA Windows Server</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Linux Admin I</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Docker</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-blue-400">Level 2: Azure Cloud</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">In Progress</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div> AZ-900: Fundamentals</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> AZ-104: Administration</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> AZ-305: Solutions Architect</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-orange-400">Level 3: AWS Cloud</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-slate-500/20 text-slate-400 rounded">Upcoming</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> AWS Solutions Architect</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> AWS SysOps Administration</li>
                </ul>
              </div>
            </div>
            
            <a href="/Certificates/Cloud.pdf" download className="md:hidden mt-6 flex justify-center items-center gap-2 px-4 py-3 bg-slate-800 text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600 relative z-10">
              <Download size={16}/> Download Program Syllabus
            </a>
          </div>
        </section>

        {/* Skills & Certs */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-surface">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Terminal className="text-primary" size={28}/>
                <h2 className="text-2xl font-bold">Technical Arsenal</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase text-muted tracking-wider mb-3">Cloud & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Microsoft Azure', 'AWS', 'Linux', 'Docker', 'DigitalOcean', 'Git', 'Vercel'].map(s => (
                      <span key={s} className="px-3 py-1 bg-surface border border-slate-700 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-muted tracking-wider mb-3">Software Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'FastAPI', 'React.js', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'SQL'].map(s => (
                      <span key={s} className="px-3 py-1 bg-surface border border-slate-700 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-muted tracking-wider mb-3">Systems & Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Windows Server', 'Active Directory', 'Hyper-V', 'VMware', 'Networking', 'Disaster Recovery', 'PowerShell'].map(s => (
                      <span key={s} className="px-3 py-1 bg-surface border border-slate-700 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="text-primary" size={28}/>
                <h2 className="text-2xl font-bold">Certifications & Training</h2>
              </div>
              <div className="space-y-4">
                {/* Kanz AI */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">AI Training Hackathon</h4>
                      <a href="/Certificates/Kanz AI.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Kanz AI - July 2026</p>
                  </div>
                </div>

                {/* MCSE Cloud */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MCSE: Cloud Platform & Infrastructure</h4>
                      <a href="/Certificates/Microsoft Certified Solutions Expert Cloud Platform and Infrastructure Charter Member.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Sep 2016</p>
                  </div>
                </div>

                {/* MCSE Server */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MCSE: Server Infrastructure</h4>
                      <a href="/Certificates/Microsoft Certified Solutions Expert Server Infrastructure.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Mar 2015</p>
                  </div>
                </div>

                {/* MCSA Windows Server 2012 */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MCSA: Windows Server 2012</h4>
                      <a href="/Certificates/MCSA Windows Server 2012.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Certified Solutions Associate - Mar 2015</p>
                  </div>
                </div>

                {/* CEH */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-slate-400 shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">Certified Ethical Hacker (CEH v8)</h4>
                      <a href="/Certificates/Certified Ethical Hacker V8.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">EC-Council - Feb 2015</p>
                  </div>
                </div>

                {/* MCP */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-slate-400 shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">Microsoft Certified Professional</h4>
                      <a href="/Certificates/Microsoft Certified Professional.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">MCP Certification - Dec 2014</p>
                  </div>
                </div>

                {/* MTA Networking */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-slate-400 shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MTA: Networking Fundamentals</h4>
                      <a href="/Certificates/MTA Networking Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>
                  </div>
                </div>

                {/* MTA Security */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-slate-800/50">
                  <Shield className="text-slate-400 shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MTA: Security Fundamentals</h4>
                      <a href="/Certificates/MTA Security Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer id="contact" className="border-t border-surface bg-surface/30">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-bold text-xl tracking-tight"><span className="text-primary">&gt;_</span> Younis</span>
            <p className="text-sm text-muted mt-2">© 2026 Mohammed Younis. Architected for the Cloud.</p>
          </div>
          <div className="flex gap-4">
             <a href="mailto:engmohammedomar@hotmail.com" className="text-muted hover:text-primary transition-colors">engmohammedomar@hotmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

