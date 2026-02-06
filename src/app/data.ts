import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  ICON: string;
  TITLE: string;
  STATUS: string;
  LINK: string;
  TAGLINE: string;
  STATUS_TEXT: string[];
  WEB: string;
  IOS: string;
  TECH: string[];
  CONTENT: string[];
  FEATURES: string[];
  IMAGE_URL: string;
  LINKS: {
    LINK_TEXT: string;
    LINK_DESCRIPTION: string;
    LINK_URL: string
  }[];
}

export const DATA = {
  HEADER: {
    NAME: "Amar Pal",
    AGE: "21",
    PRONOUN: "he/him",
    HEADLINE:
      "Computer Science undergraduate (AI/ML specialization) with hands-on experience in full-stack development, backend systems, database design, and API integration.",
    RESUME:
      "https://drive.google.com/file/d/1Sq4Qa1AWCrXozIZAbypCSs1nWD6Rvq27/view?usp=sharing",
    EMAIL: "mailto:tmsl.aiml.amarpal@gmail.com",
    GITHUB: "https://github.com/ITSAMARHERE",
    LINKEDIN: "https://www.linkedin.com/in/amar-pal-a945ba250/",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a passionate Computer Science undergraduate specializing in AI/ML with hands-on experience in full-stack development, backend systems, database design, and API integration. Strong foundation in Java, Python, SQL, and Software Development Life Cycle (SDLC). Experienced in building scalable web applications and working in Agile environments.",
    EXPERTISE:
      "I specialize in React, Next.js, Node.js, Django, and have experience with Machine Learning fundamentals including data preprocessing, feature engineering, model evaluation, and AI workflow integration. Passionate about technology consulting, data analytics, and enterprise application development.",
    BLOG:
      "I'm excited about sharing knowledge through blogs, offering tips on web development, modern best practices, and emerging tech trends.",
  },


  EXPERIENCE: {
    "Intelligent Creation": {
      WEBSITE: "https://www.intelligentcreation.in/",
      POSITION: "Software Development Intern",
      LOCATION: "Pune",
      DURATION: "Aug 2025 - Jan 2026",

      DESCRIPTION: [
        "Built a full-stack Django web application, implementing scalable backend architecture using Django models, views, and routing.",
        "Integrated HTMX for dynamic partial page updates, enhancing interactivity without full page reloads.",
        "Developed a drag-and-drop block-based JavaScript interface and designed a fully responsive UI using Tailwind CSS, ensuring seamless user experience across devices.",
      ],

      TECH_STACK: [
        "Python",
        "Django",
        "HTMX",
        "JavaScript",
        "Tailwind CSS",
        "Git",
      ],
    }
  },

  PROJECTS: {
    "CampusCare": {
      SLUG: "campuscare",
      ICON: "",
      TITLE: "Campus Care",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["Node.js", "REST APIs", "MySQL", "PostgreSQL", "Express.js"],
      WEB: "",
      IOS: "",
      LINK: "",
      TAGLINE: "Digital Mental Health Platform for Students",
      HIDDEN: false,
      CONTENT: [
        "A comprehensive digital mental health platform designed specifically for students to support their well-being and mental health needs."
      ],
      FEATURES: [
        "Built backend services using Node.js and REST APIs for robust server-side functionality.",
        "Designed relational database schemas and optimized queries for efficient data management.",
        "Implemented real-time user interaction features for seamless communication.",
        "Analyzed user activity data to support scalability and basic analytics insights.",
      ],
      IMAGE_URL: "/campuscare.png",
      LINKS: [{
        LINK_TEXT: "",
        LINK_DESCRIPTION: "Project details available upon request.",
        LINK_URL: "https://campuscare.live/"
      }]
    },

    "ECommerceApp": {
      SLUG: "ecommerce",
      ICON: "",
      TITLE: "ECommerce App with Admin Panel",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Express.js"],
      WEB: "",
      IOS: "",
      LINK: "",
      TAGLINE: "Full-stack eCommerce application with admin dashboard",
      HIDDEN: false,
      CONTENT: [
        "A comprehensive eCommerce platform with a powerful admin panel for managing products, orders, and users."
      ],
      FEATURES: [
        "Developed full-stack application using React, Redux Toolkit, Node.js, and MongoDB.",
        "Implemented role-based access control for admin operations and user management.",
        "Improved response time by ~30% through database optimization and query refinement.",
        "Supported functional testing and debugging to ensure robust application performance.",
      ],
      IMAGE_URL: "/ecommerce.png",
      LINKS: [{
        LINK_TEXT: "",
        LINK_DESCRIPTION: "Project details available upon request.",
        LINK_URL: ""
      }]
    },

    "Chat Application": {
      SLUG: "Talka",
      ICON: "",
      TITLE: "Talka- Come and Chat",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["React", "Redux", "ze", "Node.js", "MongoDB", "Express.js"],
      WEB: "",
      IOS: "",
      LINK: "",
      TAGLINE: "Full-stack Chat application with real-time messaging",
      HIDDEN: false,
      CONTENT: [
        "A comprehensive chat application with real-time messaging capabilities ."
      ],
      FEATURES: [
        "Analyzed chat usage patterns and user activity data.",
        "Designed database schemas to efficiently store and retrieve message data.",
        "Supported scalability analysis for concurrent user data handling."
      ],
      IMAGE_URL: "/chat.png",
      LINKS: [{
        LINK_TEXT: "",
        LINK_DESCRIPTION: "Project details available upon request.",
        LINK_URL: ""
      }]
    },
  },
  ALL_PROJECTS:
    "https://github.com/ITSAMARHERE?tab=repositories"
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
