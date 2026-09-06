export const profile = {
  name: "Venkata Anand Sai Kumar Narla",
  short: "Venny",
  pronouns: "He/Him",
  title: "Senior Software Engineer — AI",
  company: "Everstage",
  tagline: "Building agentic AI and LLM infrastructure.",
  location: "Bengaluru, India",
  workLocation: "Coimbatore, Tamil Nadu",
  openToWork: false,
  emailPersonal: "venkatnarla0@gmail.com",
  emailWork: "venkata.narla@everstage.com",
  avatar: "/headshot.jpg",
  githubRepoCount: 44,
  about: [
    "I'm an AI engineer focused on the infrastructure beneath agentic systems — evaluation, telemetry, orchestration, and the connective tissue between LLMs and the rest of an enterprise stack.",
    "At Everstage I work on the LLM platform powering our sales-compensation product: evaluation frameworks, multi-tenant cost attribution, RAG over CRMs like HubSpot and Gong, and the React surfaces that make agent thinking legible.",
    "Before Everstage, I spent almost two years on computer-vision and SLAM research at MulticoreWare and IBM. That work — sensor fusion, 3D reconstruction, edge-deployed detectors — still informs how I think about latency, drift, and getting models to behave in the real world.",
  ],
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/Narla-Venkata-Anand-Sai-Kumar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/narla-venkata-anand-sai-kumar" },
  { label: "Twitter", href: "https://twitter.com/NVAnandSaiKumar" },
  { label: "Kaggle", href: "https://www.kaggle.com/venkataanandsaikumar" },
  { label: "Medium", href: "https://medium.com/@venkatnarla0" },
  { label: "Scholar", href: "https://scholar.google.com/citations?user=l0j-Ip0AAAAJ&hl=en" },
] as const;

export const currentlyShipping = [
  {
    title: "LLM evaluation infrastructure",
    body:
      "Scalable evaluation framework with dataset versioning, modular evaluator cloning, and deterministic scoring — covering both core production agents and isolated synthetic test environments.",
    quote:
      "An agent you can't measure is an agent you can't ship.",
    iconKey: "eval",
  },
  {
    title: "Distributed LLM orchestration",
    body:
      "Temporal IO workflows for batch operations that sidestep provider timeouts, with a real-time UI polling architecture for tracking long-running asynchronous tasks.",
    quote:
      "The model is rarely the bottleneck. The orchestration around its failures is.",
    iconKey: "orchestration",
  },
  {
    title: "Multi-tenant telemetry & cost attribution",
    body:
      "Data schemas synced to LangSmith, plus automated cost-attribution pipelines that disambiguate core agent operational spend from synthetic evaluation cost.",
    quote:
      "You can't optimize what you can't attribute. Token cost is product feedback.",
    iconKey: "telemetry",
  },
] as const;

export type ExperienceRole = {
  title: string;
  type: string;
  dates: string;
  duration: string;
  bullets: string[];
  skills: string[];
};

export type Experience = {
  company: string;
  location: string;
  locationType: string;
  totalDuration: string;
  href?: string;
  logo?: string;
  roles: ExperienceRole[];
};

