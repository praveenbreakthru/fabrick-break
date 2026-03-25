import { 
  Target, 
  Database, 
  Cpu, 
  Rocket,
  MapPin,
  BarChart3,
  ShieldCheck,
  Landmark,
  Layers,
  Sparkles,
  Zap,
  Workflow,
  CheckCircle2,
  Users,
  Building2,
  Network,
  Briefcase,
  Factory,
  ShoppingBag,
  Activity,
} from 'lucide-react';
import { createElement } from 'react';

export const NAV_LINKS = [
  { name: 'Stories', id: 'stories', subtitle: "Real impact, real drama." },
  { name: 'Services', id: 'services', subtitle: "What we actually do." },
  { name: 'Industries', id: 'industries', subtitle: "Where we play." },
  { name: 'Labs', id: 'labs', subtitle: "The innovation engine." },
  { name: 'About', id: 'about', subtitle: "The philosophy." },
  { name: 'Contact', id: 'contact', subtitle: "Start the conversation." },
];

export const PARTNERS = [
  { name: 'Snowflake', color: 'text-brand-blue' },
  { name: 'Google Cloud', color: 'text-destructive' },
  { name: 'Databricks', color: 'text-brand-orange' },
  { name: 'Intellect Design', color: 'text-brand-indigo' },
];

export const SERVICE_DETAILS = {
  strategy: {
    id: "strategy",
    title: "Strategy & Value Engineering",
    tagline: "Blueprints That Compile.",
    description: "We don't deliver slide decks that gather dust. We deliver actionable technical roadmaps, ROI models, and architecture blueprints that bridge the gap between business intent and engineering reality.",
    iconName: "Target",
    image: "https://images.unsplash.com/photo-1553877615-30c73094e639?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      { title: "Digital Roadmap", desc: "3-year horizon planning aligning tech investments with business KPIs.", iconName: "MapPin" },
      { title: "ROI Modeling", desc: "Financial engineering to justify tech spend. We calculate the cost of doing nothing.", iconName: "BarChart3" },
      { title: "Tech Due Diligence", desc: "Deep-dive auditing of legacy stacks for M&A or modernization efforts.", iconName: "ShieldCheck" },
      { title: "Family Office Transformation", desc: "Modernizing wealth management with institutional-grade technology stacks.", iconName: "Landmark" }
    ],
    approach: "Our 'Value First' methodology ensures every line of code written has a direct line of sight to P&L impact. We start with the outcome, then work backward to the architecture."
  },
  data: {
    id: "data",
    title: "Data & AI Engineering",
    tagline: "From Lakes to Intelligence.",
    description: "Data is only as good as the decisions it drives. We build robust data fabrics, modern lakehouses, and pragmatic AI agents that move beyond the hype cycle into production utility.",
    iconName: "Database",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      { title: "Modern Data Stack", desc: "Snowflake/Databricks implementation. Moving from ETL to ELT streaming pipelines.", iconName: "Layers" },
      { title: "GenAI Agents", desc: "Custom LLMs and RAG architectures for internal knowledge retrieval and customer support.", iconName: "Sparkles" },
      { title: "Data Governance", desc: "Ensuring lineage, quality, and security compliance (GDPR/DPDP) at scale.", iconName: "ShieldCheck" },
      { title: "Predictive Analytics", desc: "Forecasting models for supply chain, churn, and risk management.", iconName: "BarChart3" }
    ],
    approach: "We believe in 'Data as a Product'. We treat your data datasets as APIs with defined SLAs, ensuring consumption is seamless for both humans and machines."
  },
  engineering: {
    id: "engineering",
    title: "Platform Engineering",
    tagline: "Hardcore Build.",
    description: "The core of what we do. Building scalable, resilient, cloud-native platforms. We specialize in complex distributed systems, microservices migration, and high-performance computing.",
    iconName: "Cpu",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      { title: "Cloud Native Build", desc: "Kubernetes, Serverless, and Microservices architectures on AWS/Azure/GCP.", iconName: "Zap" },
      { title: "Legacy Modernization", desc: "Strangler fig pattern migration to decompose monoliths without business disruption.", iconName: "Workflow" },
      { title: "DevSecOps", desc: "Automated CI/CD pipelines with integrated security scanning and compliance.", iconName: "ShieldCheck" },
      { title: "Quality Engineering", desc: "Shift-left testing automation and performance engineering for high scale.", iconName: "CheckCircle2" }
    ],
    approach: "Engineering excellence is non-negotiable. We implement strict code quality gates, observability from day one, and chaos engineering practices to ensure resilience."
  },
  growth: {
    id: "growth",
    title: "Growth & Ecosystems",
    tagline: "Scale on Demand.",
    description: "Accelerate your capacity to deliver. We provide white-labeled engineering squads and build-operate-transfer (BOT) models to set up your own Global Capability Centers (GCC).",
    iconName: "Rocket",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      { title: "Product Squads", desc: "Autonomous, cross-functional teams (PM + Eng + Design) that own a product vertical.", iconName: "Users" },
      { title: "GCC Build-Out", desc: "Setting up your offshore engineering center in India/Philippines. Legal, HR, and Real Estate included.", iconName: "Building2" },
      { title: "Platform-as-a-Service", desc: "Ecosystem partner professional services delivered as a managed platform.", iconName: "Network" },
      { title: "Staff Augmentation", desc: "High-end specialized talent injection for critical sprint goals.", iconName: "Users" }
    ],
    approach: "We don't just 'staff bodies'. We deploy culture. Our pods come with our engineering DNA, ensuring they integrate and elevate your existing teams."
  }
};

