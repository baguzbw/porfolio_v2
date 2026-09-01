// Single source of truth for all site content.
// Edit this file to update the site — no other file needs to change.

export const profile = {
  name: "Bagus Brang Wicaksono",
  role: "Software Engineer",
  /** path under /public — drop your photo at this path (e.g. public/avatar.jpg) to replace the initials avatar in the sidebar */
  photoSrc: "/avatar.jpeg",
  tagline:
    "Frontend Developer & System Analyst building structured, production-grade web platforms, from UI implementation down to the data and business logic underneath. I work across Next.js/React frontends and Oracle SQL/Supabase-backed systems, pairing hands-on development with clear technical documentation so what ships is both functional and maintainable.",
  location: "Surakarta, Indonesia",
  status: "Open to Work",
  statuses: ["Open to Work", "Available for Freelance", "Building Side Projects"],
  email: "bagusbwicaksono5@gmail.com",
  phone: "+62 812-2943-8346",
  links: {
    github: "https://github.com/baguswicaksono",
    linkedin: "https://www.linkedin.com/in/bagus-brang-wicaksono-aa417021b/",
    instagram: "https://www.instagram.com/baguzbw/",
    portfolio: "https://bagusbrangwicaksono.vercel.app",
  },
  about: [
    "I'm Bagus, a Surakarta-based Software Engineer focused on building web platforms that are well-structured, maintainable, and grounded in real requirements, not just interfaces that look finished.",
    "My work spans frontend engineering (Next.js, React, TypeScript) and backend/systems analysis (Oracle SQL, Supabase, ERP data pipelines), which lets me move between UI implementation and the data and business logic underneath it.",
    "I combine technical execution with structured documentation and clear communication: writing Functional Design Documents, use cases, and process flows alongside the code itself, so requirements stay traceable from planning through to production.",
  ],
};

export type Experience = {
  title: string;
  company: string;
  companyContext: string;
  logoInitials: string;
  logoSrc: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  workMode: string;
  responsibilities: string[];
  whatILearned: string[];
  impact: string[];
};

export const experience: Experience[] = [
  {
    title: "Green Web Developer Intern",
    company: "INCO Academy",
    companyContext: "Green tech / sustainability academy",
    logoInitials: "IA",
    logoSrc: "/logos/inco-academy.jpg",
    location: "Paris, France",
    period: "Jul 2025 – Sep 2025",
    duration: "3 months",
    type: "Internship",
    workMode: "Remote",
    responsibilities: [
      "Analyzed computational resource consumption, carbon footprint evaluation, and optimization strategies for AI systems.",
      "Implemented methodologies for integrating environmental considerations into digital product development cycles.",
      "Assessed and implemented sustainable practices in technology operations and infrastructure.",
    ],
    whatILearned: [
      "Learned how to quantify the environmental cost of AI/software systems, translating compute usage into carbon-footprint terms.",
      "Gained a framework for embedding sustainability considerations into a product development cycle rather than treating it as an afterthought.",
    ],
    impact: ["Contributed methodologies INCO Academy could apply across future green-tech product assessments.", "Connected a sustainability lens to standard software development practices for the team."],
  },
  {
    title: "System Analyst",
    company: "PT IFARS Pharmaceutical Laboratories",
    companyContext: "Pharmaceutical manufacturer",
    logoInitials: "IF",
    logoSrc: "/logos/ifars.png",
    location: "Karanganyar, Indonesia",
    period: "Oct 2024 – Apr 2025",
    duration: "7 months",
    type: "Contract",
    workMode: "Onsite",
    responsibilities: [
      "Wrote and optimized Oracle SQL queries for ERP data extraction, analysis, and executive reporting.",
      "Produced Functional Design Documents (FDD), use cases, user stories, and process flow diagrams for 3 internal systems.",
      "Bridged business requirement gaps between pharmaceutical operations and the engineering team.",
    ],
    whatILearned: [
      "Learned to translate pharmaceutical business operations into structured technical requirements (FDD, use cases, process flows).",
      "Built fluency in Oracle SQL for large-scale ERP data extraction and executive reporting.",
    ],
    impact: [
      "Gave the engineering team clear, implementation-ready specs across 3 internal systems, reducing requirement ambiguity.",
      "Improved the handoff between pharmaceutical operations and engineering by acting as the technical bridge.",
    ],
  },
  {
    title: "Frontend Developer & UI/UX Designer Intern",
    company: "PT STAR Software Indonesia",
    companyContext: "Enterprise software house",
    logoInitials: "SS",
    logoSrc: "/logos/star-software.jpg",
    location: "Yogyakarta, Indonesia",
    period: "Feb 2024 – Jun 2024",
    duration: "5 months",
    type: "Internship",
    workMode: "Onsite",
    responsibilities: [
      "Built a reusable React.js component library with Ant Design and custom Tailwind CSS variants across 10+ internal web modules.",
      "Implemented multi-criteria filter and full-text search with direct database integration for enterprise clients.",
    ],
    whatILearned: [
      "Learned to design components for reuse across many different internal modules, not a single product.",
      "Gained experience layering custom Tailwind CSS on top of a design system (Ant Design) without breaking consistency.",
    ],
    impact: ["Cut UI development time across 10+ internal modules by supplying a shared component library.", "Enabled faster, more consistent data lookup for enterprise clients through the multi-criteria filter and search feature."],
  },
  {
    title: "Frontend Developer & UI/UX Designer Intern",
    company: "PT SIMS Life Media",
    companyContext: "IoT monitoring platform startup",
    logoInitials: "SL",
    logoSrc: "/logos/sims-life-media.png",
    location: "Yogyakarta, Indonesia",
    period: "Jan 2023 – Dec 2023",
    duration: "1 year",
    type: "Internship",
    workMode: "Onsite",
    responsibilities: [
      "Built a real-time IoT device monitoring dashboard using React.js, with responsive pages per device category.",
      "Designed and consumed RESTful APIs for secure frontend–backend data transfer between IoT devices and the web client.",
      "Delivered UI/UX wireframes in Figma; implemented pixel-accurate components in production.",
    ],
    whatILearned: [
      "Learned the full loop of building a real-time monitoring UI, from Figma wireframe to a working dashboard consuming live IoT data.",
      "Improved my ability to design REST API contracts between frontend and IoT backend services.",
    ],
    impact: ["Delivered a working device-monitoring dashboard used to track live IoT device status by category.", "Sped up design-to-dev handoff by implementing pixel-accurate components directly from Figma wireframes."],
  },
];

export type Education = {
  school: string;
  degree: string;
  field: string;
  gpa?: string;
  period: string;
  location: string;
  logoInitials: string;
  logoSrc: string;
};

