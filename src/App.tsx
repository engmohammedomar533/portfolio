import { useState, useEffect } from 'react';
import { Server, Shield, Cloud, Terminal, ExternalLink, Mail, Download, Briefcase, GraduationCap, Lock, Sun, Moon, ArrowUp } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary selection:text-background transition-colors duration-300">

      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05]">
        <img src="/logo.png" alt="Watermark" className="w-[150%] md:w-[80%] max-w-4xl object-contain grayscale mix-blend-luminosity" />
      </div>

      
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-surface transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-10"><img src="/logo.png" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-xl object-cover shadow-sm ring-1 ring-border/50" /><span className="font-bold text-xl tracking-tight"><span className="text-primary">&gt;_</span> M.Younis</span></div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-muted hover:text-primary transition-colors bg-surface rounded-full border border-border"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <a href="#contact" className="hidden md:block px-4 py-2 bg-primary text-background font-semibold rounded hover:bg-sky-300 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 relative z-10">
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
              <a href="/Certificates/Mohammed_Younis.pdf" className="flex items-center gap-2 px-6 py-3 bg-surface text-text font-bold rounded hover:bg-slate-700 transition-all border border-border" target="_blank" rel="noreferrer">
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
        <section className="border-y border-surface bg-card">
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
            <div className="bg-surface rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cloud size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Osos PMS (Enterprise SaaS)</h3>
              <p className="text-muted mb-6">
                Architected, developed, and deployed a highly available custom Project Management System for an engineering consultancy. 
                Delivers enterprise-grade project management capabilities through a bespoke, high-performance Cloud infrastructure.
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
            <div className="bg-surface rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group relative overflow-hidden">
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
            <div className="bg-surface rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Enterprise IT Infrastructure Deployment</h3>
              <p className="text-muted mb-6">
                Comprehensive deployment of an enterprise-grade IT infrastructure. Features a fully segmented Omada SDN network, Active Directory (AD DS) configuration for secure file services, and a resilient 4-layer Disaster Recovery strategy including Bare Metal restores and RAID software mirroring.
              </p>
              <div className="space-y-3 mb-8">
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
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <div className="inline-flex items-center gap-2 text-green-400/80 font-medium px-3 py-1.5 bg-green-400/10 rounded-full text-sm">
                  <Cloud size={14}/> 100% Cloud Managed
                </div>
                <a href="https://github.com/engmohammedomar533/Enterprise-IT-Infrastructure-Deployment" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  View Source on GitHub <ExternalLink size={16}/>
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-surface rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cloud size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Makkah HQ Cloud Network Migration</h3>
              <p className="text-muted mb-6">
                Remotely migrated and managed the entire network infrastructure for the main Makkah headquarters. Transitioned 50+ end-users to a centralized Ruijie Cloud architecture managing 9 APs, 5 switches, and edge routing.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Cloud size={16} className="text-primary"/>
                  <span>Ruijie Cloud Management</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Server size={16} className="text-primary"/>
                  <span>Remote Enterprise Provisioning</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield size={16} className="text-primary"/>
                  <span>High-Capacity Hardware (APs/Switches)</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-green-400/80 font-medium px-3 py-1.5 bg-green-400/10 rounded-full text-sm">
                <Cloud size={14}/> 100% Cloud Managed
              </div>
            </div>

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
                  <div className="inline-flex items-center gap-2 text-yellow-400/80 font-medium px-3 py-1.5 bg-yellow-400/10 rounded-full text-sm">
                    <Lock size={14}/> Private Enterprise Repo
                  </div>
                </div>
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
                <div className="md:col-span-3 bg-surface p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-1">IT Systems Administrator & Developer</h3>
                  <p className="text-muted text-sm mb-4">Remote - Makkah Saudi Arabia & Tanta Branch</p>
                  <ul className="space-y-3 text-sm text-muted list-outside ml-4 list-disc marker:text-primary">
                      <li className="pl-1"><strong className="text-text font-semibold">Full-Stack Software Engineering (Enterprise PMS):</strong> Architected and deployed a highly available custom Project Management System (PMS) replacing legacy solutions. Developed the robust backend using Python (FastAPI), SQLAlchemy, and PostgreSQL, with a responsive React and Tailwind CSS frontend, hosted on DigitalOcean cloud infrastructure.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Internal IT Ticketing System:</strong> Engineered a comprehensive IT Helpdesk application from scratch utilizing Next.js 14 (App Router), React, and Tailwind CSS. Implemented advanced features including Role-Based Access Control (RBAC), Prisma ORM integrating with Vercel Postgres, Vercel Blob for diagnostic image storage, and automated email alerts via Resend.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Corporate Web Presence:</strong> Developed and continuously manage the company's high-performance public corporate website using Jamstack methodologies, leveraging the Vercel Edge Network for secure, global low-latency content delivery.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Active Directory & Server Administration:</strong> Designed and deployed a complete AD DS infrastructure on Windows Server 2025 bridging cross-branch operations (Makkah Headquarters & Egypt Branch). Administer centralized DNS, DHCP, remote access, and highly secure file services enforced with strict NTFS permission models.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Enterprise Networking & SDN:</strong> Implemented a highly resilient network topology via Omada SDN (TP-Link ER605, SG2218P, EAP620 HD) with strict VLAN segmentation. Simultaneously managed the migration of the Makkah HQ to a centralized Ruijie Cloud architecture, provisioning 9 access points, 5 switches, and enterprise edge routing for 50+ end-users.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Disaster Recovery & Data Security:</strong> Engineered a comprehensive 4-layer Disaster Recovery strategy incorporating RAID1 software mirroring, Volume Shadow Copies (VSS), daily Bare Metal Windows Server Backups, and offsite external repositories to guarantee business continuity and zero data loss.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Biometric Access & Identity Management:</strong> Configured and actively administer the ZKTeco BioTime 9.0.6 enterprise attendance system, securely syncing multiple MB5000 biometric terminals in real-time across geographically distributed regional branches.</li>
                    </ul>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-muted rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Concentrix</h4>
                  <p className="text-sm text-muted">Nov 2025 - Feb 2026</p>
                </div>
                <div className="md:col-span-3 bg-surface/50 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-1">Technical Support Advisor (Tier 1)</h3>
                  <p className="text-muted text-sm mb-4">Cairo, Egypt</p>
                  <ul className="space-y-3 text-sm text-muted list-outside ml-4 list-disc marker:text-primary">
                      <li className="pl-1"><strong className="text-text font-semibold">Samsung Canada Tech Support (Tier 1):</strong> Delivered rapid, real-time technical troubleshooting and resolution via live chat for Samsung Canada customers, consistently achieving high First Contact Resolution (FCR) rates.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Diagnostic & Connectivity Resolution:</strong> Diagnosed and successfully resolved complex consumer electronics issues, network connectivity dropouts, and software configurations while strictly adhering to corporate Service Level Agreements (SLAs).</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Incident Documentation & CRM Logging:</strong> Maintained comprehensive and precise technical documentation within the enterprise CRM system, accurately logging complex diagnostic scenarios to streamline Tier 2 escalation workflows.</li>
                    </ul>
                </div>
              </div>
            </div>
            
            {/* Job 3 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-muted rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Green Buildings</h4>
                  <p className="text-sm text-muted">Aug 2024 - Dec 2024</p>
                </div>
                <div className="md:col-span-3 bg-surface/50 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-1">IT Systems Administrator</h3>
                  <p className="text-muted text-sm mb-4">Makkah, Saudi Arabia</p>
                  <ul className="space-y-3 text-sm text-muted list-outside ml-4 list-disc marker:text-primary">
                      <li className="pl-1"><strong className="text-text font-semibold">IT Infrastructure Operations:</strong> Directed daily IT operations and provided comprehensive on-site technical support for corporate staff, diagnosing and rapidly resolving complex hardware, operating system, and endpoint anomalies.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Network Administration & Connectivity:</strong> Maintained maximum network infrastructure uptime by actively monitoring and troubleshooting core domain services including DNS, DHCP, and complex LAN/WAN routing infrastructure.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Active Directory & Access Management:</strong> Administered Active Directory Domain Services (AD DS) provisioning, meticulously managing user lifecycles, role-based access permissions, password security policies, and secure file-sharing controls.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Endpoint Security & Asset Management:</strong> Deployed and maintained endpoint security protocols, ensuring all corporate hardware assets remained patched, secured, and strictly compliant with internal IT governance.</li>
                    </ul>
                </div>
              </div>
            </div>

            {/* Job 4 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-muted rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Modern Designs</h4>
                  <p className="text-sm text-muted">Jun 2015 - Aug 2024</p>
                </div>
                <div className="md:col-span-3 bg-surface/50 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-1">IT Systems Administrator</h3>
                  <p className="text-muted text-sm mb-4">Makkah, Saudi Arabia</p>
                  <ul className="space-y-3 text-sm text-muted list-outside ml-4 list-disc marker:text-primary">
                      <li className="pl-1"><strong className="text-text font-semibold">Sole IT Infrastructure Leadership:</strong> Acted as the sole IT Administrator for 9 consecutive years, independently architecting, managing, and scaling the entire corporate IT infrastructure to directly align with business growth and operational demands.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Windows Server & Domain Architecture:</strong> Architected and fully administered robust Windows Server environments, driving the core Active Directory Domain Services (AD DS), Group Policy Objects (GPOs), and centralized domain security.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Enterprise Virtualization:</strong> Deployed and managed highly available virtualization platforms utilizing industry-leading hypervisors including VMware and Microsoft Hyper-V, significantly optimizing hardware resource utilization and server redundancy.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Business Continuity & Disaster Recovery:</strong> Engineered and continuously maintained comprehensive backup and disaster recovery frameworks, guaranteeing data integrity and rapid restoration capabilities in the event of catastrophic hardware failure.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Network Engineering & Diagnostics:</strong> Proactively monitored and troubleshot advanced network topology issues, actively mitigating latency and routing failures to ensure 99.9% uptime and uninterrupted business continuity.</li>
                    </ul>
                </div>
              </div>
            </div>

            {/* Job 5 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-surface -ml-px"></div>
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-muted rounded-full translate-x-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Independent Consultant</h4>
                  <p className="text-sm text-muted">Jan 2017 - Jan 2024</p>
                </div>
                <div className="md:col-span-3 bg-surface/50 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-1">Freelance IT & Security Systems Engineer</h3>
                  <p className="text-muted text-sm mb-4">Makkah, Saudi Arabia</p>
                  <ul className="space-y-3 text-sm text-muted list-outside ml-4 list-disc marker:text-primary">
                      <li className="pl-1"><strong className="text-text font-semibold">Large-Scale Security Infrastructure:</strong> Directed the end-to-end architecture and deployment of enterprise-grade CCTV and integrated physical security systems across 300+ hotels and commercial buildings, ensuring strict compliance with regional safety regulations.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Enterprise IT & Network Support:</strong> Delivered comprehensive IT consultancy and rapid-response network troubleshooting (LAN/WLAN) for over 100 enterprise facilities, significantly reducing network latency and resolving complex connectivity bottlenecks.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">Hardware Diagnostics & Maintenance:</strong> Executed advanced hardware diagnostics, proactive maintenance, and repairs across vast fleets of servers, workstations, and networking peripherals to guarantee minimal operational downtime.</li>
                      <li className="pl-1"><strong className="text-text font-semibold">High-Pressure Operations Management:</strong> Acted as a strategic operational lead during peak Umrah seasons, orchestrating large-scale hotel operations, cross-functional staff coordination, and high-volume guest services under extreme logistical pressure.</li>
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
          <div className="bg-surface rounded-xl p-8 border border-border relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Terminal size={100} />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">Full Stack Python Development Diploma</h3>
                <p className="text-lg text-muted">AMIT Learning • 180 Hours <span className="ml-2 text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded align-middle">Completed</span></p>
              </div>
              <a href="/Certificates/full stack  python .pdf" download className="hidden md:flex items-center gap-2 px-4 py-2 bg-card text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600">
                <Download size={16}/> Program Details
              </a>
            </div>
            <p className="text-muted mb-8 max-w-3xl relative z-10">
              Comprehensive full-stack software development program covering both front-end engineering and back-end architecture with Python, Django, and PostgreSQL.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sky-400">Front-End</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> HTML5 & CSS3</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> JavaScript & DOM</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> React.js & Next.js</li>
                </ul>
              </div>

              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-blue-400">Back-End (Python)</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Python Native & OOP</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Django Framework</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> APIs & Web Automation</li>
                </ul>
              </div>

              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-orange-400">Databases</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> PostgreSQL</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Advanced SQL</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> NoSQL Foundations</li>
                </ul>
              </div>
            </div>
            
            <a href="/Certificates/full stack  python .pdf" download className="md:hidden mt-6 flex justify-center items-center gap-2 px-4 py-3 bg-card text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600 relative z-10">
              <Download size={16}/> Download Program Syllabus
            </a>
          </div>

          <div className="bg-surface rounded-xl p-8 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <GraduationCap size={100} />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">Cloud Engineering Program (Architect & Administration)</h3>
                <p className="text-lg text-muted">IT Gate Academy • 6 Months (320 Hours)</p>
              </div>
              <a href="/Certificates/Cloud.pdf" download className="hidden md:flex items-center gap-2 px-4 py-2 bg-card text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600">
                <Download size={16}/> Program Details
              </a>
            </div>
            <p className="text-muted mb-8 max-w-3xl relative z-10">
              Currently enrolled in a comprehensive multi-cloud engineering diploma covering deep infrastructure, Microsoft Azure, and Amazon Web Services (AWS) architectures and administration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sky-400">Level 1: Infrastructure</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded">Completed</span>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> CCNA (Fast Track)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> MCSA Windows Server</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Linux Admin I</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Docker</li>
                </ul>
              </div>

              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-blue-400">Level 2: Azure Cloud</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">In Progress</span>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div> AZ-900: Fundamentals</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> AZ-104: Administration</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> AZ-305: Solutions Architect</li>
                </ul>
              </div>

              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-orange-400">Level 3: AWS Cloud</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-card text-muted rounded">Upcoming</span>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> AWS Solutions Architect</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> AWS SysOps Administration</li>
                </ul>
              </div>
            </div>
            
            <a href="/Certificates/Cloud.pdf" download className="md:hidden mt-6 flex justify-center items-center gap-2 px-4 py-3 bg-card text-sm font-bold rounded hover:bg-slate-700 transition-all border border-slate-600 relative z-10">
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
                      <span key={s} className="px-3 py-1 bg-surface border border-border rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-muted tracking-wider mb-3">Software Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'FastAPI', 'React.js', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'SQL'].map(s => (
                      <span key={s} className="px-3 py-1 bg-surface border border-border rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-muted tracking-wider mb-3">Systems & Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Windows Server', 'Active Directory', 'Hyper-V', 'VMware', 'Networking', 'Disaster Recovery', 'PowerShell'].map(s => (
                      <span key={s} className="px-3 py-1 bg-surface border border-border rounded-full text-sm">{s}</span>
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
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">AI Training Hackathon</h4>
                      <a href="/Certificates/Kanz AI.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Kanz AI - July 2026</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: KANZ-ATT-2C0397537D</p>
                  </div>
                </div>

                {/* MCSE Cloud */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MCSE: Cloud Platform & Infrastructure</h4>
                      <a href="/Certificates/Microsoft Certified Solutions Expert Cloud Platform and Infrastructure Charter Member.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Sep 2016</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: 50594E-9057FX</p>
                  </div>
                </div>

                {/* MCSE Server */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MCSE: Server Infrastructure</h4>
                      <a href="/Certificates/Microsoft Certified Solutions Expert Server Infrastructure.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Certified Solutions Expert - Mar 2015</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: Y2EFF4-51125D</p>
                  </div>
                </div>

                {/* MCSA Windows Server 2012 */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-primary shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MCSA: Windows Server 2012</h4>
                      <a href="/Certificates/MCSA Windows Server 2012.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Certified Solutions Associate - Mar 2015</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: 4F8968-8417A3</p>
                  </div>
                </div>

                {/* CEH */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-muted shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">Certified Ethical Hacker (CEH v8)</h4>
                      <a href="/Certificates/Certified Ethical Hacker V8.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">EC-Council - Feb 2015</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: ECC77846676460</p>
                  </div>
                </div>

                {/* MCP */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-muted shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">Microsoft Certified Professional</h4>
                      <a href="/Certificates/Microsoft Certified Professional.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">MCP Certification - Dec 2014</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: B88T2A-6DB4C9</p>
                  </div>
                </div>

                {/* MTA Networking */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-muted shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MTA: Networking Fundamentals</h4>
                      <a href="/Certificates/MTA Networking Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: D04864-B28EF4</p>
                  </div>
                </div>

                {/* MTA Security */}
                <div className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg border border-border">
                  <Shield className="text-muted shrink-0 mt-1" size={20}/>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold">MTA: Security Fundamentals</h4>
                      <a href="/Certificates/MTA Security Fundamentals.pdf" download className="text-primary hover:text-sky-300 transition-colors flex items-center gap-1 text-sm bg-card px-2 py-1 rounded border border-border">
                        <Download size={14}/> PDF
                      </a>
                    </div>
                    <p className="text-sm text-muted">Microsoft Technology Associate - Dec 2014</p>
                      <p className="text-xs text-muted/70 font-mono mt-1">Credential ID: 5F2EA9-797X01</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer id="contact" className="border-t border-surface bg-surface/30 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 relative z-10"><img src="/logo.png" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-xl object-cover shadow-sm ring-1 ring-border/50" /><span className="font-bold text-xl tracking-tight"><span className="text-primary">&gt;_</span> M.Younis</span></div>
            <p className="text-sm text-muted mt-2">© 2026 Mohammed Younis. Architected for the Cloud.</p>
          </div>
          <div className="flex gap-4">
             <a href="mailto:engmohammedomar@hotmail.com" className="text-muted hover:text-primary transition-colors">engmohammedomar@hotmail.com</a>
          </div>
        </div>
      </footer>
    
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-background shadow-lg transition-all duration-300 z-50 hover:bg-sky-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

    </div>
  )
}

export default App

