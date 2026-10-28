export const personalInfo = {
  name: "Kamaldeep Kaur",
  role: "MBA – Business Analytics | Aspiring HR Analyst / HR Analytics",
  tagline: "Bridging human potential and strategic decision-making with modern data analytics, Power BI, Python, and operational insight.",
  location: "Bathinda, India",
  phone: "+91 6284315356",
  email: "kamalwander07@gmail.com",
  linkedin: "https://www.linkedin.com/in/kamaldeep-kaur-analytics",
  github: "https://github.com/kamaldeep-analytics",
  availability: "Actively seeking HR Analyst & Business Intelligence Opportunities",
  avatar: "/kamaldeep_avatar.jpg",
  metrics: [
    { value: "MBA & BCA", label: "Analytics Degrees", sublabel: "Akal University" },
    { value: "3+", label: "Industry & Academic Roles", sublabel: "Operations & Coordination" },
    { value: "5+", label: "Verified Certifications", sublabel: "AWS, Meta, J.P. Morgan, Deloitte" },
    { value: "100%", label: "Data Storytelling", sublabel: "DAX, Python, SQL & Power BI" }
  ]
};

export const executiveSummary = {
  headline: "Data-Driven Insight for Human Capital & Business Operations",
  bio: "MBA Business Analytics student with a solid BCA foundation in Data Analytics and verified hands-on experience in logistics operations, process coordination, and relational data management. Skilled in Python data handling, Power BI interactive modeling, DAX metrics, SQL databases, and advanced Excel. Passionate about applying workforce intelligence to reduce attrition, optimize talent acquisition, and elevate organizational performance.",
  pillars: [
    {
      title: "Workforce & HR Intelligence",
      description: "Analyzing employee turnover drivers, cohort retention trends, performance distributions, and recruitment funnel bottlenecks.",
      icon: "Users"
    },
    {
      title: "Interactive Dashboards & BI",
      description: "Crafting multi-page Power BI reports, DAX calculated measures, star-schema data models, and executive KPI summaries.",
      icon: "BarChart3"
    },
    {
      title: "Quantitative Modeling & Python",
      description: "Transforming raw transaction and HR datasets into actionable insights using Pandas, NumPy, statistical aggregation, and heatmaps.",
      icon: "Binary"
    },
    {
      title: "Operations & Workflow Optimization",
      description: "Practical background in international shipping logistics, documentation compliance (VGM/BL), and university admissions analytics.",
      icon: "Workflow"
    }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Capabilities" },
    { id: "analytics", name: "BI & Data Visualization" },
    { id: "technical", name: "Programming & Databases" },
    { id: "domain", name: "HR & Business Analytics" },
    { id: "operations", name: "Process & Communication" }
  ],
  skills: [
    {
      name: "Power BI & DAX",
      category: "analytics",
      level: 92,
      proficiency: "Advanced",
      highlight: "Star Schema modeling, DAX measures, KPI cards & interactive drill-throughs",
      badge: "Core Expertise"
    },
    {
      name: "Python (Data Analysis)",
      category: "technical",
      level: 88,
      proficiency: "Proficient",
      highlight: "Pandas, NumPy, Matplotlib, Seaborn, exploratory data analysis & sales forecasting",
      badge: "Core Stack"
    },
    {
      name: "Microsoft Excel & Sheets",
      category: "analytics",
      level: 95,
      proficiency: "Expert",
      highlight: "Pivot tables, VLOOKUP/XLOOKUP, Power Query, scenario managers & dashboard modeling",
      badge: "Core Tool"
    },
    {
      name: "SQL & Relational DBMS",
      category: "technical",
      level: 86,
      proficiency: "Proficient",
      highlight: "Relational schema design, multi-table joins, subqueries, aggregation & indexing",
      badge: "Database"
    },
    {
      name: "Tableau",
      category: "analytics",
      level: 82,
      proficiency: "Intermediate",
      highlight: "Storyboards, custom calculated fields, dynamic filters & dual-axis charts",
      badge: "Visualization"
    },
    {
      name: "HR Analytics & Workforce Metrics",
      category: "domain",
      level: 90,
      proficiency: "Specialist",
      highlight: "Attrition modeling, headcount forecasting, performance vs. tenure, eNPS tracking",
      badge: "Target Domain"
    },
    {
      name: "Data Visualization & Storytelling",
      category: "analytics",
      level: 94,
      proficiency: "Advanced",
      highlight: "Executive reporting, color psychology in charts, clear takeaway annotations",
      badge: "Design Skill"
    },
    {
      name: "Data Handling & Cleansing",
      category: "technical",
      level: 90,
      proficiency: "Advanced",
      highlight: "Data normalization, missing value imputation, schema validation & ETL workflows",
      badge: "Data Prep"
    },
    {
      name: "Operations & Process Coordination",
      category: "operations",
      level: 92,
      proficiency: "Experienced",
      highlight: "Logistics workflows, VGM, Bill of Lading, transportation schedules & coordination",
      badge: "Real-world Ops"
    },
    {
      name: "Stakeholder Presentation & Communication",
      category: "operations",
      level: 91,
      proficiency: "Advanced",
      highlight: "Communicating technical analytical findings to cross-functional leaders and teams",
      badge: "Soft Skill"
    },
    {
      name: "Teamwork & Time Management",
      category: "operations",
      level: 95,
      proficiency: "Mastered",
      highlight: "Cross-departmental collaboration, sprint execution, and committee leadership",
      badge: "Leadership"
    }
  ]
};

