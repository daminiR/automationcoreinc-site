import Image from "next/image";

const contactEmail = "damini@automationcoreinc.com";
const supportEmail = "support@automationcoreinc.com";
const medspaEmail = "medspa@automationcoreinc.com";
const fintechEmail = "fintech@automationcoreinc.com";

const heroStats = [
  { label: "Primary build", value: "Financial Parsley" },
  { label: "Engagements", value: "2 to 6 week sprints" },
  { label: "Model", value: "Founder led holding company" },
];

const focusAreas = [
  {
    tag: "Automation Studio",
    title: "Products first, services second.",
    description:
      "Each engagement feeds the holding company. We prototype automations, keep the IP, and turn the best ones into standalone products.",
  },
  {
    tag: "Applied AI",
    title: "AI tooling that survives reality.",
    description:
      "Healthcare, operations, finance, and media teams get copilots and automations tuned to their messy data, tested with humans in the loop.",
  },
  {
    tag: "Startup Energy",
    title: "One builder, zero layers.",
    description:
      "Damini partners directly with founders and operators, so every iteration ships fast and actually reflects the workflow.",
  },
];

const services = [
  {
    icon: "⚡️",
    title: "Workflow & Ops Automation",
    description:
      "Route inbound requests, sync CRMs + billing, and automate approvals so teams focus on high leverage work.",
  },
  {
    icon: "🧠",
    title: "Custom AI Copilots & Agents",
    description:
      "Purpose built copilots trained on your knowledge base, with human in the loop guardrails baked in.",
  },
  {
    icon: "🏥",
    title: "Healthcare & MedSpa Systems",
    description:
      "EMR extensions, documentation tools, and AI intake layers that finally feel modern for cash pay practices.",
  },
  {
    icon: "🎬",
    title: "Content & Video Automation",
    description:
      "Generate enablement assets, video scripts, and clips at scale while staying on brand.",
  },
  {
    icon: "🧱",
    title: "Full Stack AI Products",
    description:
      "Design, front end, back end, infrastructure, and deployment handled end to end so prototypes become durable assets.",
  },
  {
    icon: "🔌",
    title: "API & Integration Layer",
    description:
      "Connect SaaS, data lakes, and proprietary systems with clean, documented APIs and telemetry.",
  },
];

const stack = [
  "Python",
  "TypeScript",
  "Next.js",
  "Node.js",
  "LangChain",
  "OpenAI / Anthropic",
  "Postgres",
  "Prisma",
  "Temporal",
  "AWS",
  "GCP",
  "Docker",
];

const projects = [
  {
    name: "MedSpa Intelligence Platform",
    status: "In development",
    summary:
      "Healthcare software still feels stuck in 2010. We’re fixing that with an AI first operating system for med spas and cash pay practices.",
    details:
      "Automated intake, SOAP notes, executive insights, and workflow routing live in the same collaborative workspace. Design partners build new modules directly with our team.",
    primaryCtaLabel: "Join MedSpa list",
    primaryHref: `mailto:${medspaEmail}?subject=MedSpa%20Partner%20List`,
    secondaryCtaLabel: "Pitch your workflow",
    secondaryHref: `mailto:${supportEmail}?subject=Pitch%20Your%20Automation`,
  },
  {
    name: "Financial Parsley",
    status: "Migration & scale up",
    summary:
      "Financial Parsley turns messy bank statements into clean, structured data for lenders, fintechs, and accounting teams.",
    details:
      "Full stack SaaS with a secure web app, API layer, and worker tier that runs our custom ML parsers on managed compute. Everything sits on hardened cloud infrastructure with relational storage, caching, billing, and auth. We’re moving the entire deployment into the Automation Core cloud org for tighter IAM, budgets, and scaling guardrails.",
    primaryCtaLabel: "Join Financial Parsley list",
    primaryHref: `mailto:${fintechEmail}?subject=Financial%20Parsley`,
    secondaryCtaLabel: "Get migration updates",
    secondaryHref: `mailto:${supportEmail}?subject=Financial%20Parsley%20Updates`,
  },
];

