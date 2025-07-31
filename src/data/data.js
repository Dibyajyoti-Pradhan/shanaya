// src/data/data.js

export const navLinks = [
  { id: 1, name: "About", url: "#about" },
  { id: 2, name: "Skills", url: "#skills" },
  { id: 3, name: "Experience", url: "#experience" },
  { id: 4, name: "Projects", url: "#projects" },
  { id: 5, name: "Achievements", url: "#achievements" },
  { id: 6, name: "Education", url: "#education" },
  { id: 7, name: "Contact", url: "#contact" },
];

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://uk.linkedin.com/in/shanaya-lakhani-87bb6420a",
  },
  {
    id: 2,
    name: "Email",
    url: "mailto:ishanayalakhani.official@gmail.com",
  },
];

export const personalInfo = {
  name: "Shanaya Lakhani",
  shortName: "Shanaya",
  description: "Senior ESG & Investment Stewardship Analyst",
  about: [
    `I'm a Senior ESG & Investment Stewardship Analyst based in Central London, UK, with extensive experience in ESG research, investment stewardship, and sustainable finance. I've worked with leading financial institutions like <a href="https://www.squarewell-partners.com/" target="_blank" rel="noopener noreferrer">SquareWell Partners</a>, <a href="https://www.dws.com/" target="_blank" rel="noopener noreferrer">DWS (Deutsche Bank Group)</a>, and <a href="https://www.sustainalytics.com/" target="_blank" rel="noopener noreferrer">Sustainalytics</a>, building robust ESG frameworks and driving sustainable investment strategies.`,
    `My expertise spans ESG diagnostics, governance analysis, proxy voting, shareholder engagement, and regulatory compliance aligned with SFDR, CSRD, TCFD, and UN SDGs frameworks. I specialize in financial modeling, data analytics, and stakeholder engagement across global markets.`,
    `Currently pursuing my MSc in Accounting, Accountability & Financial Management at King's College London, I'm passionate about advancing sustainable finance and responsible investment practices.`,
  ],
  currentCompany: {
    name: "SquareWell Partners",
    url: "https://www.squarewell-partners.com/",
  },
  contact: {
    heading: "Get In Touch",
    message: `
      Whether you have a question about ESG investment strategies or want to discuss sustainable finance opportunities, feel free to reach out!
    `,
    email: "ishanayalakhani.official@gmail.com",
  },
};