export const projectsData = [
  {
    id: "power-bi-hr-dashboard",
    title: "Executive HR Analytics & Workforce Insights Dashboard",
    category: "Business Intelligence",
    tag: "Power BI • DAX • HR Analytics",
    image: "/powerbi_preview.jpg",
    summary: "Interactive corporate dashboard tracking 12,450+ headcount, voluntary/involuntary attrition, performance ratings, and tenure metrics across global regions.",
    impact: "Provides leadership with real-time visibility into an 8.9% turnover rate, department attrition hot-spots, and tenure-to-performance correlation.",
    tools: ["Power BI", "DAX", "Data Modeling", "Excel Power Query", "HR Metrics"],
    highlights: [
      "Dynamic breakdown across Sales, Tech, Operations, and HR departments",
      "Calculated DAX measures for YoY turnover trends and target thresholds",
      "Interactive multi-dimensional slicers for Department, Location, and Tenancy",
      "Scatter plot correlation analysis between tenure and employee performance scores"
    ],
    liveSimulationAvailable: true
  },
  {
    id: "python-sales-analytics",
    title: "E-Commerce Sales & Cohort Intelligence Engine",
    category: "Python Analytics",
    tag: "Python • Pandas • Seaborn • EDA",
    image: "/python_sales.jpg",
    summary: "Comprehensive Python-based analytical pipeline processing transaction logs to discover monthly revenue trends, customer cohort retention heatmaps, and product profitability.",
    impact: "Identified high-performing electronics and fashion categories (63%+ of total sales) and mapped cohort retention curves over a 12-month lifecycle.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    highlights: [
      "Built automated cohort retention matrix calculating month-by-month repeat rates",
      "Visualized monthly revenue spikes up to $145K with smoothed trendlines",
      "Calculated Average Order Value (AOV) and customer acquisition velocity",
      "Automated outlier detection and categorical profit margin breakdown"
    ],
    liveSimulationAvailable: false
  },
  {
    id: "ecommerce-dbms-portal",
    title: "Relational E-Commerce Database Management System",
    category: "Database Systems",
    tag: "SQL • DBMS • Relational Schema • ACID",
    image: "/ecommerce_dbms.jpg",
    summary: "Architected a fully normalized relational database schema supporting product inventory, customer accounts, multi-item orders, and transaction processing.",
    impact: "Ensured 3NF normalization, optimized query execution plans for order lookups, and built an intuitive administrative catalog interface.",
    tools: ["SQL", "Relational Database Design", "Schema Normalization", "DBMS", "UI Integration"],
    highlights: [
      "Entity-Relationship (ER) model linking Products, Orders, Customers, and Inventory",
      "ACID-compliant transaction handling for cart checkout and stock deductions",
      "Optimized SQL indexing strategies for fast product searches and filtering",
      "Admin dashboard integration with live inventory status triggers and alerts"
    ],
    liveSimulationAvailable: false
  }
];