const approach = [
  {
    title: "Frame the workflow",
    detail:
      "Rapid interviews, call transcripts, or loom walkthroughs inform a simple diagram of the workflow and success metrics.",
  },
  {
    title: "Prototype the brain",
    detail:
      "We wire the data sources, prompts, and automations inside a secure sandbox, validating with real operators every few days.",
  },
  {
    title: "Harden + deploy",
    detail:
      "Logging, alerting, and access controls get layered in before packaging the system with documentation and training content.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 sm:px-10 lg:px-12">
        <header className="group relative overflow-hidden rounded-[32px] border border-slate-200/50 bg-gradient-to-br from-white via-white to-slate-50/30 p-8 text-slate-900 shadow-xl backdrop-blur-sm sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 opacity-50"></div>
          <div className="relative flex flex-col gap-8">
            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                Automation Core Inc.
              </p>
              <h1 className="text-3xl font-bold leading-tight text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text sm:text-5xl">
                Hi, I&apos;m Damini. I run a founder led automation studio
                that builds simple, trustworthy AI systems for real businesses.
              </h1>
              <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
                Automation Core is the holding company where I park every
                automation asset I build. I hunt for tiny niches that can be
                shipped by a single founder, then take them from zero to one,
                moving from raw idea to an end to end product while keeping the
                IP in house.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contactEmail}?subject=Automation%20Core%20Intro`}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:from-slate-800 hover:to-slate-700"
                >
                  Email me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border-2 border-slate-300/70 bg-white/50 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-slate-400/70 hover:-translate-y-0.5"
                >
                  See active builds
                </a>
              </div>
            </div>
            <div className="grid gap-4 rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-5 shadow-inner backdrop-blur-sm sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="space-y-1 border-l-2 border-slate-200 pl-3 first:border-0 first:pl-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section
          id="projects"
          className="relative overflow-hidden rounded-[28px] border border-slate-300/20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-8 text-white shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10"></div>
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-300/90">
                Active builds
              </p>
              <h2 className="mt-2 text-3xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                What I&apos;m shipping right now
              </h2>
            </div>
            <span className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/90">
              Financial systems · Healthcare
            </span>
          </div>
          <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-purple-300/80">
                  {project.status}
                </p>
                <h3 className="mt-3 text-2xl font-bold bg-gradient-to-r from-white to-slate-100 bg-clip-text text-transparent">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm text-slate-100 leading-relaxed">{project.summary}</p>
                <p className="mt-2 text-sm text-slate-200/80 leading-relaxed">{project.details}</p>
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  <a
                    href={project.primaryHref}
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-white to-slate-100 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:from-slate-100 hover:to-white"
                  >
                    {project.primaryCtaLabel}
                  </a>
                  {project.secondaryCtaLabel && project.secondaryHref ? (
                    <a
                      href={project.secondaryHref}
                      className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
                    >
                      {project.secondaryCtaLabel}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-[28px] border border-slate-200/50 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-xl sm:grid-cols-3">
          {focusAreas.map((area, index) => (
            <article
              key={area.tag}
              className="group relative flex flex-col rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-slate-300/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/20 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 inline-block text-xs font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {area.tag}
              </span>
              <h3 className="relative z-10 mt-3 text-lg font-bold text-slate-900">{area.title}</h3>
              <p className="relative z-10 mt-3 text-sm text-slate-600 leading-relaxed">{area.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </article>
          ))}
        </section>

        <section
          id="services"
          className="relative overflow-hidden rounded-[28px] border border-slate-200/50 bg-gradient-to-br from-white via-slate-50/30 to-white p-8 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-purple-50/20 opacity-30"></div>
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Where Automation Core ships value
              </h2>
            </div>
            <p className="rounded-full bg-slate-100/80 px-4 py-1 text-sm text-slate-600 backdrop-blur-sm">
              High speed builds · Honest scopes · Systems that last
            </p>
          </div>
          <div className="relative z-10 mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300/80"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/30 group-hover:to-purple-50/30 transition-all duration-500"></div>
                <div className="relative z-10 flex items-center gap-3 text-xl">
                  <span className="text-3xl filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                  <p className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {service.title}
                  </p>
                </div>
                <p className="relative z-10 mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] border border-slate-200/50 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/20 via-transparent to-purple-50/20 opacity-40"></div>
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tooling & foundations
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Our default stack</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Modern front end, dependable infrastructure, and AI/ML building
              blocks that are production ready from day one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {stack.map((item, index) => (
                <span
                  key={item}
                  className="group relative inline-flex items-center rounded-full border border-slate-300/60 bg-gradient-to-r from-white to-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:border-indigo-300 hover:from-indigo-50 hover:to-purple-50"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] border border-slate-200/50 bg-gradient-to-br from-white via-indigo-50/10 to-white p-8 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-purple-50/20 opacity-50"></div>
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Working model
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                How engagements run
              </h2>
            </div>
            <p className="rounded-full bg-indigo-100/60 px-4 py-1 text-sm text-slate-700 backdrop-blur-sm">
              Transparent milestones · Humans in the loop · Weekly demos
            </p>
          </div>
          <div className="relative z-10 mt-8 grid gap-6 md:grid-cols-3">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className="group relative rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-indigo-50/30 p-6 pt-10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-300/60"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-lg font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                {index < approach.length - 1 && (
                  <div className="absolute top-2 left-[4.5rem] h-0.5 w-[calc(100%-2rem)] bg-gradient-to-r from-indigo-300 to-transparent md:w-[calc(100%+1rem)]"></div>
                )}
                <h3 className="mt-6 text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] border border-slate-200/50 bg-gradient-to-br from-white via-slate-50/30 to-white p-8 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-purple-50/20 opacity-30"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Founder & CEO
              </p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">Damini Rijhwani</h2>
              <p className="mt-2 text-lg text-slate-600">Building AI systems that actually ship</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Image and Quick Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className="group relative mx-auto w-fit">
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Image
                      src="/damini-profile.png"
                      alt="Damini Rijhwani"
                      width={280}
                      height={280}
                      className="relative w-64 h-auto rounded-2xl shadow-2xl"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>

                  {/* Contact Card */}
                  <div className="rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-lg">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Connect</h3>
                    <div className="space-y-3">
                      <a
                        href={`mailto:${contactEmail}`}
                        className="block text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                      >
                        📧 {contactEmail}
                      </a>
                      <a
                        href={`mailto:${supportEmail}`}
                        className="block text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                      >
                        💬 {supportEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Story and Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Journey Cards */}
                <div className="grid gap-4">
                  <div className="group rounded-xl border border-slate-200/60 bg-gradient-to-br from-white to-indigo-50/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">🎓</span> Research & Technical Background
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Over the past decade, I've developed expertise across computer engineering, AI research, and product development.
                      During my undergraduate years, I focused on machine learning research, publishing papers on active learning,
                      developing experimental models, and implementing production-grade prototypes. This work led to an internship
                      at Philips through CVPR, which subsequently converted to a full-time AI Research Scientist position, a role
                      typically reserved for PhD candidates. This experience in diagnostic workflows and healthcare technology,
                      combined with my background growing up around medical professionals, continues to inform my approach to
                      building automation solutions for healthcare teams.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-slate-200/60 bg-gradient-to-br from-white to-purple-50/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">🚀</span> Automation Core Vision
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Automation Core serves as a holding company for proprietary automation technologies and products. The strategy
                      focuses on identifying underserved market niches with defensible competitive advantages, specifically opportunities
                      that can be executed by a solo founder from concept through deployment. Each venture progresses from initial ideation
                      to fully realized product while maintaining complete intellectual property ownership. The approach emphasizes deep
                      technical expertise in machine learning infrastructure, rigorous iteration cycles, and a commitment to delivering
                      seamless operational workflows that meet the practical needs of end users.
                    </p>
                  </div>
                </div>

                {/* Philosophy Quote */}
                <div className="relative rounded-xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 p-6">
                  <span className="absolute -top-2 -left-2 text-4xl text-indigo-300/50 font-serif">&ldquo;</span>
                  <p className="relative z-10 text-base text-slate-700 italic leading-relaxed">
                    Today that means MedSpa Intelligence, a platform I wanted as a med spa user myself, and Financial Parsley, a
                    lightweight way to transform messy financial files into editable data. Everything stays fast, deeply
                    technical, and relentlessly iterative until the workflow feels smooth.
                  </p>
                  <span className="absolute -bottom-4 right-2 text-4xl text-indigo-300/50 font-serif rotate-180">&rdquo;</span>
                </div>

                {/* Specific Contact Info */}
                <div className="rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">For Specific Inquiries</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <span className="font-semibold">MedSpa teams:</span> {medspaEmail}
                    </div>
                    <div>
                      <span className="font-semibold">FinTech/Financial Parsley:</span> {fintechEmail}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-8 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          © {new Date().getFullYear()} Automation Core Inc.
        </footer>
      </div>
    </div>
  );
}
