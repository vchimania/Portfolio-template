import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    nextjs,
    konf,
    hme,
    tesla,
    betterco,
    osm,
    crypto,
    today,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "Data operations associate",
      company_name: "HealthifyMe",
      icon: hme,
      iconBg: "#383E56",
      date: "Jan 2019 - June 2020",
      points: [
        "End-to-end ownership of accuracy and quality of Ria, a AI powered chatbot health assistant.",
        "Served as the POC between the data ops team and content-engineering-data science teams.",
        "Designing and monitoring live dashboards to supervise the similarity model and performance metrics of Ria.",
      ],
    },
    {
      title: "Freelance",
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Apr 2021",
      points: [
        "Learning and Building websites using HTML, CSS, Javascript for small businesses.",
        "Implementing best design practices and functionality.",
        "Worked on personal projects.",
        "Completed AWS solutions architect - associate level certification.",
      ],
    },
    {
      title: "Web Develoment Intern",
      company_name: "The Better Co",
      icon: betterco,
      iconBg: "#383E56",
      date: "May 2021 - Aug 2021",
      points: [
        "Worked on building the customer facing website.",
        "Integrated email trigger system for lead generation by building a nodeJS server running Nodemailer.",
        "Built admin client portal and implemented google auth for login/signup using MERN stack.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Konfhub",
      icon: konf,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Sept 2022",
      points: [
        "Worked on konfhub's admin client dashboard (React), customer facing application (NextJS), and quizhub application.",
        "Transfer to Azuga as a front end developer consultant from January 2022 - August 2022",
        "At Azuga, created internal token manager system (creds.azugaworks.com) for employees to easily login to the app for multiple environments and subsequent testing.",
        "Worked on Azuga works application (NextJS) - contributed to re-design of the settings module and handled overall UI tasks.",
        "Daily tasks included taking part in planning and design meetings, development and testing of UI components."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      source_code_link: "https://github.com/shazzy152/gran",
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
  
  export { services, technologies, experiences, testimonials, projects };