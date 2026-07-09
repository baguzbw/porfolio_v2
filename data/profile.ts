// Single source of truth for all site content.
// Edit this file to update the site — no other file needs to change.

export const profile = {
  name: "Bagus Brang Wicaksono",
  role: "Software Engineer",
  tagline:
    "Frontend Developer & System Analyst building structured, production-grade web platforms — currently working toward a software engineering career in Japan.",
  location: "Surakarta, Indonesia",
  status: "Open to Work",
  email: "bagusbwicaksono5@gmail.com",
  phone: "+62 812-2943-8346",
  links: {
    github: "https://github.com/baguswicaksono", // TODO: confirm exact GitHub handle
    linkedin: "https://linkedin.com/in/baguswicaksono",
    portfolio: "https://baguswicaksono.vercel.app",
  },
  about: [
    "I'm Bagus, a Surakarta-based Software Engineer focused on building web platforms that are well-structured, maintainable, and grounded in real requirements — not just interfaces that look finished.",
    "My work spans frontend engineering (Next.js, React, TypeScript) and backend/systems analysis (Oracle SQL, Supabase, ERP data pipelines), which lets me move between UI implementation and the data and business logic underneath it.",
    "I combine technical execution with structured documentation and clear communication — writing Functional Design Documents, use cases, and process flows alongside the code itself. Long-term, I'm working toward a software engineering career in Japan, currently preparing my Japanese language proficiency and technical portfolio for that path.",
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
    logoSrc: "/logos/inco-academy.png",
    location: "Remote — France",
    period: "Jul 2025 — Sep 2025",
    duration: "3 months",
    type: "Internship",
    workMode: "Remote",
    responsibilities: [
      "Analyzed computational resource consumption, carbon footprint evaluation, and optimization strategies for AI systems.",
      "Implemented methodologies for integrating environmental considerations into digital product development cycles.",
      "Assessed and implemented sustainable practices in technology operations and infrastructure.",
    ],
    whatILearned: [
      "Learned how to quantify the environmental cost of AI/software systems — translating compute usage into carbon-footprint terms.",
      "Gained a framework for embedding sustainability considerations into a product development cycle rather than treating it as an afterthought.",
    ],
    impact: [
      "Contributed methodologies INCO Academy could apply across future green-tech product assessments.",
      "Connected a sustainability lens to standard software development practices for the team.",
    ],
  },
  {
    title: "System Analyst",
    company: "PT IFARS Pharmaceutical Laboratories",
    companyContext: "Pharmaceutical manufacturer",
    logoInitials: "IF",
    logoSrc: "/logos/ifars.png",
    location: "Karanganyar, Indonesia",
    period: "Oct 2024 — Apr 2025",
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
    logoSrc: "/logos/star-software.png",
    location: "Yogyakarta, Indonesia",
    period: "Feb 2024 — Jun 2024",
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
    impact: [
      "Cut UI development time across 10+ internal modules by supplying a shared component library.",
      "Enabled faster, more consistent data lookup for enterprise clients through the multi-criteria filter and search feature.",
    ],
  },
  {
    title: "Frontend Developer & UI/UX Designer Intern",
    company: "PT SIMS Life Media",
    companyContext: "IoT monitoring platform startup",
    logoInitials: "SL",
    logoSrc: "/logos/sims-life-media.png",
    location: "Yogyakarta, Indonesia",
    period: "Jan 2023 — Dec 2023",
    duration: "1 year",
    type: "Internship",
    workMode: "Onsite",
    responsibilities: [
      "Built a real-time IoT device monitoring dashboard using React.js, with responsive pages per device category.",
      "Designed and consumed RESTful APIs for secure frontend–backend data transfer between IoT devices and the web client.",
      "Delivered UI/UX wireframes in Figma; implemented pixel-accurate components in production.",
    ],
    whatILearned: [
      "Learned the full loop of building a real-time monitoring UI — from Figma wireframe to a working dashboard consuming live IoT data.",
      "Improved my ability to design REST API contracts between frontend and IoT backend services.",
    ],
    impact: [
      "Delivered a working device-monitoring dashboard used to track live IoT device status by category.",
      "Sped up design-to-dev handoff by implementing pixel-accurate components directly from Figma wireframes.",
    ],
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
    degree: "Bachelor's degree (in progress)",
    field: "S1 Informatika — Distance Learning (PJJ)",
    gpa: "3.70 / 4.00",
    period: "2025 — Expected 2027",
    location: "Bandung, Indonesia",
    logoInitials: "TU",
    logoSrc: "/logos/telkom-university.png",
  },
  {
    school: "Universitas Sebelas Maret (UNS)",
    degree: "Associate's degree, D3",
    field: "Teknik Informatika",
    gpa: "3.80 / 4.00",
    period: "2021 — 2024",
    location: "Surakarta, Indonesia",
    logoInitials: "UNS",
    logoSrc: "/logos/uns.png",
  },
  {
    school: "SMK Negeri 2 Surakarta",
    degree: "Vocational High School",
    field: "Teknik Komputer Jaringan",
    period: "2018 — 2021",
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
    skills: ["TypeScript", "JavaScript", "Go", "Python", "PHP", "Java", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["Next.js 14", "React.js", "React Router", "Tailwind CSS", "Framer Motion", "Ant Design", "Figma"],
  },
  {
    label: "Backend & DB",
    skills: ["Supabase", "PostgreSQL", "Oracle SQL", "MySQL", "Laravel", "RESTful API"],
  },
  {
    label: "Data & Analytics",
    skills: ["scikit-learn", "Plotly", "Streamlit"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Jira", "Notion", "Linux"],
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
    issuer: "BNSP — Lembaga Sertifikasi Profesi",
    type: "Certification",
    category: "Professional",
    issued: "Valid until 2027",
    image: "/certificates/bnsp-junior-web-programmer.png",
  },
  {
    title: "TOEIC — Score 760",
    issuer: "ETS",
    type: "Certification",
    category: "Language",
    image: "/certificates/toeic-760.png",
  },
  {
    title: "Applied Database Systems",
    issuer: "Oracle Academy",
    type: "Course",
    category: "Backend",
    image: "/certificates/oracle-applied-database-systems.png",
  },
  {
    title: "Database Design",
    issuer: "Oracle Academy",
    type: "Course",
    category: "Backend",
    image: "/certificates/oracle-database-design.png",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    type: "Course",
    category: "Backend",
    image: "/certificates/oracle-database-programming-sql.png",
  },
  {
    title: "System Administration I",
    issuer: "Red Hat",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/redhat-system-administration-1.png",
  },
  {
    title: "OpenShift Developer I — Introduction to Containers with Podman (DO188)",
    issuer: "Red Hat",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/redhat-openshift-developer-1.png",
  },
  {
    title: "Introduction to Networking",
    issuer: "Cisco",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/cisco-intro-networking.png",
  },
  {
    title: "Introduction to Packet Tracer",
    issuer: "Cisco",
    type: "Course",
    category: "Infrastructure",
    image: "/certificates/cisco-packet-tracer.png",
  },
  {
    title: "Back-End Development",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Backend",
    image: "/certificates/dicoding-backend-development.png",
  },
  {
    title: "Data Visualization",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Data",
    image: "/certificates/dicoding-data-visualization.png",
  },
  {
    title: "JavaScript Programming",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Frontend",
    image: "/certificates/dicoding-javascript-programming.png",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Professional",
    image: "/certificates/dicoding-project-management-fundamentals.png",
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
  type: "Web" | "Data" | "Design";
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
    description:
      "Full-stack company profile site for Kantor Notaris & PPAT Norman Tuah Hamonangan Sinaga in Karawang — public-facing site plus a protected admin panel.",
    type: "Web",
    category: "Freelance",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    highlights: [
      "Designed and built the public site and admin panel from scratch — end-to-end from database schema to production deployment on Vercel.",
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
          "Getting Supabase's Row Level Security right for the admin CRUD flow took a few iterations — policies had to allow authenticated admin writes while keeping public reads open, without accidentally exposing draft content.",
      },
      {
        title: "Server vs. client component boundaries",
        description:
          "App Router's split between server and client components meant carefully deciding which parts of the admin panel needed interactivity (forms, live previews) versus which could stay server-rendered for speed.",
      },
    ],
    lessons: [
      "Supabase RLS policies are worth designing on paper before writing any SQL — retrofitting them onto an existing schema is much harder.",
      "App Router's server/client split forces better component boundaries than the old Pages Router did, even with the learning curve.",
    ],
  },
  {
    slug: "hospital-inpatient-disease-analysis",
    title: "Hospital Inpatient Disease Analysis — RSUD Sukoharjo",
    description:
      "Time-series forecasting and clustering analysis on a decade of hospital inpatient records, delivered as a full data-analysis portfolio project.",
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
        description:
          "Hospital admissions have strong yearly seasonality, so a plain ARIMA wasn't enough. Settled on a seasonal SARIMA order after comparing seasonal and non-seasonal fits against held-out months.",
        code: "SARIMA(1,1,1)(1,1,1,12)",
      },
    ],
    lessons: [
      "Data cleaning and standardization took longer than the modeling itself — worth budgeting for up front on any real-world dataset.",
      "SARIMA's seasonal terms made a measurable difference over plain ARIMA once admissions showed a clear yearly cycle.",
    ],
  },
  {
    slug: "sukoharjo-economic-housing-affordability",
    title: "Sukoharjo Regional Economic & Housing Affordability Analysis",
    description:
      "Regional economic analysis combining multiple BPS open datasets to assess housing affordability against local income and employment patterns.",
    type: "Data",
    category: "Personal Project",
    tech: ["Python", "pandas", "Plotly", "Streamlit", "BPS Open Data"],
    highlights: [
      "Integrated 4 BPS datasets (PDRB ADHK, wages, employment by sector, household expenditure) covering 2019–2023 into a unified analysis pipeline.",
      "Ran a housing affordability stress test, identifying a 47% DTI constraint for average earners and segmenting the market by sector purchasing power.",
    ],
    coverImage: "/projects/sukoharjo-economic-housing-affordability.png",
    overview:
      "A regional economic analysis for Sukoharjo Regency built on 4 separate BPS (Statistics Indonesia) open datasets — regional GDP, wages, employment by sector, and household expenditure — merged into one pipeline to run a housing affordability stress test against local income and employment patterns, then packaged as an interactive Streamlit dashboard.",
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
        description:
          "Housing affordability metrics vary by methodology. Settled on a debt-to-income framing to make the 47% constraint figure directly interpretable for a non-technical audience.",
      },
    ],
    lessons: [
      "Public statistics datasets (BPS) are individually clean but rarely designed to be merged with each other — schema reconciliation is its own task.",
      "A debt-to-income framing communicated the affordability finding far more clearly to non-technical readers than a raw price index would have.",
    ],
  },
  {
    slug: "personal-portfolio-v1",
    title: "Personal Portfolio Website (v1)",
    description:
      "My first personal portfolio — a dual Developer/Designer site built with React, with dedicated case-study pages for earlier freelance and campus projects.",
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
      "My first personal portfolio, built with React, Tailwind CSS, and Framer Motion. It split into separate Developer and Designer views, each showcasing project cards that linked to dedicated case-study pages — including Kampung Batik (a promotional site for a batik-producing village), an information site for the ICARELI conference, and an OLT (Optical Line Termination) monitoring dashboard — each broken down into Features, Research, and Result sections. Retired in favor of the current Next.js rebuild.",
    techDetails: [
      { name: "React.js", description: "Core UI library for the whole site." },
      { name: "React Router", description: "Client-side routing across the Developer, Designer, About, and case-study pages." },
      { name: "Tailwind CSS", description: "Utility-first styling, including a Plus Jakarta Sans type system carried forward into the current site." },
      { name: "Framer Motion", description: "Section fade-in animations and hover transforms on project cards." },
    ],
    features: [
      {
        title: "Dual Developer / Designer personas",
        description:
          "Rather than one flat homepage, the site split into a Developer view and a Designer view, each with its own intro copy and project cards — reflecting a combined frontend + UI/UX skill set.",
      },
      {
        title: "Per-project case-study pages",
        description:
          "Featured projects (Kampung Batik, ICARELI, OLT Monitoring) each got their own route with a consistent Features / Research / Result structure, rather than just a card and a link.",
      },
      {
        title: "Honest incomplete states",
        description:
          "The OLT Monitoring project card intentionally showed a \"case study not ready yet\" state on hover instead of a broken or fake link, for a project whose write-up wasn't finished.",
      },
    ],
    challenges: [
      {
        title: "Structuring a two-persona portfolio without it feeling like two disconnected sites",
        description:
          "Splitting Developer and Designer into separate routes risked feeling fragmented. Keeping shared navigation, typography, and motion consistent across both was what held it together as one site.",
      },
    ],
    lessons: [
      "A portfolio is itself a product worth its own information architecture — separate personas and a repeatable case-study template, not just a flat project list.",
      "The Plus Jakarta Sans typography and motion-forward feel from this version carried directly into the current portfolio rebuild.",
    ],
  },
  {
    slug: "kampung-batik-joglo-bale-agung-cendana",
    title: "Kampung Batik Joglo Bale Agung Cendana",
    description:
      "Campus PBL project giving a batik-producing village its first web presence — articles on its cultural heritage plus a product and motif gallery.",
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
      "A Project Based Learning collaboration (semester 4, with Life Media) to give Kampung Batik Joglo Bale Agung Cendana — a batik-producing village — its first web presence. The site needed to promote the village's cultural heritage, its distinctive batik motifs, and its products to an audience that previously had no way to discover them online.",
    techDetails: [
      { name: "React.js", description: "Frontend framework — learned specifically for this project, coming from a mostly Laravel/PHP background." },
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
        description:
          "Coming from a mostly Laravel/PHP background, this was the first project using React — spent time upfront researching how its component structure differs from Laravel's more prescriptive MVC layout.",
      },
      {
        title: "Weak reference sites to design against",
        description:
          "The two existing batik-community sites researched for inspiration had cluttered navigation and dated visual design. Their weaknesses justified a simpler navbar and a more deliberate font/color system rather than copying either.",
      },
    ],
    lessons: [
      "First large team project — learned the cost of skipping upfront planning (scope, deadlines, database needs) in favor of just starting to build.",
      "Feedback is useful but needs filtering against the project's original goals, or scope creep quietly resets the timeline.",
    ],
  },
  {
    slug: "icareli-conference-website",
    title: "ICARELI Conference Website",
    description:
      "Website for UNS's International Conferences on Animal Research for Eco-Friendly Livestock Industry — speakers, schedule, and multi-year conference data.",
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
      "A website for ICARELI (International Conferences on Animal Research for Eco-Friendly Livestock Industry), a biennial conference hosted by the Faculty of Agriculture at Universitas Sebelas Maret. It previously ran on two separate websites merged awkwardly into one, causing bloated data. This rebuild needed to support speaker info, schedules, committees, and submission guidelines — and, added mid-project, multiple conference years on one consistent design.",
    techDetails: [
      { name: "React.js", description: "Frontend, with React Context introduced partway through to handle multi-year conference data cleanly." },
      { name: "Laravel", description: "Backend." },
      { name: "MySQL", description: "Database." },
    ],
    features: [
      {
        title: "Multiple Data (multi-year conferences)",
        description:
          "Switching between conference years (e.g. 2021 vs 2023) swaps all related data without changing the underlying design — added after the initial single-year version was already built.",
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
          "The site was originally scoped and built for a single year of conference data. Partway through, the Faculty asked for the 2021 conference to be supported alongside 2023 without a redesign — solved by switching from React Props to React Context so the same components could serve either year's data.",
      },
      {
        title: "A 1-month deadline with a real, fixed event date",
        description:
          "Working directly with the Faculty of Agriculture meant revisions had to turn around fast to be ready for the actual conference date, not a flexible academic deadline.",
      },
    ],
    lessons: [
      "React Context is worth the extra complexity on larger apps needing shared state across many components — React Props alone doesn't scale as cleanly.",
      "Doing at least some upfront research under a tight deadline still beats skipping straight to building — confusion mid-build cost more time than the research would have.",
    ],
  },
  {
    slug: "e-library-ui-ux-design",
    title: "E-Library — Self-Service Library System (UI/UX Design)",
    description:
      "A UI/UX design case study for a school library self-service system — book borrowing and return via scanning, designed in Figma for a Human-Computer Interaction course.",
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
    techDetails: [
      { name: "Figma", description: "Full interface design, prototyping, and the published case-study file." },
    ],
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
        description:
          "The initial brief read as just a borrow/return system. Presenting the design surfaced a missing requirement — attendance/check-in tracking for people entering the library — that hadn't been scoped at all.",
      },
    ],
    lessons: [
      "Figma turned out to be a genuinely good daily design tool, not just something for web mockups — lighter and cleaner than Photoshop/Illustrator for this kind of interface work.",
      "A vague project brief costs more time later than it saves early — an incomplete brief here meant reworking the design after it had already been presented.",
    ],
  },
];
