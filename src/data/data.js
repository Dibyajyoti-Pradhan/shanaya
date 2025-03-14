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
  { id: 1, name: "GitHub", url: "https://github.com/Dibyajyoti-Pradhan" },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/shaky_coder/",
  },
  {
    id: 4,
    name: "LeetCode",
    url: "https://leetcode.com/u/dibyojyotipradhan/",
  },
];

export const personalInfo = {
  name: "Dibyajyoti Pradhan",
  shortName: "Dibyajyoti",
  description: "Senior Software Engineer",
  about: [
    `I'm a Senior Software Engineer, based in London, with a background in developing innovative and scalable software solutions. I've worked with leading companies like <a href="https://en.wikipedia.org/wiki/HubSpot" target="_blank" rel="noopener noreferrer">HubSpot</a>, <a href="https://en.wikipedia.org/wiki/Meta_Platforms" target="_blank" rel="noopener noreferrer">Meta</a>, and <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener noreferrer">Amazon</a>, building robust systems that improve user experiences and drive business growth. Currently, I’m focusing on products at HubSpot, leading engineering teams and optimizing system performance. My expertise includes full-stack development, system architecture, and mentoring.`,
    `I have experience in various domains, including <strong>Payments</strong>, <strong>Advertisement</strong>, and <strong>Platform</strong> domains.`,
    `Outside of work, I love to travel, play chess, run in marathons, and work out to stay fit and active.`,
  ],
  currentCompany: {
    name: "HubSpot",
    url: "https://en.wikipedia.org/wiki/HubSpot",
  },
  contact: {
    heading: "Get In Touch",
    message: `
      Whether you have a question or just want to say hi, feel free to drop a message!
    `,
    email: "dibyojyotipradhan@gmail.com",
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "React Native", "Spring MVC", "Google Guice"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Kubernetes", "Kafka", "AWS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "DynamoDB", "Vitess DB"],
  },
  {
    category: "Other",
    items: [
      "RESTful APIs",
      "Backend Development",
      "Microservices",
      "Agile",
      "System Design",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Design Patterns",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    position: "Senior Software Engineer",
    company: "HubSpot",
    location: "London",
    url: "https://en.wikipedia.org/wiki/HubSpot",
    date: "07/2024 - Present",
    responsibilities: [
      "Spearheaded the design and implementation of Account Insights, enabling real-time recommendations, optimizing return on investment, and increasing user retention by 10%.",
      "Led a team of 4 engineers and provided mentorship to junior developers, driving team development and ensuring successful project delivery.",
    ],
    techStack: [
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "React",
      "Google Guice",
      "HTML",
      "CSS",
      "GraphQL",
      "Kafka",
      "AWS",
      "Kubernetes",
      "Vitess DB",
      "MySQL",
      "HBase",
      "Backend",
      "Frontend",
    ],
  },
  {
    id: 2,
    position: "Software Engineer II",
    company: "Meta",
    location: "London",
    url: "https://en.wikipedia.org/wiki/Meta_Platforms",
    date: "04/2022 - 05/2024",
    responsibilities: [
      "Led development of mid-flight recommendation flows, like Placements and Campaign Budget, within the Ads Manager App (AMA), resulting in a notable 0.04% increase in Meta’s top-line revenue weighted adoptions and over 12,000 weekly resolutions.",
      "Achieved a 20% improvement in screen load times for 8 highly trafficked interfaces in AMA through efficient pre-fetching of relay queries, enhancing user experience.",
      "Revamped the duplication flow in AMA to align with ODAX objectives, resulting in a significant 14% increase in revenue and an 18% growth in ad duplications.",
      "Collaborated on implementing measurable enhancements, leading to improved performance metrics and increased user engagement within AMA.",
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "Hack",
      "SQL",
      "React Native",
      "GraphQL (Relay)",
      "A/B Testing (Experimentation)",
      "TAO",
      "Scuba",
      "Presto",
      "Frontend",
    ],
  },
  {
    id: 3,
    position: "Software Development Engineer II",
    company: "Amazon",
    location: "Hyderabad",
    url: "https://en.wikipedia.org/wiki/Amazon_(company)",
    date: "10/2021 - 02/2022",
    responsibilities: [
      "Expanded user base of Amazon Pay for Business app by 5 million downloads and achieved a 4.3-star rating from launch. Improved app performance metrics by optimizing latency, enhancing user experience, and resolving operational inefficiencies.",
      "Engineered an innovative ‘Offline Architecture’ for the app, eliminating perceived latency and improving user experience.",
      "Streamlined crawler latency in Daily MIS Settlement Report, reducing processing time from 3 hours to 10 minutes, resolving delays for 70+ online and organized merchants.",
    ],
    techStack: [
      "Java",
      "JavaScript",
      "Python",
      "MySQL",
      "AWS",
      "React Native",
      "Spring MVC",
      "DynamoDB",
      "Frontend",
      "Backend",
    ],
  },
  {
    id: 4,
    position: "Software Development Engineer I",
    company: "Amazon",
    location: "Hyderabad",
    url: "https://en.wikipedia.org/wiki/Amazon_(company)",
    date: "07/2019 - 09/2021",
    responsibilities: [
      "Orchestrated the development of 18 major pages for the Amazon Pay for Business app.",
      "Played a pivotal role in a team of three, facilitating 5 million merchant engagements at launch.",
      "Provided mentorship to an SDE for promotion and an intern for a pre-placement offer, recognized with a promotion to Software Development Engineer-2.",
    ],
    techStack: [
      "Java",
      "JavaScript",
      "AWS",
      "React Native",
      "Spring MVC",
      "DynamoDB",
      "React",
      "Full Stack",
      "RESTful APIs",
    ],
  },
  {
    id: 5,
    position: "Software Development Engineer Intern",
    company: "Amazon",
    location: "Hyderabad",
    url: "https://en.wikipedia.org/wiki/Amazon_(company)",
    date: "05/2018 - 07/2018",
    responsibilities: [
      "Developed automation for sequence generation in a tier-1 service, benefiting over 100 developer teams in Amazon.",
      "Created a comprehensive full-stack admin tool to monitor and manage sequence configurations in real-time.",
      "Successfully transitioned from internship to a full-time position, demonstrating strong performance and commitment to excellence.",
    ],
    techStack: [
      "Java",
      "AWS",
      "Spring MVC",
      "DynamoDB",
      "Backend",
      "RESTful APIs",
      "Micro-service Architecture",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Cloud Storage System",
    description:
      "A Java-based cloud storage system that allows users to manage files and directories, perform file operations, and handle compression and decompression of files.",
    techStack: [
      "Java",
      "Maven",
      "JUnit 5",
      "File Management",
      "Compression",
      "Decompression",
    ],
    url: "https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",
    external: "https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",
    stars: 0,
  },
  {
    id: 2,
    title: "Concurrency In Java: Web Crawler",
    description:
      "Developed a concurrent web crawler in Java to explore and index pages within a specific domain. The crawler processes URLs from a given starting point, printing out each visited URL and its links while restricting itself to the specified domain.",
    techStack: ["Java", "Concurrency", "Maven", "JUnit", "Lombok"],
    url: "https://github.com/Dibyajyoti-Pradhan/Crawler",
    external: "https://github.com/Dibyajyoti-Pradhan/Crawler",
    stars: 0,
  },
  {
    id: 3,
    title: "CLI Application: Cron Parser",
    description:
      "Implemented a cron expression parser in Java to expand cron strings into detailed schedules. Parses five fields (minute, hour, day of month, month, day of week) and outputs the schedule in a formatted table.",
    techStack: ["Java", "Maven", "CLI Development", "JUnit"],
    url: "https://github.com/Dibyajyoti-Pradhan/CronParser",
    external: "https://github.com/Dibyajyoti-Pradhan/CronParser",
    stars: 0,
  },
  {
    id: 4,
    title: "CSV Parser: Cookie Log",
    description:
      "Developed a command-line application in Java to parse log files and determine the most active cookies for a given date. Processes CSV logs to provide insights into cookie activity.",
    techStack: ["Java", "Maven", "JUnit", "Lombok", "Hashing"],
    url: "https://github.com/Dibyajyoti-Pradhan/Cookie",
    external: "https://github.com/Dibyajyoti-Pradhan/Cookie",
    stars: 0,
  },
  {
    id: 5,
    title: "Pokemon - Advanced HTML & CSS Project",
    description:
      "An advanced CSS project for Pokemon lovers, showcasing how far UI can be developed without JavaScript. Built using advanced HTML, CSS, SASS, BEM, and 7-1 Architecture.",
    techStack: ["HTML", "CSS", "SASS", "BEM", "7-1 Architecture"],
    url: "https://github.com/Dibyajyoti-Pradhan/Iris",
    external: "https://github.com/Dibyajyoti-Pradhan/Iris",
    stars: 0,
  },
  {
    id: 6,
    title: "Netflix: React",
    description:
      "A Netflix clone built from scratch using React, Firebase Authentication, and Styled Components. The project demonstrates advanced component usage and state management.",
    techStack: ["React", "Firebase", "Styled Components"],
    url: "https://github.com/Dibyajyoti-Pradhan/Netflix",
    external: "https://github.com/Dibyajyoti-Pradhan/Netflix",
    stars: 0,
  },
];

export const achievements = [
  {
    id: 1,
    title: "GenAI for Ad Creative",
    description:
      "Introduced GenAI (Llama 2) for Ad Creatives in Meta Ads Manager App in Meta GenAI Hackathon, enhancing ad creative capabilities.",
  },
  {
    id: 2,
    title: "Innovation Award",
    description:
      'Received the "Most Innovative Award" at the Amazon Pay EDH Hackathon for pioneering a near-zero latency model for the Amazon Pay For Business App.',
  },
  {
    id: 3,
    title: "Scholarship Recognition",
    description:
      "Recognized with the Jagadis Bose National Talent Search Scholarship, selected as one of 56 scholars from over 3000 applicants from top-tier colleges.",
  },
];

export const education = [
  {
    id: 1,
    school: "Jadavpur University",
    url: "https://en.wikipedia.org/wiki/Jadavpur_University",
    degree: "Bachelor Of Engineering",
    duration: "2015 - 2019",
    location: "Kolkata, India",
    major: "Electronics and Telecommunication Engineering",
    details: ["CGPA: 8.05", "Award Senior JBSNTS Scholarship"],
  },
  {
    id: 2,
    school: "Krishnath College School",
    url: "https://en.wikipedia.org/wiki/Krishnath_College_School/",
    degree: "Higher Secondary (WBCHSE)",
    duration: "2013 - 2015",
    location: "West Bengal, India",
    major: "",
    details: [
      "Percentage: 94.2%",
      "Percentile: 99.63%",
      "Physics 100 | Maths 95 | English 92",
      "WBJEE: 335 (GEN | Engg.) | 3351 (GEN | Med)",
      "Also cracked IISER Kolkata and IIEST (Mechanical)",
    ],
  },
  {
    id: 3,
    school: "Mary Immaculate School",
    url: "https://mismsd.in/",
    degree: "Secondary (ICSE)",
    duration: "2013",
    location: "West Bengal, India",
    major: "",
    details: [
      "Percentage: 90%",
      "Maths 97 | Computer Application 97 | Science 90",
    ],
  },
];

export const contactInfo = {
  heading: "Get In Touch",
  message: `
    Whether you have a question or just want to say hi, feel free to drop a message!
  `,
  email: "dibyojyotipradhan@gmail.com",
};