export const experiences: Experience[] = [
  {
    company: "Everstage",
    location: "Coimbatore, Tamil Nadu",
    locationType: "On-site",
    totalDuration: "1 yr 7 mos",
    href: "https://www.everstage.com",
    logo: "https://www.google.com/s2/favicons?domain=everstage.com&sz=256",
    roles: [
      {
        title: "Senior Software Engineer — AI",
        type: "Full-time",
        dates: "Sep 2026 — Present",
        duration: "1 mo",
        bullets: [
          "Promoted to Senior Software Engineer — AI, taking on broader ownership of the LLM evaluation and orchestration platform powering Everstage's sales-compensation product.",
        ],
        skills: ["Python", "React.js", "LangSmith", "Temporal IO", "Multi-tenant systems"],
      },
      {
        title: "Software Engineer II — AI",
        type: "Full-time",
        dates: "Feb 2026 — Sep 2026",
        duration: "7 mos",
        bullets: [
          "Spearheaded the architecture and implementation of a scalable LLM evaluation framework — dataset versioning, modular evaluator cloning, and deterministic scoring across core agents and synthetic test environments.",
          "Integrated Temporal IO workflows to orchestrate distributed batch operations, sidestepping LLM-provider timeout constraints and powering a real-time UI polling layer for asynchronous task status.",
          "Architected multi-tenant data schemas synced with LangSmith telemetry and shipped automated cost-attribution pipelines that disambiguate agent operational costs from synthetic evaluation spend.",
        ],
        skills: ["Python", "React.js", "LangSmith", "Temporal IO", "Multi-tenant systems"],
      },
      {
        title: "Software Engineer I — AI",
        type: "Full-time",
        dates: "May 2025 — Feb 2026",
        duration: "10 mos",
        bullets: [
          "Built stateful, highly interactive React.js frontends — real-time streaming, Chain-of-Thought transparency, Spotlight search, and programmatic entity resolution for mentions and skill triggering.",
          "Engineered decorator-based telemetry abstractions to trace nested LLM execution chains; piped execution latency, context windows, and token ingestion metrics into Snowflake for analytics and tenant billing.",
          "Designed the RAG layer and deployed Model Context Protocol (MCP) data connectors with secure bi-directional sync to enterprise CRMs (HubSpot, Gong) — fuelling Knowledge Base Explorers and unstructured data indexing.",
        ],
        skills: ["React.js", "Django", "RAG", "MCP", "Snowflake", "LangGraph"],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        dates: "Feb 2025 — May 2025",
        duration: "4 mos",
        bullets: [
          "Built integration layers for diverse foundation models (Anthropic Claude families, OpenAI GPT variants) with standardized context windows and capability-driven fallback matrices.",
          "Bootstrapped API endpoints, structured database schemas, and shipped data migrations to launch core interactive AI canvases and isolated execution environments.",
          "Hardened backend operations: resolved payload-serialization edge cases, refined API error telemetry, and enforced role-based access control across multi-tenant surfaces.",
        ],
        skills: ["RAG", "AI", "Anthropic Claude", "OpenAI GPT", "RBAC"],
      },
    ],
  },
  {
    company: "Diebold Nixdorf",
    location: "Mumbai, Maharashtra",
    locationType: "On-site",
    totalDuration: "3 mos",
    href: "https://www.dieboldnixdorf.com",
    logo: "https://www.google.com/s2/favicons?domain=dieboldnixdorf.com&sz=256",
    roles: [
      {
        title: "Generative AI Intern",
        type: "Internship",
        dates: "Dec 2024 — Feb 2025",
        duration: "3 mos",
        bullets: [
          "Developed and optimized large language models for productivity and operational efficiency, applying advanced ML and NLP techniques to automate internal workflows.",
          "Shipped initial agentic-AI prototypes on Microsoft Azure that drove the platform team's broader adoption of generative AI for banking and retail customers.",
          "Received a written recommendation from my engineering manager (Sr. Manager, Platform Engineering) at the close of the internship.",
        ],
        skills: ["Computer Vision", "Microsoft Azure", "LLMs", "NLP"],
      },
    ],
  },
  {
    company: "MulticoreWare",
    location: "Coimbatore, TN (later) · Remote (earlier)",
    locationType: "Hybrid",
    totalDuration: "2 yrs 3 mos",
    href: "https://multicorewareinc.com",
    logo: "https://www.google.com/s2/favicons?domain=multicorewareinc.com&sz=256",
    roles: [
      {
        title: "Junior Engineer — Computer Vision",
        type: "Internship",
        dates: "May 2024 — Nov 2024",
        duration: "7 mos",
        bullets: [
          "Integrated LiDAR and camera data with OpenPose for digital-twin applications, achieving 87% accuracy on 2D-to-3D keypoint conversion.",
          "Streamed real-time data via HTTP and asynchronous TCP/UDP sockets, delivering 3D keypoints into Unity for downstream visualization.",
          "Led the Mobi-SLAM track — a custom ORB-SLAM3 implementation fused with IMU and GPS for accurate real-time 3D mapping and localization.",
          "Optimized the CRFNet algorithm with multi-sensor fusion, lifting object-detection reliability by 18% in dynamic environments.",
        ],
        skills: ["SLAM", "ORB-SLAM3", "IMU", "Sensor Fusion", "LiDAR", "Unity", "OpenPose"],
      },
      {
        title: "Research Student",
        type: "Internship",
        dates: "Sep 2022 — May 2024",
        duration: "1 yr 9 mos",
        bullets: [
          "Spearheaded the automation of 3D reconstruction from 2D image sequences, improving processing efficiency in the research pipeline.",
          "Developed deep-learning models for synthetic data generation to broaden training data diversity for downstream CV tasks.",
          "Refined algorithms and streamlined workflows for clean integration into production environments.",
        ],
        skills: ["Computer Vision", "3D Reconstruction", "Synthetic Data", "Deep Learning"],
      },
    ],
  },
  {
    company: "IBM",
    location: "Remote",
    locationType: "Remote",
    totalDuration: "6 mos",
    href: "https://www.ibm.com",
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=256",
    roles: [
      {
        title: "AI Research Intern",
        type: "Internship",
        dates: "May 2023 — Oct 2023",
        duration: "6 mos",
        bullets: [
          "Developed a graphology analysis system on ResNet-50, reaching 76% accuracy on handwriting feature extraction.",
          "Deployed the model in a cross-platform Flutter app using TensorFlow Lite for efficient on-device inference.",
          "Designed a pothole-detection system using YOLOv8n with RGB-D camera integration — improving detection accuracy by 42%.",
          "Achieved 47+ FPS real-time processing on edge devices through a Flask API.",
        ],
        skills: ["Computer Vision", "ResNet-50", "YOLOv8", "TensorFlow Lite", "Flutter", "Flask"],
      },
    ],
  },
];

