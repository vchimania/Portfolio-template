import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nextjs,
  osm,
  crypto,
  today,
  oto,
  ns,
  trukker,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Softwaare Developer",
    company_name: "OTO Capital",
    icon: oto,
    iconBg: "#383E56",
    date: "Oct 2021 - Till Date",
    points: [
      "Introduced modern tools like Next.js, Tailwind CSS, ESLint, and Prettier, resulting in fewer errors, improved code readability, and increased developer productivity",
      "Collaborated with the Back-end team to develop an E-Commerce journey that provides the best experience for customers. Implemented filters such as brand, vehicle type, budget, and mileage, along with sorting and paginated results. Users can search for specific vehicles and access desired information.",
      "Improved page load performance and SEO by utilizing Next.js Image Compression, Static Site Generation (SSG), slug-based URLs, and customized page titles.",
      "Integrated Clevertap events using Google Tag Manager to gain a better understanding of user behavior and analytics.",
      "Integrated the Vimeo SDK for the Reviews section, allowing users to watch video reviews by other customers and make informed decisions about their two-wheeler purchase.",
      "Explored the new web framework Remix run to prepare for the eventual migration the internal app. Using Remix simplified the codebase and solidified the team’s knowledge of web platform APIs.",
      "Developed the Disbursement Module for the Internal Team, resulting in significant productivity improvements. The workload that previously required a team of 6-7 people can now be handled by just 2 people, and the solution is highly scalable.",
      "Developed a Lender Portal for OPS team, catering to multiple lenders including NAC, WCAP, and Suryoday Small Finance Bank Ltd.",
      "Received the Employee of the Quarter Award for 2022 (Nov-Jan) in recognition of outstanding contributions.",
    ],
  },
  {
    title: "Mock Interviewer (Part time)",
    iconBg: "#383E56",
    icon: ns,
    date: "March 2022 - March-2023",
    points: [
      "Conducted mock interviews for aspiring developers at Newton School, focusing on React.js and HTML/CSS.",
      "Assessed candidates technical skills and evaluated their proficiency in React.js concepts and HTML/CSS best practices.",
      "Employed a structured interview process to simulate real-world scenarios and assess candidates problem-solving abilities.",
      "Provided detailed feedback to help candidates improve their technical skills, coding style, and understanding of React.js and HTML/CSS.",
      "Collaborated with the Newton School team to refine the mock interview process and provide valuable insights for curriculum development.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Trukker Technologies",
    icon: trukker,
    iconBg: "#383E56",
    date: "March 2021 - Sep 2021",
    points: [
      "Worked on building the customer facing website.",
      "Implemented All driver system from scratch which helped the organization to add drivers and there details.",
      "Worked on developing new features and improving existing features including bug fixes.",
    ],
  },
  {
    title: "Intern",
    company_name: "Newton School",
    icon: ns,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Sept 2022",
    points: [
      "Full Stack Web Development along with Problem Solving",
      "Technical Stack Learned: Node JS, React JS, HTML, Express, CSS, JavaScript, Java, Data Structure Algorithm, and Bootstrap",
      "Participated in various Coding Contest Organized by the platform",
      "Worked on Various Projects Like To-Do-List, Basic Calculator, Human Verification Captcha",
      "Daily tasks included taking part in planning and design meetings, development and testing of UI components.",
    ],
  },
];

const projects = [
  {
    name: "OSM Maps",
    description:
      "OpenStreetMap-based Application to search for any location with an administrative boundary marking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-leaflet",
        color: "green-text-gradient",
      },
      {
        name: "openstreetmaps",
        color: "pink-text-gradient",
      },
    ],
    image: osm,
    source_code_link: "https://github.com/vchimania/Maps-Search",
  },
  {
    name: "Crypto Tracker",
    description:
      "Web application that enables users to search and Track Crypto prices, integrated with coingecko API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/shazzy152/crypto-tracker",
  },
  {
    name: "Magazine Landing page",
    description:
      "A pixel perfect Travel Magazine Landing page with night mode toggle and mobile responsive functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: today,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, projects };