export const skills = [
  {
    category: "Financial Modeling & Analytics",
    items: [
      "DCF Modeling",
      "LBO Analysis",
      "Valuation",
      "Scenario Analysis",
      "Excel (VBA, Macros, Power Query)",
      "Tableau",
      "Power BI",
      "Stata",
    ],
  },
  {
    category: "ESG & Investment Stewardship",
    items: [
      "ESG Risk Assessment",
      "Proxy Voting",
      "Shareholder Engagement",
      "Governance Analysis",
      "SFDR Compliance",
      "CSRD Implementation",
      "TCFD Reporting",
      "UN SDGs Alignment",
    ],
  },
  {
    category: "Financial Tools & Platforms",
    items: [
      "ISS Proxy Voting",
      "Glass Lewis",
      "Bloomberg Terminal",
      "S&P Capital IQ",
      "Morningstar Direct",
      "Aladdin",
      "Thomson Reuters",
    ],
  },
  {
    category: "Regulatory Frameworks",
    items: [
      "EU Taxonomy",
      "Principal Adverse Indicators (PAIs)",
      "UK Stewardship Code",
      "PRI Active Ownership",
      "ESG Disclosure Standards",
    ],
  },
  {
    category: "Data Analysis & Automation",
    items: [
      "Workflow Automation",
      "Dashboard Development",
      "Data Quality Management",
      "Research Methodologies",
      "Quality Audit Protocols",
    ],
  },
  {
    category: "Communication & Leadership",
    items: [
      "Stakeholder Management",
      "Cross-functional Collaboration",
      "Senior Audience Presentations",
      "Team Mentoring",
      "Strategic Planning",
      "Problem-solving",
      "Adaptability",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    position: "Senior Analyst, SquareWell & AQTION Team",
    company: "SquareWell Partners",
    location: "London",
    url: "https://www.squarewell-partners.com/",
    date: "01/2025 - Present",
    responsibilities: [
      "Delivered ESG and governance diagnostics for public issuers, analyzing board effectiveness, disclosure quality, and material risks aligned with SFDR, CSRD, and TCFD frameworks.",
      "Advised investor relations teams and institutional investors on ESG stewardship strategies, shareholder engagement planning & tracking, board candidate sourcing, and navigating governance rights.",
      "Monitored evolving regulations (TCFD, SFDR, CSRD) & proxy voting trends to inform client strategies & strengthen stewardship-related positioning and planning.",
      "Conducted competitor benchmarking and continuous platform testing (AQTION & SquareWell) to enhance ESG datasets, dashboards, and research tools used in investor decision-making.",
      "Mentored junior analysts & contributed to thematic content, regulatory updates, and stewardship benchmarking insights for client distribution and digital thought leadership.",
    ],
    techStack: [
      "ESG Diagnostics",
      "Governance Analysis",
      "SFDR Compliance",
      "CSRD Implementation",
      "TCFD Reporting",
      "Proxy Voting",
      "Shareholder Engagement",
      "Data Analytics",
      "Stakeholder Management",
    ],
  },
  {
    id: 2,
    position:
      "Responsible Investment Analyst, Global Corporate Governance Centre",
    company: "DWS, Deutsche Bank Group",
    location: "",
    url: "https://www.dws.com/",
    date: "06/2022 - 08/2023",
    responsibilities: [
      "Boosted proxy voting Equity AuM coverage from 92% to 95% by streamlining workflows & reducing manual inputs by 60% through advanced Excel modeling, supporting the Global Head of Investment Stewardship in creating the annual proxy focus list.",
      "Conducted in-depth ESG risk and governance assessments for portfolio companies across the US and EU, identifying material gaps and recommending areas for improvement to inform engagement priorities and facilitate constructive dialogue with company boards and management.",
      "Led stewardship activities for 350+ US and EU companies, managing proxy voting, governance engagements, ESG research, and fiduciary responsibilities under ISS, PRI, and DWS frameworks.",
      "Managed stewardship deliverables such as RFPs, DDQs, client reports, AGM preparations, & key submissions for the UK Stewardship and PRI Active Ownership reports.",
    ],
    techStack: [
      "Excel Modeling",
      "ESG Risk Assessment",
      "Proxy Voting",
      "Governance Analysis",
      "ISS Framework",
      "PRI Framework",
      "UK Stewardship Code",
      "Stakeholder Engagement",
      "Client Reporting",
    ],
  },
  {
    id: 3,
    position: "ESG Research Associate, Indicator Research Team",
    company: "Sustainalytics, Morningstar Pvt. Ltd.",
    location: "",
    url: "https://www.sustainalytics.com/",
    date: "04/2021 - 06/2022",
    responsibilities: [
      "Conducted ESG risk and impact assessments for 1,000+ global publicly listed companies, evaluating alignment with EU Taxonomy, UN SDGs, Principal Adverse Indicators (PAIs), and TCFD frameworks.",
      "Analyzed sector-specific sustainability risks and controversies to determine material ESG issues (MEIs), informing company-level risk ratings used by institutional investors for equity research and portfolio construction.",
      "Collaborated with global research teams to enhance data quality and methodology consistency across sectors and regions, supporting the delivery of robust, investment-relevant ESG insights.",
      "Mentored 15+ new hires, driving reporting accuracy from 80% to 95% within a month through hands-on guidance on software tools, research methods, and quality audit protocols.",
    ],
    techStack: [
      "ESG Risk Assessment",
      "EU Taxonomy",
      "UN SDGs",
      "Principal Adverse Indicators",
      "TCFD Framework",
      "Material ESG Issues",
      "Data Quality Management",
      "Research Methodologies",
      "Team Mentoring",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "ESG Stewardship Framework Development",
    description:
      "Developed comprehensive ESG stewardship frameworks for institutional investors, incorporating proxy voting guidelines, engagement strategies, and reporting standards aligned with PRI and UK Stewardship Code requirements.",
    techStack: [
      "ESG Frameworks",
      "Proxy Voting",
      "PRI Guidelines",
      "UK Stewardship Code",
      "Stakeholder Engagement",
      "Reporting Standards",
    ],
    url: "#",
    external: "#",
    stars: 0,
  },
  {
    id: 2,
    title: "ESG Risk Assessment Model",
    description:
      "Created advanced ESG risk assessment models for portfolio companies, incorporating material ESG issues, sector-specific risks, and regulatory compliance factors to inform investment decisions.",
    techStack: [
      "ESG Risk Modeling",
      "Material ESG Issues",
      "Sector Analysis",
      "Regulatory Compliance",
      "Data Analytics",
    ],
    url: "#",
    external: "#",
    stars: 0,
  },
  {
    id: 3,
    title: "Sustainable Finance Dashboard",
    description:
      "Designed and implemented comprehensive ESG dashboards for institutional clients, providing real-time insights into portfolio sustainability metrics, regulatory compliance, and stewardship activities.",
    techStack: [
      "Dashboard Development",
      "ESG Metrics",
      "Regulatory Compliance",
      "Data Visualization",
      "Real-time Analytics",
    ],
    url: "#",
    external: "#",
    stars: 0,
  },
  {
    id: 4,
    title: "Proxy Voting Automation System",
    description:
      "Streamlined proxy voting workflows and automated manual processes, resulting in 60% reduction in manual inputs and improved coverage from 92% to 95% for equity assets under management.",
    techStack: [
      "Workflow Automation",
      "Excel Modeling",
      "Proxy Voting",
      "Process Optimization",
      "Data Management",
    ],
    url: "#",
    external: "#",
    stars: 0,
  },
  {
    id: 5,
    title: "ESG Research Quality Enhancement",
    description:
      "Led initiatives to improve ESG research quality and methodology consistency across global teams, resulting in 95% reporting accuracy and enhanced investment-relevant insights.",
    techStack: [
      "Research Methodologies",
      "Quality Management",
      "Data Consistency",
      "Team Collaboration",
      "Process Improvement",
    ],
    url: "#",
    external: "#",
    stars: 0,
  },
];

export const achievements = [
  {
    id: 1,
    title: "Post Graduate Finance Trading Programme Excellence",
    description:
      "Achieved an overall top score of 98.50% in King's Business School's advanced trading program, mastering portfolio risk management, derivatives, and equities trading.",
  },
  {
    id: 2,
    title: "Common Purpose Global Leader Experience",
    description:
      "Selected as one of 30 students across King's Business School for a 5-day leadership program, developing strategic ESG initiatives for SSE Plc and collaborating with senior leaders to drive sales growth.",
  },
  {
    id: 3,
    title: "ESG Coverage Expansion",
    description:
      "Successfully boosted proxy voting Equity AuM coverage from 92% to 95% at DWS through workflow optimization and advanced Excel modeling, supporting the Global Head of Investment Stewardship.",
  },
  {
    id: 4,
    title: "Research Quality Improvement",
    description:
      "Led mentoring initiatives that improved reporting accuracy from 80% to 95% within a month at Sustainalytics, guiding 15+ new hires on research methodologies and quality protocols.",
  },
];

export const education = [
  {
    id: 1,
    school: "King's College London",
    url: "https://www.kcl.ac.uk/",
    degree: "MSc Accounting, Accountability & Financial Management",
    duration: "09/2023 - 09/2024",
    location: "London, United Kingdom",
    major:
      "Advanced Corporate Finance, Mergers & Acquisitions, Credit Risk Analysis, Financial Reporting & Analysis",
    details: [
      "Post Graduate Finance Trading Programme (FTP)",
      "Common Purpose Global Leader Experience",
    ],
  },
  {
    id: 2,
    school: "Jai Hind College",
    url: "#",
    degree: "Bachelor of Management Studies (BMS)",
    duration: "06/2017 - 09/2020",
    location: "Mumbai, India",
    major: "Finance",
    details: ["Majoring in Finance"],
  },
  {
    id: 3,
    school: "CFA Institute United Kingdom",
    url: "https://www.cfainstitute.org/",
    degree: "CFA ESG Investing Certificate Program",
    duration: "06/2025 - Present",
    location: "United Kingdom",
    major: "ESG Investing",
    details: ["Candidate"],
  },
];

export const contactInfo = {
  heading: "Get In Touch",
  message: `
    Whether you have a question about ESG investment strategies or want to discuss sustainable finance opportunities, feel free to reach out!
  `,
  email: "ishanayalakhani.official@gmail.com",
};