export const experienceData = [
  {
    role: "Operations Intern",
    company: "Eagle Trans Shipping & Logistics India Pvt. Ltd.",
    location: "Pune, India",
    period: "June 2026 – July 2026",
    status: "Upcoming / Scheduled Role",
    badge: "International Logistics",
    responsibilities: [
      "Supported day-to-day shipping and logistics operations for the dedicated Europe team.",
      "Coordinated seamlessly between global customers, commercial shipping lines, and internal dispatch teams.",
      "Managed critical shipping documentation including Verified Gross Mass (VGM), Shipping Instructions (SI), and Bill of Lading (BL) processing.",
      "Analyzed operational transit workflows and identified actionable process improvement opportunities to minimize delays."
    ],
    skillsLearned: ["Logistics Operations", "VGM & BL Documentation", "Workflow Optimization", "Vendor Relations"]
  },
  {
    role: "Transport Assistant",
    company: "Kätebaa Rural Services and Foundation",
    location: "Punjab, India",
    period: "01/2023 – 11/2024",
    status: "1 Year 11 Months",
    badge: "Fleet & Resource Management",
    responsibilities: [
      "Assisted in managing and maintaining rigorous transportation schedules, logbooks, and fleet documentation.",
      "Supervised and coordinated daily routing to guarantee 98%+ on-time logistics and rural community service delivery.",
      "Liaised with field teams and maintenance units to proactively resolve transit bottlenecks and optimize fuel allocation."
    ],
    skillsLearned: ["Schedule Optimization", "Operations Documentation", "Cross-team Coordination", "Resource Planning"]
  },
  {
    role: "Admission Cell Assistant",
    company: "Akal University",
    location: "Talwandi Sabo, Bathinda",
    period: "01/2025 – 07/2025",
    status: "University Administration",
    badge: "Student Data Management",
    responsibilities: [
      "Engaged prospective undergraduate and postgraduate candidates via telephonic, email, and high-touch in-person counseling sessions.",
      "Helped coordinate university-wide admission drives, open-house activities, and orientation procedures.",
      "Maintained, validated, and updated centralized student admission databases, ensuring clean data for executive enrollment reporting."
    ],
    skillsLearned: ["Data Handling & Verification", "Student Counseling", "Stakeholder Communication", "Database Auditing"]
  }
];

export const educationData = [
  {
    degree: "MBA – Business Analytics",
    institution: "Akal University",
    period: "08/2025 – Present",
    status: "In Progress",
    description: "Advanced curriculum focused on predictive business analytics, workforce intelligence, strategic management, enterprise decision science, and data visualization.",
    focusAreas: ["HR Analytics", "Predictive Modeling", "Business Intelligence", "Managerial Economics", "Operations Research"]
  },
  {
    degree: "BCA (Hons.) – Data Analytics",
    institution: "Akal University",
    period: "08/2021 – 07/2024",
    status: "Graduated with Honors",
    description: "Comprehensive foundational degree spanning data structures, database management systems (DBMS), Python programming, statistical data analysis, and software engineering.",
    focusAreas: ["Relational Databases & SQL", "Python & Data Science", "Exploratory Data Analysis", "Object-Oriented Programming"]
  }
];

export const certificationsData = [
  {
    title: "AWS Academy – Introduction to Cloud Semester 1",
    issuer: "AWS Academy / Amazon Web Services",
    badge: "Cloud Foundation",
    icon: "Cloud",
    highlight: "Core cloud architecture, compute, storage, security, and networking concepts."
  },
  {
    title: "AWS Academy – Introduction to Cloud Semester 2",
    issuer: "AWS Academy / Amazon Web Services",
    badge: "Cloud Solutions",
    icon: "CloudCheck",
    highlight: "Cloud resource orchestration, databases, scalability, and cost optimization."
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "Meta",
    badge: "Data Science",
    icon: "Meta",
    highlight: "End-to-end analytics workflow, data integrity, exploratory analysis, and storytelling."
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "J.P. Morgan (Forage)",
    badge: "Quantitative Finance",
    icon: "TrendingUp",
    highlight: "Financial data modeling, price analysis, statistical evaluation, and risk insights."
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    badge: "Consulting Analytics",
    icon: "Briefcase",
    highlight: "Business problem structuring, data cleansing, dashboard generation, and client presentation."
  }
];