export const education: Education[] = [
  {
    school: "Telkom University",
    degree: "Bachelor's degree",
    field: "S1 Informatika",
    gpa: "3.70 / 4.00",
    period: "2025 – Expected 2027",
    location: "Bandung, Indonesia",
    logoInitials: "TU",
    logoSrc: "/logos/telkom-university.jpg",
  },
  {
    school: "Universitas Sebelas Maret (UNS)",
    degree: "Associate's degree",
    field: "D3 Teknik Informatika",
    gpa: "3.80 / 4.00",
    period: "2021 – 2024",
    location: "Surakarta, Indonesia",
    logoInitials: "UNS",
    logoSrc: "/logos/uns.jpg",
  },
  {
    school: "SMK Negeri 2 Surakarta",
    degree: "Vocational High School",
    field: "Teknik Komputer Jaringan",
    period: "2018 – 2021",
    location: "Surakarta, Indonesia",
    logoInitials: "SMK",
    logoSrc: "/logos/smkn-2-surakarta.png",
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Kotlin", "Go", "Python", "PHP", "Java", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["Next.js 14", "React.js", "React Router", "Tailwind CSS", "Framer Motion", "Ant Design", "Figma"],
  },
  {
    label: "Backend & DB",
    skills: ["Node.js", "Supabase", "PostgreSQL", "Oracle SQL", "MySQL", "Laravel", "RESTful API", "Upstash Redis"],
  },
  {
    label: "Mobile",
    skills: ["Android SDK", "Kotlin", "Jetpack Compose", "ML Kit OCR", "AlarmManager", "App Widgets", "Gradle", "JUnit"],
  },
  {
    label: "Bots & Automation",
    skills: ["Telegram Bot API", "Google Calendar API", "Notion API", "Webhooks", "OAuth 2.0", "Serverless Functions", "Regex Parsing"],
  },
  {
    label: "Data & Analytics",
    skills: ["scikit-learn", "Plotly", "Streamlit"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Jira", "Notion", "Linux", "Android Studio"],
  },
];

export type Achievement = {
  title: string;
  issuer: string;
  type: "Certification" | "Course" | "Competition";
  category: string;
  issued?: string;
  credentialId?: string;
  /** path under /public — drop your certificate image at this path to replace the placeholder */
  image: string;
};

export const achievements: Achievement[] = [
  {
    title: "Junior Web Programmer",
    issuer: "BNSP (Lembaga Sertifikasi Profesi)",
    type: "Certification",
    category: "Professional",
    issued: "Valid until 2027",
    image: "/certificates/bnsp-junior-web-programmer.jpg",
  },
  {
    title: "TOEIC (Score 760)",
    issuer: "ETS",
    type: "Certification",
    category: "Language",
    image: "/certificates/toeic.jpg",
  },
  {
    title: "Applied Database Systems",
    issuer: "Oracle Academy",
    type: "Course",
    category: "Backend",
    image: "/certificates/oracle-applied-database-systems.jpg",
  },
  {
    title: "Database Design",
    issuer: "Oracle Academy",
    type: "Course",
    category: "Backend",
    image: "/certificates/oracle-database-design.jpg",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    type: "Course",
    category: "Backend",
    image: "/certificates/oracle-database-programming-sql.jpg",
  },
  {
    title: "System Administration I",
    issuer: "Red Hat",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/redhat-system-administration-1.jpg",
  },
  {
    title: "OpenShift Developer I: Introduction to Containers with Podman (DO188)",
    issuer: "Red Hat",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/redhat-openshift-developer-1.jpg",
  },
  {
    title: "Introduction to Networking",
    issuer: "Cisco",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/cisco-intro-networking.jpg",
  },
  {
    title: "Introduction to Packet Tracer",
    issuer: "Cisco",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/cisco-packet-tracer.jpg",
  },
  {
    title: "Back-End Development",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Backend",
    image: "/certificates/dicoding-backend-development.jpg",
  },
  {
    title: "Data Visualization",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Data",
    image: "/certificates/dicoding-data-visualization.jpg",
  },
  {
    title: "JavaScript Programming",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Frontend",
    image: "/certificates/dicoding-javascript-programming.jpg",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Professional",
    image: "/certificates/dicoding-project-management-fundamentals.jpg",
  },
  {
    title: "SQL",
    issuer: "SoloLearn",
    type: "Course",
    category: "Backend",
    image: "/certificates/sololearn-sql.png",
  },
];

export type ProjectTechDetail = { name: string; description: string };
export type ProjectFeature = { title: string; description: string };
export type ProjectChallenge = { title: string; description: string; code?: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  type: "Web" | "Mobile" | "Automation" | "Data" | "Design";
  category: "Personal Project" | "Freelance" | "Internship";
  tech: string[];
  highlights: string[];
  featured?: boolean;
  /** path under /public — drop a screenshot here to replace the placeholder cover */
  coverImage: string;
  sourceCodeUrl?: string;
  liveDemoUrl?: string;
  overview: string;
  techDetails: ProjectTechDetail[];
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "notary-office-company-profile",
    title: "Notary Office Company Profile",
    description: "Full-stack company profile site for Kantor Notaris & PPAT Norman Tuah Hamonangan Sinaga in Karawang, public-facing site plus a protected admin panel.",
    type: "Web",
    category: "Freelance",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    highlights: [
      "Designed and built the public site and admin panel from scratch, end-to-end from database schema to production deployment on Vercel.",
      "Implemented Supabase Row Level Security (RLS) and auth for admin CRUD of legal articles and office activity posts.",
      "Handled App Router architecture, server/client component separation, and dynamic routing across 7 public pages.",
    ],
    featured: true,
    coverImage: "/projects/notary-office-company-profile.png",
    overview:
      "A company profile site built for a real notary & land deed official (PPAT) client based in Karawang, covering both the public-facing marketing site and a protected admin panel. The public side presents the office's services and legal articles to prospective clients; the admin panel lets the office publish and manage that content themselves without touching code, backed by Supabase auth and Postgres Row Level Security.",
    techDetails: [
      { name: "Next.js 14", description: "App Router architecture with server/client component separation and dynamic routing across the public pages." },
      { name: "TypeScript", description: "Type-safe props and Supabase query results shared between the public site and admin panel." },
      { name: "Tailwind CSS", description: "Utility-first styling for both the public marketing pages and the admin dashboard UI." },
      { name: "Supabase", description: "Postgres database, Row Level Security policies, and auth gating the admin panel." },
      { name: "Vercel", description: "Production deployment and hosting." },
    ],
    features: [
      { title: "Public Site", description: "7 public pages covering services, legal articles, and office activity, statically optimized where possible." },
      { title: "Admin Panel", description: "Authenticated CRUD interface for managing legal articles and activity posts, protected by Supabase auth." },
      { title: "Row Level Security", description: "Postgres RLS policies scoped by role so authenticated admins can write while public pages read freely." },
    ],
    challenges: [
      {
        title: "Designing RLS policies correctly",
        description:
          "Getting Supabase's Row Level Security right for the admin CRUD flow took a few iterations. Policies had to allow authenticated admin writes while keeping public reads open, without accidentally exposing draft content.",
      },
      {
        title: "Server vs. client component boundaries",
        description: "App Router's split between server and client components meant carefully deciding which parts of the admin panel needed interactivity (forms, live previews) versus which could stay server-rendered for speed.",
      },
    ],
    lessons: [
      "Supabase RLS policies are worth designing on paper before writing any SQL. Retrofitting them onto an existing schema is much harder.",
      "App Router's server/client split forces better component boundaries than the old Pages Router did, even with the learning curve.",
    ],
  },
  {
    slug: "hospital-inpatient-disease-analysis",
    title: "Hospital Inpatient Disease Analysis (RSUD Sukoharjo)",
    description: "Time-series forecasting and clustering analysis on a decade of hospital inpatient records, delivered as a full data-analysis portfolio project.",
    type: "Data",
    category: "Personal Project",
    tech: ["Python", "pandas", "statsmodels", "scikit-learn", "matplotlib", "seaborn"],
    highlights: [
      "Analyzed 46,379 patient records across 129 months (2014–2024); standardized 140 disease-name variations into 70 ICD-10-aligned categories.",
      "Built SARIMA(1,1,1)(1,1,1,12) models to forecast 2025 disease burden, projecting cerebral infarction overtaking gastroenteritis as the top diagnosis.",
      "Applied K-means clustering (k=4) on monthly patterns and Z-score anomaly detection, identifying 15 outbreak events and recommending a 112-bed capacity target.",
    ],
    featured: true,
    coverImage: "/projects/hospital-inpatient-disease-analysis.png",
    overview:
      "A decade-long inpatient dataset from RSUD Sukoharjo (46,379 records across 129 months) analyzed end to end: cleaning and standardizing a decade of inconsistent diagnosis naming, forecasting future disease burden with seasonal time-series models, and clustering monthly patterns to flag anomalies. Built as a full data-analysis portfolio project, from raw records to capacity recommendations.",
    techDetails: [
      { name: "Python", description: "Core language for the entire analysis pipeline." },
      { name: "pandas", description: "Data cleaning, disease-name standardization (140 → 70 categories), and monthly aggregation." },
      { name: "statsmodels", description: "SARIMA(1,1,1)(1,1,1,12) seasonal time-series forecasting for 2025 disease burden." },
      { name: "scikit-learn", description: "K-means clustering (k=4) on monthly disease patterns." },
      { name: "matplotlib / seaborn", description: "Visualizing trends, forecasts, and cluster results." },
    ],
    features: [
      { title: "Data Standardization", description: "Reconciled 140 inconsistent disease-name variations across a decade of records into 70 ICD-10-aligned categories." },
      { title: "Forecasting", description: "SARIMA(1,1,1)(1,1,1,12) models projecting 2025 disease burden month by month." },
      { title: "Clustering & Anomaly Detection", description: "K-means (k=4) on monthly patterns plus Z-score anomaly detection flagging 15 outbreak events." },
    ],
    challenges: [
      {
        title: "Reconciling inconsistent disease naming",
        description:
          "A decade of manually-entered records meant the same diagnosis appeared under dozens of spellings and abbreviations. Standardizing 140 variations into 70 ICD-10-aligned categories was the most time-consuming step before any modeling could start.",
      },
      {
        title: "Choosing a forecasting model that respects seasonality",
        description: "Hospital admissions have strong yearly seasonality, so a plain ARIMA wasn't enough. Settled on a seasonal SARIMA order after comparing seasonal and non-seasonal fits against held-out months.",
        code: "SARIMA(1,1,1)(1,1,1,12)",
      },
    ],
    lessons: [
      "Data cleaning and standardization took longer than the modeling itself, worth budgeting for up front on any real-world dataset.",
      "SARIMA's seasonal terms made a measurable difference over plain ARIMA once admissions showed a clear yearly cycle.",
    ],
  },
  {
    slug: "telegram-google-calendar-bot",
    title: "Calendar Bot (Telegram → Google Calendar)",
    description: "A personal Telegram bot that turns free-form Indonesian chat into Google Calendar events, parsed entirely offline with regex and dateparser (no LLM), routed to the right calendar by a self-learning category engine.",
    type: "Automation",
    category: "Personal Project",
    tech: ["Python", "python-telegram-bot", "Google Calendar API", "OAuth 2.0", "dateparser", "Upstash Redis", "Vercel"],
    highlights: [
      "Built a rule-based Indonesian date/event parser (regex + dateparser) that extracts title, date, time range, and category from free-form chat with no LLM and no per-message API cost.",
      "Routed events into 8 separate Google Calendars through an alias/keyword category engine, backed by rule-based self-learning: every correction made through the inline keyboard is stored word → category and reused on the next message.",
      "Migrated the runtime from long-polling to Vercel serverless webhooks, moving all three pieces of local state (OAuth token, learned words, last event) into Upstash Redis behind a single dual-mode storage layer.",
    ],
    featured: true,
    coverImage: "/projects/telegram-google-calendar-bot.png",
    overview:
      "A single-user Telegram bot that removes the friction of opening Google Calendar to add an event. Messages like \"dari 8 agustus 14:00 sampai 16:00 rapat kategori kerja\" or \"besok kumpul keluarga\" are parsed offline into a structured event, matched to one of eight destination calendars, shown back as a confirmation with inline correction buttons, and only then written to Google Calendar. The deliberate constraint was to build the entire natural-language layer without an LLM: everything is regex, dateparser, and dictionary lookups, so the bot runs free, offline-capable, and fully deterministic.",
    techDetails: [
      { name: "Python", description: "Core language for the parser, category engine, and Google Calendar integration." },
      { name: "python-telegram-bot", description: "Command handlers, message handling, and the inline-keyboard confirmation/correction flow via callback queries." },
      { name: "Google Calendar API", description: "Event creation and deletion across 8 calendars, scoped to calendar.events only." },
      { name: "OAuth 2.0", description: "One-time desktop OAuth login, with automatic token refresh and the refreshed token persisted back to storage." },
      { name: "dateparser", description: "Indonesian date parsing, wrapped in a normalization layer for relative words (besok/lusa), dotted times (jam 14.00), and month abbreviations it does not cover." },
      { name: "Upstash Redis", description: "Serverless-safe state (OAuth token, learned categories, last created event) over the REST API, since Vercel functions have no persistent filesystem." },
      { name: "Vercel", description: "Serverless webhook deployment so the bot runs 24/7 without a machine staying on." },
    ],
    features: [
      {
        title: "Natural-language event capture",
        description: "Handles all-day events, timed events with a default duration, explicit start/end ranges, multi-day ranges, and relative dates (hari ini, besok, lusa, kemarin). Anything left after the keywords are stripped becomes the event title.",
      },
      {
        title: "Category → calendar routing",
        description: "Eight categories (Kuliah, Movie, Game, Football, Financial, Health, Important Activity, Activity), each with its own aliases, trigger keywords, emoji prefix, and destination calendar ID. Typing the category is optional: the bot guesses from the title when it is omitted.",
      },
      {
        title: "Self-learning categories",
        description: "Correcting a guess through the inline keyboard stores every meaningful word of that title against the chosen category, so the same wording is routed correctly next time. Pure word matching, no model, and the learned data never leaves the owner's own storage.",
      },
      {
        title: "Confirm before save, and /undo after",
        description: "Every event is previewed with correction buttons before it is written; /undo deletes the most recently created event straight from Google Calendar without opening the app.",
      },
      {
        title: "Dual runtime",
        description: "The same application object runs as long-polling locally for development and as a secret-verified webhook endpoint on Vercel in production.",
      },
    ],
    challenges: [
      {
        title: "Parsing Indonesian dates without an LLM",
        description:
          "dateparser covers most Indonesian month names but not relative words like \"besok\"/\"lusa\", times written as \"jam 14.00\", or the \"ags\" abbreviation. The fix was a normalization pass that rewrites those into explicit, unambiguous forms (spelled-out month names rather than dd/mm) before dateparser ever sees the string.",
        code: "besok kumpul keluarga → 2 september 2026 kumpul keluarga",
      },
      {
        title: "Serverless has no persistent filesystem",
        description:
          "Moving to Vercel broke three assumptions at once: the OAuth token file, the learned-categories file, and the last-event file all lived on disk. Rather than scattering environment checks through the codebase, I introduced one storage module with load_json/save_json that transparently uses local files in development and Upstash Redis in production, so nothing above it had to change.",
      },
      {
        title: "Keeping OAuth alive in a stateless function",
        description: "A refreshed access token is worthless if it is discarded when the function exits, so the refresh path writes the new token back through the same storage layer, keeping the bot logged in indefinitely without a second manual OAuth run.",
      },
    ],
    lessons: [
      "A well-scoped rule-based parser beat reaching for an LLM here: it is free, deterministic, testable, and every wrong result points at a specific rule I can fix.",
      "Abstracting persistence behind one tiny load/save interface turned the polling → serverless migration into a configuration change instead of a rewrite.",
      "Letting the user correct a guess with one tap, and learning from that correction, proved more valuable than trying to make the initial guess smarter.",
    ],
  },
  {
    slug: "telegram-notion-expense-bot",
    title: "Expense Bot (Telegram → Notion)",
    description: "A Telegram bot that logs expenses into a Notion database from one-line Indonesian messages, parsing amount shorthand, payment method, category, and date with a dependency-free parser.",
    type: "Automation",
    category: "Personal Project",
    tech: ["Node.js", "JavaScript", "Telegram Bot API", "Notion API", "Vercel"],
    highlights: [
      "Wrote a dependency-free parser for Indonesian expense messages covering amount shorthand (25.000 / 25rb / 25k / 1.5jt), payment keywords, hashtag categories, and both relative and explicit dates, pinned by a 13-case test suite run with npm test.",
      "Mapped parsed messages onto a real Notion schema: title, number, date, a relation to the correct Account page, and a multi-select category across 12 predefined categories.",
      "Deployed as a Vercel webhook hardened with Telegram's secret-token header, a chat ID allowlist, and an always-200 response so a failed write never triggers Telegram's retry loop.",
    ],
    coverImage: "/projects/telegram-notion-expense-bot.png",
    overview:
      "Expense tracking only works if logging an expense takes seconds. This bot cuts the loop down to one Telegram message: \"beli kopi 20rb bank\" becomes a fully formed row in a Notion Expenses database, with the amount normalized, the payment method resolved to a Notion relation, the category attached, and the date defaulted to today in WIB. The Telegram side is written directly against the HTTP API with fetch, so the only runtime dependency is the Notion client itself.",
    techDetails: [
      { name: "Node.js", description: "Runtime for both the local polling script and the Vercel serverless handler, sharing one handleUpdate function." },
      { name: "JavaScript", description: "Dependency-free message parser plus its own assertion-based test runner." },
      { name: "Telegram Bot API", description: "Called directly over HTTP with fetch (no SDK), including secret-token verification on the webhook endpoint." },
      { name: "Notion API", description: "Page creation against an Expenses data source, writing title, number, date, account relation, and multi-select category properties." },
      { name: "Vercel", description: "Serverless webhook hosting so the bot answers instantly without a process running on a laptop." },
    ],
    features: [
      {
        title: "One-line expense capture",
        description: "Understands messages such as \"Aku membeli dimsum 25.000 cash\", \"Lunch 30k rekening #Eat\", or \"tanggal 10 juli beli sepatu 300rb bank\", stripping leading verbs to leave a clean expense name.",
      },
      {
        title: "Indonesian amount and payment normalization",
        description: "Thousand separators, rb/ribu/k/jt/juta shorthand, and payment keywords (cash, tunai, transfer, rekening, qris, debit) all normalize to the exact values the Notion schema expects, defaulting to Cash when unstated.",
      },
      {
        title: "Notion relation and category writes",
        description: "Payment method resolves to a related Account page rather than plain text, and hashtag categories map onto the 12 categories already defined in the database.",
      },
      {
        title: "Webhook security",
        description: "The endpoint verifies Telegram's x-telegram-bot-api-secret-token header and an allowlisted chat ID, so a leaked URL alone cannot write to the database.",
      },
    ],
    challenges: [
      {
        title: "Ambiguity between amounts, quantities, and dates",
        description:
          "Real messages mix numbers freely: \"Whiskas 56pcs 290.000 bank\" contains a quantity, an amount, and no date, while \"2 hari lalu bayar parkir 5rb cash\" leads with a relative date. Ordering the extraction steps (date first, then amount, then payment, then whatever remains as the name) and pinning each case in the test suite is what made the parser trustworthy.",
      },
      {
        title: "Timezone correctness for a WIB user on UTC infrastructure",
        description: "Vercel functions run in UTC, so an expense logged at 09:00 WIB would land on the previous day. Dates are computed against a UTC+7 offset everywhere, including in the tests, so late-night entries file under the right day.",
      },
      {
        title: "Failing safely against Telegram's retry behaviour",
        description: "Telegram redelivers any update the webhook does not acknowledge, which would duplicate rows on a transient Notion error. The handler logs failures and still returns 200, trading a rare lost entry for never writing the same expense twice.",
      },
    ],
    lessons: [
      "A small parser deserves real tests: 13 cases covering messy real-world phrasing caught more regressions than any amount of manual retesting in the chat window.",
      "Writing straight against the Telegram HTTP API kept the deployment tiny and made the webhook's behaviour, including its security headers, explicit instead of hidden inside a framework.",
      "Designing around the existing Notion schema first (relations, multi-selects, formula-filled month/year fields) meant the bot slotted into a database already in daily use, instead of asking the database to change.",
    ],
  },
  {
    slug: "shiftalarm-ocr-android",
    title: "ShiftAlarm (OCR Shift-Schedule Alarm App)",
    description: "Android alarm app that reads a month of work-shift screenshots with on-device OCR and schedules every wake-up alarm at once, offline and without an API key.",
    type: "Mobile",
    category: "Personal Project",
    tech: ["Kotlin", "Android SDK", "ML Kit OCR", "Jetpack Compose", "AlarmManager", "Gradle"],
    highlights: [
      "Turned a monthly chore into one action: share HRIS attendance screenshots into the app, and a whole month of exact alarms is scheduled at the configured offset before each shift, with Weekly Off days skipped automatically.",
      "Wrote a layout-aware OCR parser that reconstructs the HRIS table from ML Kit bounding boxes, grouping text into day cells by vertical position and a left-column x-threshold, then inferring month and year across a year boundary.",
      "Built the full alarm stack that has to survive the OS: setAlarmClock exact alarms, a foreground service looping the ringtone on the ALARM stream, a full-screen activity over the lockscreen, snooze/dismiss from the notification, and rescheduling after reboot.",
    ],
    featured: true,
    coverImage: "/projects/shiftalarm-ocr-android.png",
    overview:
      "A shift worker gets next month's schedule as a screen in an HRIS app, and then has to set around twenty alarms by hand. ShiftAlarm removes that: share the attendance screenshots into the app, and ML Kit reads each date and clock-in time on-device, skips Weekly Off days and days already past, and schedules an exact alarm a configurable offset (default two hours) before every shift. It is also a complete standalone alarm app on its own, with manual alarms, per-alarm ringtone and vibration, a list/calendar view, and a warm Headspace-inspired interface in full light and dark themes.",
    techDetails: [
      { name: "Kotlin", description: "Whole app, roughly 2,000 lines across the alarm domain, OCR parser, scheduler, foreground service, and UI." },
      { name: "ML Kit Text Recognition", description: "Bundled on-device OCR: works offline, needs no API key and no per-scan cost, and schedule screenshots never leave the phone." },
      { name: "Android SDK", description: "AlarmManager exact alarms, foreground service, full-screen intent over the lockscreen, boot receiver, share-target intent filters for single and multiple images, RecyclerView list and week strip." },
      { name: "Jetpack Compose", description: "Interop layer used for the animated empty-state mascot, drawn as metaballs on a Compose Canvas with physics-based spring animation." },
      { name: "AlarmManager", description: "setAlarmClock with AlarmClockInfo for user-visible exact alarms, plus a full cancel-and-reschedule pass that keeps the scheduled IDs in sync with stored alarms." },
      { name: "Gradle", description: "Kotlin DSL build with R8 minification, resource shrinking, and an arm64-only ABI filter, with an -PemuTest flag to restore all ABIs for emulator testing." },
    ],
    features: [
      {
        title: "Screenshot → a month of alarms",
        description: "Share one or several attendance screenshots into the app; each date and clock-in time is read on-device, an offset dialog confirms how early to wake, and the alarms are scheduled in one pass. Re-scanning the next month overwrites alarms on the same dates instead of duplicating them.",
      },
      {
        title: "Rules that match how schedules actually behave",
        description: "Weekly Off days are skipped, days already past are skipped, and today's shift is skipped if its alarm time has gone by, with the number of skipped days reported after the scan.",
      },
      {
        title: "A complete alarm app underneath",
        description: "Manual add/edit/delete/toggle, swipe-to-delete with undo, per-alarm ringtone from the system picker and vibration, a 10-minute snooze, a five-second sound test, and a missed-alarm state that badges, dims, and groups past one-shot alarms.",
      },
      {
        title: "List and calendar views",
        description: "A pill switch between a flat time-ordered list and a swipeable seven-day strip with dots marking days that have alarms and the selected day's agenda below.",
      },
      {
        title: "Alarms that ring even when the phone is locked",
        description: "A foreground service plays the chosen ringtone looping on the ALARM stream, independent of notification sound settings, while a full-screen activity turns the screen on above the lockscreen with dismiss and snooze actions.",
      },
      {
        title: "Designed, not just assembled",
        description: "A Headspace-inspired warm orange and cream language with a shared radius and spacing scale in dimens.xml, complete light and dark palettes defined under the same names, staggered card entry, press-and-spring card feedback, distinct haptics per action, and a hand-drawn vector empty state.",
      },
    ],
    challenges: [
      {
        title: "OCR returns text, not a table",
        description:
          "ML Kit gives lines with bounding boxes, not the row-and-column structure the HRIS screen visually has. The parser rebuilds it geometrically: lines starting left of 18% of the image width are treated as the date column, day numbers become cell anchors sorted by vertical position, and every other line is assigned to a cell by comparing its center-Y against the anchor tops.",
        code: "leftLimit = imageWidth * 0.18",
      },
      {
        title: "\"Office\" is not \"Off\"",
        description: "A shift row reads like `D047 (09:00 - 17:00) (Office)`, so a naive substring check for \"off\" marks working days as days off. Matching on a word boundary (\\boff\\b|\\blibur\\b) fixed a bug that would have silently cancelled real alarms.",
      },
      {
        title: "The screenshot rarely says what year it is",
        description:
          "Attendance screens show days and month names but often not the year, and a schedule can straddle December into January. The parser picks the dominant month from the date column, falls back to a header month/year when present, and infers the year by comparing month distance, shifting a year forward or back for a December-January crossing.",
      },
      {
        title: "Modern Android actively fights background alarms",
        description:
          "Exact alarms, full-screen intents, foreground services, and post-reboot survival each need their own permission and their own API on recent versions. The app declares USE_EXACT_ALARM alongside SCHEDULE_EXACT_ALARM, checks at runtime and routes the user into Settings if it has been revoked, uses a special-use foreground service for the ringing state, and reschedules everything from storage on BOOT_COMPLETED.",
      },
      {
        title: "Keeping scheduled alarms and stored alarms consistent",
        description: "Editing, deleting, or rescanning can otherwise leave orphaned PendingIntents that ring for alarms the user already removed. Rescheduling cancels every previously scheduled ID first, then re-registers only enabled alarms still in the future, and persists the new ID set.",
      },
    ],
    lessons: [
      "On-device ML was the right call over a cloud OCR API: it is free, works offline, has no key to leak, and keeps personal schedule screenshots on the phone.",
      "The hard part of OCR is not recognition but reconstructing structure from coordinates; the geometry pass around ML Kit is longer and more important than the ML Kit call itself.",
      "Alarm code is judged on its worst day, not its normal one, so the effort went into the failure paths: reboots, revoked permissions, missed times, and duplicate scheduling.",
      "Real usage exposes parser edge cases documentation never mentions, and \"Office\" matching \"Off\" is exactly the kind of bug that only a word-boundary regex and a real screenshot catch.",
    ],
  },
  {
    slug: "verse-widget-android",
    title: "Verse Widget (Android Home-Screen Widget)",
    description: "A native Android home-screen widget in Kotlin showing one deterministic daily verse or movie quote from a 452-entry pool, with mood tags, bilingual text, and tap-through pagination.",
    type: "Mobile",
    category: "Personal Project",
    tech: ["Kotlin", "Android SDK", "App Widgets", "JUnit", "Gradle"],
    highlights: [
      "Built a native App Widget provider in Kotlin (minSdk 26, targetSdk 35) with no third-party libraries beyond AndroidX core and appcompat.",
      "Designed a deterministic xorshift picker seeded on epoch day, shuffle count, and mood tag, so the same entry shows all day across every redraw, changes at midnight, and is guaranteed to differ after a shuffle.",
      "Drove refreshes with AlarmManager scheduled to the next content boundary (04:00/10:00/15:00/18:00 and just past midnight) instead of polling, and cached the parsed 452-entry pool in memory so redraws no longer re-parse ~94KB of JSON.",
    ],
    coverImage: "/projects/verse-widget-android.png",
    overview:
      "A personal Android home-screen widget showing one Bible verse or movie quote a day, drawn from a curated pool of 253 verses and 199 watchlist quotes tagged by mood (cemas, kuat, syukur, lelah, takut, harapan, damai, kasih, sedih, bingung). Tapping the verse shuffles within the current mood, tapping the chip opens a mood picker, and the palette shifts with the selected mood. Built entirely on the classic AppWidgetProvider/RemoteViews stack, where the real engineering is in what a widget cannot do: no persistent process, no arbitrary views, and a strict budget on how often it may wake up.",
    techDetails: [
      { name: "Kotlin", description: "The full app: widget provider, repository, launcher activity, and mood picker." },
      { name: "Android SDK", description: "AppWidgetProvider, RemoteViews, PendingIntent-driven widget actions, AlarmManager scheduling, and SharedPreferences for state." },
      { name: "App Widgets", description: "Two layouts (full and compact) picked at runtime from the widget's measured size, plus eight mood-driven background/accent palettes and light/dark colour resources." },
      { name: "JUnit", description: "Unit tests over the pure logic: pagination at word boundaries, picker determinism and range, guaranteed shuffle change, and refresh-boundary calculation." },
      { name: "Gradle", description: "Kotlin DSL build (JDK 17 target) producing the installable debug APK." },
    ],
    features: [
      {
        title: "One verse per day, deterministically",
        description: "The index is derived from the date rather than stored randomness, so every redraw within a day returns the same entry and a new day yields a new one, with no background job involved.",
      },
      {
        title: "Mood tags",
        description: "Ten mood tags filter the pool; the selected mood also drives the widget's background gradient and accent colour, and the pool falls back to everything when a mood has no matches.",
      },
      {
        title: "Bilingual text",
        description: "Indonesian (Terjemahan Baru), English (World English Bible), or a mixed mode that alternates by day, falling back to whichever text exists for that entry.",
      },
      {
        title: "Tap-through pagination",
        description: "Long passages split at word boundaries into ~120-character pages, so a small widget can still show a full verse across taps instead of truncating it.",
      },
      {
        title: "Size-aware layout and time-aware greeting",
        description: "Small widgets drop the header to keep the text readable, and the companion app greets by time of day (Pagi/Siang/Sore/Malam) alongside today's entry and pool stats.",
      },
    ],
    challenges: [
      {
        title: "Making \"one per day\" survive an unpredictable widget lifecycle",
        description:
          "A widget is redrawn at moments you do not control: resizes, launcher restarts, reboots, timezone changes. Storing a randomly chosen index would drift, so the pick is computed from epoch day, shuffle count, and tag hash through an xorshift, making the widget stateless with respect to its content while still allowing a shuffle to bump it.",
        code: "pickIndex(epochDay, shuffle, tagHash, poolSize)",
      },
      {
        title: "Guaranteeing a shuffle actually changes the verse",
        description: "A hash-based pick can legitimately return the same index twice in a row, which reads as a broken button. The picker compares against the pre-shuffle result and steps forward on a collision, and a unit test asserts this across many days and pool sizes.",
      },
      {
        title: "Refreshing without draining the battery",
        description:
          "Content and greeting only change at five moments a day, so instead of a periodic update interval the provider computes the next boundary and sets a single AlarmManager alarm for it, rescheduling after each fire and on time/timezone changes.",
      },
      {
        title: "Keeping widget redraws cheap",
        description: "Every redraw originally re-parsed roughly 94KB of JSON from assets. Since assets cannot change within an install, the parsed pool is cached for the process lifetime, taking the parse cost out of the redraw path entirely.",
      },
    ],
    lessons: [
      "Deriving state from the date instead of storing it removed a whole class of widget lifecycle bugs: the widget can be killed at any moment and still shows the right thing.",
      "Keeping the interesting logic in pure functions (picker, paginator, refresh scheduler) made it unit-testable on the JVM without an emulator, which is rare for widget code.",
      "Widget constraints (RemoteViews only, no persistent process, battery-conscious updates) push you toward simpler designs than a normal activity would, and the result is easier to reason about.",
    ],
  },
  {
    slug: "sukoharjo-economic-housing-affordability",
    title: "Sukoharjo Regional Economic & Housing Affordability Analysis",
    description: "Regional economic analysis combining multiple BPS open datasets to assess housing affordability against local income and employment patterns.",
    type: "Data",
    category: "Personal Project",
    tech: ["Python", "pandas", "Plotly", "Streamlit", "BPS Open Data"],
    highlights: [
      "Integrated 4 BPS datasets (PDRB ADHK, wages, employment by sector, household expenditure) covering 2019–2023 into a unified analysis pipeline.",
      "Ran a housing affordability stress test, identifying a 47% DTI constraint for average earners and segmenting the market by sector purchasing power.",
    ],
    coverImage: "/projects/sukoharjo-economic-housing-affordability.png",
    overview:
      "A regional economic analysis for Sukoharjo Regency built on 4 separate BPS (Statistics Indonesia) open datasets (regional GDP, wages, employment by sector, and household expenditure), merged into one pipeline to run a housing affordability stress test against local income and employment patterns, then packaged as an interactive Streamlit dashboard.",
    techDetails: [
      { name: "Python", description: "Core analysis pipeline." },
      { name: "pandas", description: "Merging and cleaning 4 separate BPS datasets across 2019–2023." },
      { name: "Plotly", description: "Interactive charts for income, employment, and affordability visualizations." },
      { name: "Streamlit", description: "Turning the analysis into an interactive dashboard." },
      { name: "BPS Open Data", description: "Source datasets: PDRB ADHK, wages, employment by sector, household expenditure." },
    ],
    features: [
      { title: "Multi-dataset Integration", description: "Combined 4 BPS datasets covering 2019–2023 into one unified analysis pipeline." },
      { title: "Affordability Stress Test", description: "Modeled housing affordability against income, identifying a 47% DTI constraint for average earners." },
      { title: "Sector Segmentation", description: "Broke down purchasing power by employment sector to show which groups are most housing-cost-burdened." },
    ],
    challenges: [
      {
        title: "Reconciling datasets with different structures",
        description:
          "The 4 BPS datasets (PDRB, wages, employment, expenditure) came in different formats and granularities. Building a common key to merge them cleanly across 2019–2023 took more design work than the affordability modeling itself.",
      },
      {
        title: "Defining a meaningful affordability threshold",
        description: "Housing affordability metrics vary by methodology. Settled on a debt-to-income framing to make the 47% constraint figure directly interpretable for a non-technical audience.",
      },
    ],
    lessons: [
      "Public statistics datasets (BPS) are individually clean but rarely designed to be merged with each other. Schema reconciliation is its own task.",
      "A debt-to-income framing communicated the affordability finding far more clearly to non-technical readers than a raw price index would have.",
    ],
  },
  {
    slug: "personal-portfolio-v1",
    title: "Personal Portfolio Website (v1)",
    description: "My first personal portfolio: a dual Developer/Designer site built with React, with dedicated case-study pages for earlier freelance and campus projects.",
    type: "Web",
    category: "Personal Project",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "React Router"],
    highlights: [
      "Split into separate Developer and Designer views, each with its own project cards and framing of the same underlying work.",
      "Built dedicated case-study pages (Features / Research / Result) for individual projects instead of a flat project list.",
      "Superseded by the Next.js site you're looking at now.",
    ],
    coverImage: "/projects/personal-portfolio-v1.png",
    sourceCodeUrl: "https://github.com/baguzbw/PortofolioWeb",
    overview:
      "My first personal portfolio, built with React, Tailwind CSS, and Framer Motion. It split into separate Developer and Designer views, each showcasing project cards that linked to dedicated case-study pages, including Kampung Batik (a promotional site for a batik-producing village), an information site for the ICARELI conference, and an OLT (Optical Line Termination) monitoring dashboard, each broken down into Features, Research, and Result sections. Retired in favor of the current Next.js rebuild.",
    techDetails: [
      { name: "React.js", description: "Core UI library for the whole site." },
      { name: "React Router", description: "Client-side routing across the Developer, Designer, About, and case-study pages." },
      { name: "Tailwind CSS", description: "Utility-first styling, including a Plus Jakarta Sans type system carried forward into the current site." },
      { name: "Framer Motion", description: "Section fade-in animations and hover transforms on project cards." },
    ],
    features: [
      {
        title: "Dual Developer / Designer personas",
        description: "Rather than one flat homepage, the site split into a Developer view and a Designer view, each with its own intro copy and project cards, reflecting a combined frontend + UI/UX skill set.",
      },
      {
        title: "Per-project case-study pages",
        description: "Featured projects (Kampung Batik, ICARELI, OLT Monitoring) each got their own route with a consistent Features / Research / Result structure, rather than just a card and a link.",
      },
      {
        title: "Honest incomplete states",
        description: 'The OLT Monitoring project card intentionally showed a "case study not ready yet" state on hover instead of a broken or fake link, for a project whose write-up wasn\'t finished.',
      },
    ],
    challenges: [
      {
        title: "Structuring a two-persona portfolio without it feeling like two disconnected sites",
        description: "Splitting Developer and Designer into separate routes risked feeling fragmented. Keeping shared navigation, typography, and motion consistent across both was what held it together as one site.",
      },
    ],
    lessons: [
      "A portfolio is itself a product worth its own information architecture: separate personas and a repeatable case-study template, not just a flat project list.",
      "The Plus Jakarta Sans typography and motion-forward feel from this version carried directly into the current portfolio rebuild.",
    ],
  },
  {
    slug: "kampung-batik-joglo-bale-agung-cendana",
    title: "Kampung Batik Joglo Bale Agung Cendana",
    description: "Campus PBL project giving a batik-producing village its first web presence: articles on its cultural heritage plus a product and motif gallery.",
    type: "Web",
    category: "Internship",
    tech: ["React.js", "Laravel", "MySQL"],
    highlights: [
      "Designed and built article and product/motif gallery features for a batik village with no prior web presence.",
      "Researched two reference batik-community sites to settle on clearer navigation and a more deliberate type/color system.",
      "Delivered on time as a semester-4 Project Based Learning collaboration with Life Media and the village's cultural organization.",
    ],
    coverImage: "/projects/kampung-batik.png",
    sourceCodeUrl: "https://github.com/baguzbw/pblkampungbatik",
    liveDemoUrl: "https://joglobaleagungcendana.id/",
    overview:
      "A Project Based Learning collaboration (semester 4, with Life Media) to give Kampung Batik Joglo Bale Agung Cendana (a batik-producing village) its first web presence. The site needed to promote the village's cultural heritage, its distinctive batik motifs, and its products to an audience that previously had no way to discover them online.",
    techDetails: [
      { name: "React.js", description: "Frontend framework, learned specifically for this project, coming from a mostly Laravel/PHP background." },
      { name: "Laravel", description: "Backend/API layer." },
      { name: "MySQL", description: "Database." },
    ],
    features: [
      {
        title: "Article System",
        description: "Cultural content about the village and its batik heritage, built for readable, responsive presentation.",
      },
      {
        title: "Product & Motif Gallery",
        description: "Grouped, clickable product and motif listings that reveal more detail per item, letting visitors explore the batik designs on offer.",
      },
    ],
    challenges: [
      {
        title: "Learning React mid-project",
        description: "Coming from a mostly Laravel/PHP background, this was the first project using React. Spent time upfront researching how its component structure differs from Laravel's more prescriptive MVC layout.",
      },
      {
        title: "Weak reference sites to design against",
        description:
          "The two existing batik-community sites researched for inspiration had cluttered navigation and dated visual design. Their weaknesses justified a simpler navbar and a more deliberate font/color system rather than copying either.",
      },
    ],
    lessons: [
      "First large team project: learned the cost of skipping upfront planning (scope, deadlines, database needs) in favor of just starting to build.",
      "Feedback is useful but needs filtering against the project's original goals, or scope creep quietly resets the timeline.",
    ],
  },
  {
    slug: "icareli-conference-website",
    title: "ICARELI Conference Website",
    description: "Website for UNS's International Conferences on Animal Research for Eco-Friendly Livestock Industry: speakers, schedule, and multi-year conference data.",
    type: "Web",
    category: "Freelance",
    tech: ["React.js", "Laravel", "MySQL"],
    highlights: [
      "Built to support a live academic conference under a 1-month deadline, including a late-added requirement.",
      "Learned and applied React Context for the first time to support multiple conference years without a redesign.",
      "Delivered in time for the 2nd ICARELI conference at UNS's Faculty of Agriculture.",
    ],
    coverImage: "/projects/icareli-conference-website.png",
    sourceCodeUrl: "https://github.com/baguzbw/IcareliProject",
    liveDemoUrl: "https://icareli.id/",
    overview:
      "A website for ICARELI (International Conferences on Animal Research for Eco-Friendly Livestock Industry), a biennial conference hosted by the Faculty of Agriculture at Universitas Sebelas Maret. It previously ran on two separate websites merged awkwardly into one, causing bloated data. This rebuild needed to support speaker info, schedules, committees, and submission guidelines, plus, added mid-project, multiple conference years on one consistent design.",
    techDetails: [
      { name: "React.js", description: "Frontend, with React Context introduced partway through to handle multi-year conference data cleanly." },
      { name: "Laravel", description: "Backend." },
      { name: "MySQL", description: "Database." },
    ],
    features: [
      {
        title: "Multiple Data (multi-year conferences)",
        description: "Switching between conference years (e.g. 2021 vs 2023) swaps all related data without changing the underlying design. Added after the initial single-year version was already built.",
      },
      {
        title: "Conference Information Hub",
        description: "Speakers, articles, schedule, participating committees, program guidelines, and submission/registration info in one place.",
      },
    ],
    challenges: [
      {
        title: "A late-added requirement to support multiple conference years",
        description:
          "The site was originally scoped and built for a single year of conference data. Partway through, the Faculty asked for the 2021 conference to be supported alongside 2023 without a redesign. Solved by switching from React Props to React Context so the same components could serve either year's data.",
      },
      {
        title: "A 1-month deadline with a real, fixed event date",
        description: "Working directly with the Faculty of Agriculture meant revisions had to turn around fast to be ready for the actual conference date, not a flexible academic deadline.",
      },
    ],
    lessons: [
      "React Context is worth the extra complexity on larger apps needing shared state across many components; React Props alone doesn't scale as cleanly.",
      "Doing at least some upfront research under a tight deadline still beats skipping straight to building. Confusion mid-build cost more time than the research would have.",
    ],
  },
  {
    slug: "e-library-ui-ux-design",
    title: "E-Library: Self-Service Library System (UI/UX Design)",
    description: "A UI/UX design case study for a school library self-service system: book borrowing and return via scanning, designed in Figma for a Human-Computer Interaction course.",
    type: "Design",
    category: "Personal Project",
    tech: ["Figma"],
    highlights: [
      "Designed a self-service borrow/return flow to eliminate a single-queue bottleneck handling too many unrelated services at once.",
      "Completed as a 1-week Human-Computer Interaction coursework project, brief and features set by the instructor.",
      "Published as a full case study on Behance and Dribbble alongside the Figma file itself.",
    ],
    coverImage: "/projects/e-library-ui-ux-design.png",
    liveDemoUrl: "https://www.behance.net/gallery/176725013/E-Library",
    overview:
      "A UI/UX design case study for a self-service school library system, completed in one week for a Human-Computer Interaction course. The brief called for a self-service borrowing and return flow using book scanning, designed to reduce queue bottlenecks at the library counter.",
    techDetails: [{ name: "Figma", description: "Full interface design, prototyping, and the published case-study file." }],
    features: [
      {
        title: "Self-Service Borrow/Return Flow",
        description: "Scan-based book checkout and return designed to work without staff intervention for the common case.",
      },
      {
        title: "Admin Panel Design",
        description: "Screens for library staff to manage the book catalog, user accounts, library cards, and borrowing statistics.",
      },
    ],
    challenges: [
      {
        title: "Untangling a single queue serving too many services",
        description:
          "The starting problem was one physical queue handling borrowing, returns, library-card issuance, and e-library card creation all at once. The design had to separate self-service flows from the cases that genuinely still need staff help.",
      },
      {
        title: "An incomplete project brief",
        description: "The initial brief read as just a borrow/return system. Presenting the design surfaced a missing requirement (attendance/check-in tracking for people entering the library) that hadn't been scoped at all.",
      },
    ],
    lessons: [
      "Figma turned out to be a genuinely good daily design tool, not just something for web mockups, lighter and cleaner than Photoshop/Illustrator for this kind of interface work.",
      "A vague project brief costs more time later than it saves early: an incomplete brief here meant reworking the design after it had already been presented.",
    ],
  },
  {
    slug: "olt-battery-monitoring-dashboard",
    title: "OLT Battery Monitoring Dashboard",
    description: "Real-time monitoring dashboard for OLT (Optical Line Termination) backup batteries: live voltage, current, power, and frequency tracking with a map of device locations.",
    type: "Web",
    category: "Internship",
    tech: ["React.js", "Tailwind CSS", "Leaflet", "Recharts"],
    highlights: [
      "Live voltage, current, wattage, and frequency monitoring per device, each with a real-time area chart polling every second.",
      "Interactive map of device locations with draggable-marker coordinate picking for registering new devices.",
      "Role-gated admin controls: device create/edit/delete and API key visibility restricted to admin accounts via cookie-based auth.",
    ],
    coverImage: "/projects/olt-battery-monitoring-dashboard.png",
    overview:
      "A real-time monitoring dashboard for OLT (Optical Line Termination) backup power systems: tracking voltage, current, wattage, and frequency for battery units at remote network sites, with a live map of device locations and full device/admin management.",
    techDetails: [
      { name: "React.js", description: "Core frontend, with React Router across dashboard, device, and sensor-detail routes." },
      { name: "Tailwind CSS", description: "Styling throughout, in a Poppins-based type system." },
      { name: "Leaflet", description: "Interactive device-location map, including a draggable-marker picker for setting a new device's coordinates." },
      { name: "Recharts", description: "Live area charts for voltage, current, wattage, and frequency history per device." },
    ],
    features: [
      {
        title: "Live Sensor Monitoring",
        description: "Per-device voltage, current, power, and frequency, each on its own live-updating area chart, polling the monitoring API every second.",
      },
      {
        title: "Device Map & Management",
        description: "An interactive map plots every device by location; admins can create, edit, and delete devices, including dragging a marker to set new coordinates, plus a show/hide toggle for each device's API key.",
      },
      {
        title: "Role-Based Access",
        description: "Cookie-based auth with an admin role gate: only admins see device edit/delete/create controls; other authenticated users get read-only monitoring.",
      },
    ],
    challenges: [
      {
        title: "Polling a live API without overloading it",
        description:
          "Sensor readings needed to feel real-time, but polling too aggressively risked overloading the monitoring API. Settled on a 1-second interval scoped per open sensor view rather than one global poll, balancing responsiveness against load.",
      },
      {
        title: "Making raw sensor values mean something",
        description:
          "Raw voltage/current readings alone don't say whether a battery is healthy. The UI needed to pair live values with each battery's configured nominal/top/low voltage thresholds so the numbers were actually interpretable at a glance.",
      },
    ],
    lessons: [
      "Real-time dashboards live or die on how polling is handled: a naive interval per component is simple but needs disciplined cleanup (via useEffect's return function) or it leaks across route changes.",
      "Pairing raw sensor data with reference thresholds (nominal/top/low voltage) turned a wall of numbers into something a non-technical person could actually read.",
    ],
  },
];