export const INDUSTRY_DETAILS = {
  finance: {
    id: "finance",
    title: "Financial Services",
    tagline: "Banking at the Speed of Code.",
    description: "The era of the bank branch is over. We build the digital infrastructure that powers neobanks, payment processors, and traditional lenders moving to the cloud.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=1600&q=80",
    challenges: [
      { title: "Legacy Core Banking", desc: "Monolithic mainframes that stifle innovation and slow down product launches." },
      { title: "Payment Friction", desc: "Slow settlement times and high transaction failure rates." }
    ],
    solutions: [
      { title: "Digital Core Layers", desc: "Hollow-the-core strategies using microservices to bypass legacy limitations." },
      { title: "Real-Time Rails", desc: "Implementing ISO 20022 compliant instant payment gateways." }
    ],
    outcome: "Agile financial institutions that ship features weekly, not quarterly."
  },
  manufacturing: {
    id: "manufacturing",
    title: "Manufacturing & Logistics",
    tagline: "Industry 4.0, Realized.",
    description: "Bridging the air gap between OT (Operational Technology) and IT. We bring the cloud to the shop floor.",
    iconName: "Factory",
    image: "https://images.unsplash.com/photo-1565514020176-dbf2238b97c3?auto=format&fit=crop&w=1600&q=80",
    challenges: [
      { title: "Data Silos", desc: "Machines generating terabytes of data that sits trapped in proprietary formats." },
      { title: "Supply Chain Blindspots", desc: "Lack of real-time visibility into inventory and logistics." }
    ],
    solutions: [
      { title: "Digital Twins", desc: "Virtual replicas of physical assets for predictive maintenance and simulation." },
      { title: "Smart Warehouse", desc: "IoT and Vision AI for automated inventory tracking and quality control." }
    ],
    outcome: "Predictive operations that reduce downtime and optimize throughput."
  },
  telecom: {
    id: "telecom",
    title: "Telecommunications",
    tagline: "The Cognitive Network.",
    description: "Telcos are becoming tech-cos. We help operators monetize 5G, automate network operations, and improve customer experience through AI.",
    iconName: "Network",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80",
    challenges: [
      { title: "Network Complexity", desc: "Managing millions of nodes and massive data throughput manually." },
      { title: "Dumb Pipes", desc: "Struggling to move up the value chain beyond basic connectivity." }
    ],
    solutions: [
      { title: "AIOps", desc: "Self-healing network infrastructure using machine learning anomaly detection." },
      { title: "Digital BSS", desc: "Modern business support systems for dynamic pricing and bundling." }
    ],
    outcome: "Zero-touch networks and new revenue streams from enterprise services."
  },
  retail: {
    id: "retail",
    title: "Retail & CPG",
    tagline: "Unified Commerce.",
    description: "Connecting the digital cart to the physical shelf. We build omnichannel platforms that recognize the customer wherever they are.",
    iconName: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80",
    challenges: [
      { title: "Fragmented Profiles", desc: "Customer data scattered across POS, E-comm, and Loyalty apps." },
      { title: "Demand Volatility", desc: "Inability to predict trends and manage stock effectively." }
    ],
    solutions: [
      { title: "Customer 360", desc: "Unified data platforms (CDP) for hyper-personalized marketing." },
      { title: "AI Forecasting", desc: "Demand planning models that adapt to micro-trends in real-time." }
    ],
    outcome: "Seamless shopping experiences and optimized inventory levels."
  },
  family: {
    id: "family",
    title: "Family Offices",
    tagline: "Institutional Grade Wealth Tech.",
    description: "Bringing hedge-fund level technology to private wealth. Security, consolidation, and real-time insights for multi-generational assets.",
    iconName: "Landmark",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    challenges: [
      { title: "Spreadsheet Hell", desc: "Managing billions in assets across disparate excel sheets and PDFs." },
      { title: "Security Risk", desc: "High-value targets using consumer-grade communication tools." }
    ],
    solutions: [
      { title: "Consolidated Dashboard", desc: "Single pane of glass for public markets, PE, real estate, and art." },
      { title: "Secure Data Vaults", desc: "Bank-grade infrastructure for document management and communication." }
    ],
    outcome: "Total visibility and peace of mind for principals and investment committees."
  },
  healthcare: {
    id: "healthcare",
    title: "Healthcare",
    tagline: "Connected Care.",
    description: "Unlocking patient data to improve outcomes. We build interoperable data platforms and AI diagnostic tools.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    challenges: [
      { title: "Interoperability", desc: "EMR systems that don't talk to each other." },
      { title: "Physician Burnout", desc: "Too much time spent on data entry and administrative tasks." }
    ],
    solutions: [
      { title: "Health Data Fabric", desc: "FHIR-based data layers for secure information exchange." },
      { title: "Clinical AI Copilots", desc: "Generative AI tools to assist with documentation and diagnostics." }
    ],
    outcome: "Better patient outcomes and more efficient care delivery."
  }
};