export const leadershipData = {
  committee: {
    title: "Anti-Ragging Committee Member",
    organization: "Akal University, Talwandi Sabo",
    period: "08/2025 – Present",
    description: "Appointed to uphold campus safety, foster inclusive student environments, evaluate grievances with impartiality, and ensure compliance with university guidelines."
  },
  interests: [
    { name: "Reading", description: "Business leadership books, behavioral economics, and data science literature." },
    { name: "Photography", description: "Street, architectural, and visual composition that sharpens attention to aesthetic detail." },
    { name: "Continuous Learning", description: "Exploring the latest advances in HR tech, generative BI, and people analytics trends." }
  ]
};

// Interactive HR Analytics Simulator Presets
export const hrSimulatorPresets = {
  departments: [
    { id: "all", name: "Company-Wide (Global)" },
    { id: "tech", name: "Technology & Engineering" },
    { id: "sales", name: "Sales & Client Growth" },
    { id: "ops", name: "Operations & Logistics" },
    { id: "hr", name: "Human Resources & Talent" }
  ],
  scenarios: [
    { id: "baseline", name: "Current Baseline", desc: "Realistic enterprise workforce data" },
    { id: "retention", name: "Retention Drive", desc: "Targeted stay-interviews & compensation parity" },
    { id: "hiring", name: "Aggressive Expansion", desc: "Rapid headcount scaling & onboarding" },
    { id: "hybrid", name: "Flexible Work Model", desc: "Remote engagement & wellness initiatives" }
  ],
  metricsByDeptAndScenario: {
    "all-baseline": {
      headcount: 12450,
      turnoverRate: 8.9,
      avgTenure: 4.8,
      eNPS: 42,
      timeToHire: 34,
      retentionRisk: "Moderate (8.9%)",
      topAttritionFactor: "Career Progression Gaps",
      deptBreakdown: [
        { label: "Technology", pct: 32, color: "#06b6d4" },
        { label: "Sales", pct: 25, color: "#10b981" },
        { label: "Operations", pct: 18, color: "#8b5cf6" },
        { label: "HR & People", pct: 10, color: "#f59e0b" },
        { label: "Others", pct: 15, color: "#64748b" }
      ],
      insight: "Overall turnover is healthy at 8.9% (below 10.2% benchmark). Strategic focus should be on middle-management retention in Tech & Sales."
    },
    "all-retention": {
      headcount: 12580,
      turnoverRate: 6.2,
      avgTenure: 5.4,
      eNPS: 58,
      timeToHire: 32,
      retentionRisk: "Low (6.2%)",
      topAttritionFactor: "Market Wage Differential",
      deptBreakdown: [
        { label: "Technology", pct: 33, color: "#06b6d4" },
        { label: "Sales", pct: 25, color: "#10b981" },
        { label: "Operations", pct: 18, color: "#8b5cf6" },
        { label: "HR & People", pct: 10, color: "#f59e0b" },
        { label: "Others", pct: 14, color: "#64748b" }
      ],
      insight: "Retention initiatives reduced annual attrition cost by an estimated $1.2M. eNPS surged by +16 points following transparent promotion roadmaps."
    },
    "all-hiring": {
      headcount: 13900,
      turnoverRate: 9.8,
      avgTenure: 4.2,
      eNPS: 46,
      timeToHire: 26,
      retentionRisk: "Moderate (9.8%)",
      topAttritionFactor: "Onboarding Velocity Friction",
      deptBreakdown: [
        { label: "Technology", pct: 35, color: "#06b6d4" },
        { label: "Sales", pct: 27, color: "#10b981" },
        { label: "Operations", pct: 16, color: "#8b5cf6" },
        { label: "HR & People", pct: 9, color: "#f59e0b" },
        { label: "Others", pct: 13, color: "#64748b" }
      ],
      insight: "Headcount expanded by +11.6%. Time-to-hire decreased by 8 days via automated candidate screening pipelines."
    },
    "all-hybrid": {
      headcount: 12620,
      turnoverRate: 7.1,
      avgTenure: 5.1,
      eNPS: 64,
      timeToHire: 29,
      retentionRisk: "Low (7.1%)",
      topAttritionFactor: "Work-Life Boundaries",
      deptBreakdown: [
        { label: "Technology", pct: 32, color: "#06b6d4" },
        { label: "Sales", pct: 25, color: "#10b981" },
        { label: "Operations", pct: 18, color: "#8b5cf6" },
        { label: "HR & People", pct: 11, color: "#f59e0b" },
        { label: "Others", pct: 14, color: "#64748b" }
      ],
      insight: "Hybrid flexibility delivered the highest employee satisfaction (eNPS 64) and expanded talent sourcing radius nationwide."
    },
    "tech-baseline": {
      headcount: 3984,
      turnoverRate: 10.3,
      avgTenure: 3.9,
      eNPS: 48,
      timeToHire: 42,
      retentionRisk: "Watchlist (10.3%)",
      topAttritionFactor: "Tech Stack Modernization & Remote Options",
      deptBreakdown: [
        { label: "Frontend/UI", pct: 28, color: "#06b6d4" },
        { label: "Backend/Cloud", pct: 34, color: "#3b82f6" },
        { label: "Data & AI", pct: 24, color: "#10b981" },
        { label: "DevOps/QA", pct: 14, color: "#8b5cf6" }
      ],
      insight: "High demand for specialized data & cloud engineers drives turnover to 10.3%. Mentorship and technical track ladders will curb exits."
    },
    "sales-baseline": {
      headcount: 3112,
      turnoverRate: 12.5,
      avgTenure: 3.2,
      eNPS: 38,
      timeToHire: 28,
      retentionRisk: "High Alert (12.5%)",
      topAttritionFactor: "Quota Attainment & Incentive Structure",
      deptBreakdown: [
        { label: "Enterprise", pct: 40, color: "#10b981" },
        { label: "SMB/Inside", pct: 35, color: "#06b6d4" },
        { label: "RevOps", pct: 15, color: "#f59e0b" },
        { label: "Solutions", pct: 10, color: "#8b5cf6" }
      ],
      insight: "Sales turnover peaks at 12.5%. Restructuring tiered commission accelerator schedules can improve retention by up to 22%."
    },
    "ops-baseline": {
      headcount: 2241,
      turnoverRate: 8.1,
      avgTenure: 5.6,
      eNPS: 44,
      timeToHire: 31,
      retentionRisk: "Stable (8.1%)",
      topAttritionFactor: "Shift Rigidity & Manual Workflows",
      deptBreakdown: [
        { label: "Logistics", pct: 45, color: "#8b5cf6" },
        { label: "Supply Chain", pct: 30, color: "#06b6d4" },
        { label: "Compliance", pct: 15, color: "#10b981" },
        { label: "Dispatch", pct: 10, color: "#f59e0b" }
      ],
      insight: "Operations demonstrates the highest institutional memory with 5.6 years average tenure. Digital workflow tools can boost productivity."
    },
    "hr-baseline": {
      headcount: 1245,
      turnoverRate: 4.9,
      avgTenure: 6.2,
      eNPS: 70,
      timeToHire: 35,
      retentionRisk: "Very Low (4.9%)",
      topAttritionFactor: "Bandwidth & Administrative Burden",
      deptBreakdown: [
        { label: "People Analytics", pct: 25, color: "#06b6d4" },
        { label: "Talent Acquisition", pct: 35, color: "#10b981" },
        { label: "L&D", pct: 20, color: "#f59e0b" },
        { label: "Operations/Payroll", pct: 20, color: "#8b5cf6" }
      ],
      insight: "HR cohort shows best-in-class stability (4.9% turnover) and stellar culture scores. Ready to champion predictive analytics initiatives."
    }
  }
};