export type Project = {
  name: string;
  kind: "Agentic AI" | "GenAI App" | "Tooling" | "Research";
  year: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "GreenPulse",
    kind: "GenAI App",
    year: "2025",
    summary:
      "AI farming assistant — leaf-image disease diagnosis, weekly crop calendars, market-price forecasting, scheme Q&A, and a voice-first agent across five Indian languages.",
    stack: ["Next.js", "Gemini", "Genkit", "Tailwind", "shadcn/ui", "Firebase"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/GreenPulse",
    featured: true,
  },
  {
    name: "TalentLens",
    kind: "GenAI App",
    year: "2025",
    summary:
      "AI-powered interview & talent-assessment platform with Student / Teacher / Admin portals, real-time feedback, JWT auth, and WebSocket streaming.",
    stack: ["Next.js", "Django REST", "PostgreSQL", "Redis", "Gemini", "Docker"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/TalentLens",
    featured: true,
  },
  {
    name: "Rule Engine with AST",
    kind: "Tooling",
    year: "2024",
    summary:
      "Three-tier eligibility engine — define, combine, evaluate, and modify rules dynamically using Abstract Syntax Trees. Tkinter GUI + REST API.",
    stack: ["Flask", "SQLAlchemy", "SQLite", "Tkinter"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Rule-Engine-with-AST",
  },
  {
    name: "Content Moderation Tool",
    kind: "GenAI App",
    year: "2024",
    summary:
      "Real-time NSFW filter — image-blur browser extension, video-filter extension, and upload web app. Built on ResNet-101 pruned to TFLite. Won IBM CodeRush'23.",
    stack: ["TensorFlow", "Keras", "ResNet-101", "TFLite", "Flask", "OpenCV"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Content-Moderation-Tool",
    featured: true,
  },
  {
    name: "MediVisionX",
    kind: "GenAI App",
    year: "2025",
    summary:
      "Medical-image classification web app across bone fractures, brain conditions, and more. Disclaimer: educational and research use only.",
    stack: ["Flask", "TensorFlow", "OpenCV", "Docker"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/MediVisionX",
  },
  {
    name: "Anomaly Behavior in Financial Transactions",
    kind: "Tooling",
    year: "2024",
    summary: "Graph-Convolutional-Network fraud detector trained on the Kaggle credit-card fraud dataset.",
    stack: ["PyTorch", "GCN", "Jupyter"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Anomaly-Behavior-Analysis-in-Financial-Transactions",
  },
  {
    name: "Blockchain Voting System",
    kind: "Tooling",
    year: "2024",
    summary:
      "Decentralized voting on a self-built chain — SHA-256 + PoW, multi-node mining, voter anonymity, public verifiability.",
    stack: ["Python", "Flask", "SHA-256", "Proof of Work"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Blockchain-votiing-system",
  },
  {
    name: "Weather Monitoring",
    kind: "Tooling",
    year: "2024",
    summary:
      "Real-time aggregator over the OpenWeatherMap API for six Indian metros — daily rollups, threshold alerts, Bootstrap UI, Docker.",
    stack: ["Flask", "SQLAlchemy", "OpenWeatherMap", "Bootstrap", "Docker"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Wheather-Monitoring",
  },
];

export const researchWork: Project[] = [
  {
    name: "Mobi-SLAM",
    kind: "Research",
    year: "2024",
    summary:
      "Custom ORB-SLAM3 implementation fused with IMU and GPS for real-time 3D mapping and localization. Built at MulticoreWare.",
    stack: ["ORB-SLAM3", "IMU", "GPS", "C++"],
  },
  {
    name: "Optimized OpenPCDet",
    kind: "Research",
    year: "2024",
    summary: "LiDAR-based 3D object detection — PV-RCNN, PointRCNN, Part-A2-Net benchmarks across KITTI, Waymo, NuScenes.",
    stack: ["PyTorch", "OpenPCDet", "LiDAR"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Optimized-OpenPCDet",
  },
  {
    name: "3D-SAM-LIDAR",
    kind: "Research",
    year: "2024",
    summary: "Point-cloud instance segmentation combining the Segment Anything Model with LiDAR data pipelines.",
    stack: ["Python", "SAM", "Point Clouds"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/3D-SAM-LIDAR",
  },
  {
    name: "Multi-View Gaussian Reconstruction",
    kind: "Research",
    year: "2024",
    summary: "Working fork of 3DTopia LGM — high-resolution 3D content creation from multi-view image inputs.",
    stack: ["PyTorch", "Gaussian Splatting"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/3D-Reconstruction",
  },
  {
    name: "ML-Graphology",
    kind: "Research",
    year: "2023",
    summary: "ResNet-50 graphology analysis — handwriting → personality-trait inference. Companion to IBM internship work.",
    stack: ["TensorFlow", "ResNet-50", "Python"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/ML-Graphology",
  },
  {
    name: "Flutter-Graphology",
    kind: "Research",
    year: "2024",
    summary: "Cross-platform Flutter app delivering the graphology model on mobile, desktop, and web via TensorFlow Lite.",
    stack: ["Flutter", "Dart", "TFLite"],
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Flutter-Graphology",
  },
];

export type LlmResearchStrategy = {
  label: string;
  points: string[];
};

export type LlmResearchProject = {
  name: string;
  tagline: string;
  year: string;
  status: string;
  params: string;
  repo: string;
  summary: string;
  stack: string[];
  hardware: string[];
  strategies: LlmResearchStrategy[];
};

export const llmResearch: LlmResearchProject[] = [
  {
    name: "ventx",
    tagline: "VenTX-100K — a native long-context transformer",
    year: "2026",
    status: "Base pretraining in progress",
    params: "226.1M",
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/ventx",
    summary:
      "A decoder-only transformer scaled up from Chaos-135M, built around native long context — full dense self-attention out to 32K tokens today, with a staged path to 65K–100K, rather than sliding windows or attention sinks bolted on after the fact.",
    stack: ["PyTorch", "Python", "Muon", "AdamW", "RoPE"],
    hardware: ["RTX 5060 (8GB)", "RTX 4090", "B200 (cloud)"],
    strategies: [
      {
        label: "Architecture",
        points: [
          "14 layers, d_model 960, SwiGLU FFN at 3,584",
          "Grouped-query attention — 15 query heads / 5 KV heads (3:1 ratio), head dim 64",
          "RoPE positional encoding, RMSNorm with QK-norm, tied input/output embeddings",
          "49,152-token vocabulary",
        ],
      },
      {
        label: "Context strategy",
        points: [
          "32,768 tokens of native dense attention today; staged extension planned to 65K–100K",
          "Deliberately avoids sliding-window and attention-sink approximations — full per-layer self-attention across the whole sequence",
        ],
      },
      {
        label: "Data",
        points: [
          "~4.27B-token corpus: 70% long-form (BookCorpusOpen, Project Gutenberg) and 30% short-form web / educational / mathematical / code content",
          "Mix chosen to expose the model to genuinely continuous documents during pretraining, not just concatenated short spans",
        ],
      },
      {
        label: "Optimization",
        points: [
          "Muon (Newton–Schulz orthogonalized momentum) for 2D weight matrices; AdamW for embeddings and norms",
          "Checkpoints published mid-run for transparency, with `--resume` (full optimizer state) and `--init` (weights-only) restart paths",
        ],
      },
    ],
  },
  {
    name: "Chaos-135M",
    tagline: "A from-scratch LLM for SQL + tool calling on one consumer GPU",
    year: "2026",
    status: "Trained and benchmarked",
    params: "134.5M",
    repo: "https://github.com/Narla-Venkata-Anand-Sai-Kumar/Chaos-135M",
    summary:
      "An end-to-end decoder-only LLM — tokenizer, data pipeline, training loop, and constrained decoder — built from scratch and trained entirely on a single RTX 5060 (8GB), specialized for executable SQL generation and schema-safe tool calling.",
    stack: ["PyTorch", "Python", "Muon", "Triton", "BFCL"],
    hardware: ["RTX 5060 (8GB)"],
    strategies: [
      {
        label: "Architecture",
        points: [
          "RoPE, RMSNorm with QK-norm, grouped-query attention with a sliding window, SwiGLU activation",
          "Tied embeddings; an MLA (multi-head latent attention) variant available alongside the default",
          "KV-cache incremental decoding for inference",
        ],
      },
      {
        label: "Tokenizer & data",
        points: [
          "Custom BPE tokenizer, 49,152-token vocabulary",
          "Web, educational, and mathematical shards stored as streamed uint16 token shards",
        ],
      },
      {
        label: "Training recipe",
        points: [
          "20,000-step run on a WSD (warmup–stable–decay) schedule with gradient accumulation (micro-batch 4 × 16 steps, 2,048-token context)",
          "bf16 mixed precision, gradient checkpointing, and CUDA expandable segments to fit an 8GB card",
          "Muon optimizer for 2D matrices, a separate AdamW group for embeddings/head/norms",
          "Treats `triton-windows` as required, not optional — torch.compile loses ~40% throughput without it",
        ],
      },
      {
        label: "Evaluation & constrained decoding",
        points: [
          "Live dashboard tracks checkpoints against reduced-sample ARC, HellaSwag, and PIQA — scored CPU-only to avoid contending with training for GPU time",
          "SQL correctness measured by actual query execution, not just syntax matching",
          "Tool calling validated BFCL-style; a JSON-automaton constrained decoder guarantees schema-valid output via logit masking",
        ],
      },
    ],
  },
];

export const publications = [
  {
    title:
      "Sentiment and Context-Aware Recurrent Convolutional Neural Network for Sentiment Analysis",
    venue: "IEEE ASIANCON",
    date: "Sep 27, 2023",
  },
  {
    title: "FlowerBot: A Deep Learning aided Robotic Process to detect and pluck flowers",
    venue: "IEEE ICECA",
    date: "Dec 1, 2022",
    doi: "10.1109/ICECA55336.2022.10009077",
    href: "https://ieeexplore.ieee.org/document/10009077/",
  },
];

export const education = [
  {
    institution: "Kalasalingam Academy of Research and Education",
    short: "Kalasalingam University",
    location: "Krishnankoil, Tamil Nadu",
    degree: "B.Tech, Computer Science & Engineering",
    specialization: "AI & ML specialization",
    dates: "Sep 2021 — May 2025",
    grade: "CGPA 8.15 / 10",
    description:
      "My B.Tech in Computer Science and Engineering, with a specialization in Artificial Intelligence and Machine Learning.",
    skills: ["Algorithms", "Image Analysis", "+15 more"],
    highlights: [
      "President, KARE Open Source Society (KOSS) — 2 yrs 4 mos",
      "Technical Lead, Vishaka Cultural Club",
      "Head, Optic Optimizers (Computer Vision work group)",
      "Co-authored 2 IEEE conference papers · IBM Hackathon winner",
    ],
  },
  {
    institution: "Narayana Junior College",
    short: "Narayana Junior College",
    location: "Andhra Pradesh, India",
    degree: "Intermediate · MPC",
    specialization: "Mathematics · Physics · Chemistry",
    dates: "Jun 2019 — May 2021",
    grade: "95%",
    description:
      "Completed 11th and 12th grade with a focus on MPC (Mathematics, Physics, Chemistry) core subjects. The foundation that strengthened my analytical and problem-solving skills, essential for my technical pursuits.",
    skills: ["English", "Chemistry", "+3 more"],
    highlights: [],
  },
  {
    institution: "Ram Narayana High School",
    short: "Ram Narayana High School",
    location: "Andhra Pradesh, India",
    degree: "SSC",
    specialization: "Secondary School Certificate",
    dates: "Jun 2018 — Apr 2019",
    grade: "GPA 9.7 / 10",
    description:
      "Completed my 10th grade (SSC) with a GPA of 9.7/10, demonstrating consistent academic excellence.",
    skills: [],
    highlights: [],
  },
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University",
    date: "Sep 2022",
    credentialId: "AJ8X3VEDH9AF",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Udemy",
    date: "Aug 2024",
    credentialId: "UC-f7fafcda-c837-41d9-bda0-1a8e888d9a73",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "Udemy",
    date: "Nov 2022",
    credentialId: "UC-51e60286-4ab5-4a68-bf90-fe458ab7c3df",
  },
  {
    name: "Web Development Internship",
    issuer: "Skill Vertex / Artifintel",
    date: "Apr – Jun 2022",
    credentialId: "RA1718114",
  },
  {
    name: "Core Java",
    issuer: "VIT Computer Education, Eluru",
    date: "Jun – Jul 2022",
    credentialId: "—",
  },
];

export const leadership = [
  {
    role: "President",
    org: "KARE Open Source Society (KOSS)",
    dates: "Mar 2023 — Jun 2025",
    body:
      "Led a 2 yr 4 mo run of the campus open-source society — curated learning kits across 17 deep-learning and 26 machine-learning projects.",
  },
  {
    role: "Technical Lead",
    org: "Vishaka Cultural Club",
    dates: "Jan 2024 — Jun 2025",
    body:
      "Streamlined cultural-event operations with a QR-code-based event-management mobile app I built for the club.",
  },
];

export const awards = [
  {
    title: "IBM National Hackathon Winner — CodeRush'23",
    org: "IBM",
    date: "Dec 28–29, 2023",
    body:
      "1st prize in a 24-hour hackathon hosted at Kalasalingam University; winning entry was the Content Moderation Tool.",
    placement: "1st · National",
    iconKey: "trophy",
  },
  {
    title: "Two first-place wins — KARE IEEE Day 2022",
    org: "KARE IEEE Student Branch",
    date: "Sep 28, 2022",
    body:
      "1st place in the Project Expo and 1st place in the Python Coding Contest at the KARE IEEE Day 2022 event.",
    placement: "2× 1st place",
    iconKey: "award",
  },
  {
    title: "Triple podium — IBM ICE Day 2022",
    org: "IBM Innovation Centre for Education",
    date: "Apr – Nov 2022",
    body:
      "Three third-place finishes across IBM ICE Day events at Kalasalingam — AI Model Development (Apr), Hackathon (Nov), and Poster Presentation (Nov).",
    placement: "3× 3rd place",
    iconKey: "medal",
  },
  {
    title: "Speaker — Disfrutar 2k25",
    org: "ACM Student Chapter, KARE",
    date: "2025",
    body: "Led a hands-on generative-AI workshop for the ACM Student Chapter.",
    placement: "Workshop",
    iconKey: "mic",
  },
];

export const recognitionStats = [
  { value: "3", label: "First-place wins", hint: "Across hackathons & coding contests" },
  { value: "3", label: "Third-place podiums", hint: "IBM ICE Day · 2022" },
  { value: "1", label: "Speaker invite", hint: "ACM, KARE · 2025" },
  { value: "2022", label: "Breakout year", hint: "5 podiums in 12 months" },
];

export type Tool = { name: string; slug?: string };

export const techStack: {
  category: string;
  era: "Now" | "Earlier";
  iconKey: "ai" | "frontend" | "backend" | "cloud" | "vision";
  tagline: string;
  tools: Tool[];
}[] = [
  {
    category: "Agentic AI & LLM Infrastructure",
    era: "Now",
    iconKey: "ai",
    tagline: "The day-to-day at Everstage.",
    tools: [
      { name: "LangGraph", slug: "langchain" },
      { name: "LangSmith", slug: "langchain" },
      { name: "RAG" },
      { name: "MCP" },
      { name: "Temporal IO", slug: "temporal" },
      { name: "Anthropic", slug: "anthropic" },
      { name: "OpenAI", slug: "openai" },
      { name: "Google Gemini", slug: "googlegemini" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "Genkit", slug: "firebase" },
    ],
  },
  {
    category: "Frontend & UI",
    era: "Now",
    iconKey: "frontend",
    tagline: "Making agent thinking legible.",
    tools: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Framer Motion", slug: "framer" },
      { name: "shadcn/ui", slug: "shadcnui" },
      { name: "Figma", slug: "figma" },
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "ESLint", slug: "eslint" },
      { name: "Prettier", slug: "prettier" },
    ],
  },
  {
    category: "Backend & Data",
    era: "Now",
    iconKey: "backend",
    tagline: "Where the cost economics live.",
    tools: [
      { name: "Python", slug: "python" },
      { name: "Django", slug: "django" },
      { name: "Flask", slug: "flask" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "Snowflake", slug: "snowflake" },
      { name: "NumPy", slug: "numpy" },
      { name: "Pandas", slug: "pandas" },
      { name: "Jupyter", slug: "jupyter" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Cloud & DevOps",
    era: "Now",
    iconKey: "cloud",
    tagline: "Multi-cloud, container-first.",
    tools: [
      { name: "Docker", slug: "docker" },
      { name: "GCP", slug: "googlecloud" },
      { name: "Azure", slug: "microsoftazure" },
      { name: "Firebase", slug: "firebase" },
      { name: "Linux", slug: "linux" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Bash", slug: "gnubash" },
    ],
  },
  {
    category: "Computer Vision & SLAM",
    era: "Earlier",
    iconKey: "vision",
    tagline: "Two years of edge ML before LLMs took over.",
    tools: [
      { name: "OpenCV", slug: "opencv" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "YOLOv8" },
      { name: "ResNet" },
      { name: "ORB-SLAM3" },
      { name: "Sensor Fusion" },
      { name: "IMU" },
      { name: "LiDAR" },
    ],
  },
];

export const skills = {
  primary: [
    "LangGraph",
    "LangSmith",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "Temporal IO",
    "Anthropic Claude",
    "OpenAI GPT",
    "Google Gemini",
    "Genkit",
    "Python",
    "TypeScript",
    "React.js",
    "Next.js",
    "Django",
    "Snowflake",
    "PostgreSQL",
    "Redis",
    "Docker",
  ],
  secondary: [
    "Computer Vision",
    "SLAM",
    "ORB-SLAM3",
    "Sensor Fusion",
    "IMU",
    "LiDAR",
    "YOLOv8",
    "ResNet",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Flutter",
    "GCP",
    "Azure",
    "Firebase",
  ],
} as const;

export const writing = [
  {
    title: "The Real Economics Behind LLM Infrastructure: TPU vs GPU",
    platform: "LinkedIn",
    date: "Feb 2026",
    href: "https://www.linkedin.com/in/narla-venkata-anand-sai-kumar/recent-activity/posts/",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "LLM Research", href: "/llm-research" },
  { label: "Writing", href: "/posts" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroStats = [
  { value: "2", label: "IEEE papers", hint: "ICECA + ASIANCON" },
  { value: "4", label: "Companies", hint: "IBM → MulticoreWare → DN → Everstage" },
  { value: "3", label: "Hackathon & contest wins", hint: "IBM CodeRush + KARE IEEE Day ×2" },
  { value: "11k", unit: "+", label: "Top-post impressions", hint: "LinkedIn, Dec 2025" },
];

export const posts = [
  {
    title: "The Real Economics Behind LLM Infrastructure: TPU vs GPU",
    excerpt:
      "Cost is the quiet axis behind every LLM-infra decision. A look at where the real money sits in TPU and GPU stacks — and the calls I've found worth making at Everstage.",
    date: "Feb 2026",
    relative: "~3 months ago",
    impressions: 1266,
    reactions: 29,
    href: "https://www.linkedin.com/in/narla-venkata-anand-sai-kumar/recent-activity/posts/",
    featured: true,
    topics: ["LLM Infrastructure", "Hardware", "Cost"],
  },
];

export const postsAggregate = {
  posts: 6,
  spanLabel: "the last ~8 months",
  totalImpressions: "25k+",
  totalReactions: "600+",
  topPost: {
    impressions: "11,156",
    reactions: 297,
    when: "Dec 2025",
  },
};

export const postTopics = [
  "Agentic AI",
  "LLM Infrastructure",
  "Evaluation & Telemetry",
  "RAG & MCP",
  "Model Cost Economics",
  "Everstage product work",
];