export const STORIES_DATA = {
  finance: {
    title: "Financial Services",
    tagline: "Digital Banking. Reimagined.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    sections: {
      depth: {
        title: "Flagship Solution",
        text: "We build digital banks from the ground up. Our Neo-Bank Platform is a cloud-native infrastructure for modern financial services. It handles multi-currency ledgers, payments orchestration, compliance automation, and customer channels—all architected for scale and speed.",
        subsections: [
          { title: "Core Banking", desc: "Multi-currency ledger, Real-time FX & treasury" },
          { title: "Payments", desc: "Orchestration layer, Card issuance & management" }
        ]
      },
      tech: {
        title: "Tech Stack & Compliance",
        text: "Built for speed and security. We support 150+ currencies and 99.99% platform uptime.",
        tags: ["Core Banking APIs", "Real-time Ledgers", "KYC/AML Engines", "Payment Rails"],
        extra: {
          title: "Compliance & Risk",
          items: ["Digital KYC/AML workflows", "Real-time fraud detection", "Regulatory reporting engine", "Audit trail & compliance logs"]
        }
      },
      ownership: {
        title: "The Project Timeline",
        text: "From zero to production in 12 months. A phased approach to ensure stability and rapid go-live.",
        timeline: [
          { phase: "Discovery", duration: "2 Months", desc: "Architecture & Design" },
          { phase: "Build", duration: "4 Months", desc: "Core Platform Development" },
          { phase: "Channels", duration: "3 Months", desc: "App & Web Development" },
          { phase: "Integration", duration: "2 Months", desc: "Testing & QA" },
          { phase: "Go-Live", duration: "1 Month", desc: "Stabilization & Launch" }
        ]
      },
      outcomes: {
        title: "Live Results",
        stats: [
          { val: "60%", label: "Faster Onboarding" },
          { val: "40%", label: "Cost Reduction" },
          { val: "99.99%", label: "Platform Uptime" }
        ]
      }
    }
  },
  manufacturing: {
    title: "Manufacturing",
    tagline: "Ghost in the Machine",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80", 
    sections: {
      depth: {
        title: "The Context",
        text: "Factories are loud, dirty, and surprisingly disconnected. Machines worth millions were 'dumb'—generating data that vanished into thin air. The shop floor manager was running a 24/7 operation on gut feeling and a clipboard."
      },
      tech: {
        title: "The Tech",
        text: "We wired the nervous system. IoT sensors on every vibration point, fed into a Digital Twin on Azure. We used Computer Vision to spot defects faster than the human eye, and Edge AI to make decisions without round-tripping to the cloud.",
        tags: ["Azure IoT", "TensorFlow", "Edge Computing", "5G"]
      },
      ownership: {
        title: "The Grind",
        text: "You can't code this from a coffee shop. We wore hard hats. We learned the difference between OEE and TEEP. We sat with operators to understand why they hated the old HMI, and built one they actually loved using."
      },
      outcomes: {
        title: "The Breakthru",
        stats: [
          { val: "40%", label: "Efficiency Gain" },
          { val: "Zero", label: "Unplanned Downtime" },
          { val: "100%", label: "Traceability" }
        ]
      }
    }
  },
  telecom: {
    title: "Telecom",
    tagline: "Signal vs. Noise",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80", 
    sections: {
      depth: {
        title: "The Context",
        text: "Tower downtime costs millions per minute. The old way? Wait for a customer to scream, then roll a truck. We needed to shift from 'Repair' to 'Predict'. The network needed to heal itself."
      },
      tech: {
        title: "The Tech",
        text: "We built TRAMS (Total Remote Asset Management System). An AI brain that ingests weather data, power fluctuations, and signal patterns. It predicts failures 48 hours in advance and dispatches drones for visual inspection.",
        tags: ["Python AI/ML", "Drone API", "LoRaWAN", "Big Data"]
      },
      ownership: {
        title: "The Grind",
        text: "We managed 40,000 assets virtually. Our team wasn't just IT support; we were the nerve center of national connectivity. We took ownership of the uptime metric as if it were our own heartbeat."
      },
      outcomes: {
        title: "The Breakthru",
        stats: [
          { val: "99.99%", label: "Network Uptime" },
          { val: "-30%", label: "Truck Rolls" },
          { val: "Real-time", label: "Visibility" }
        ]
      }
    }
  }
};