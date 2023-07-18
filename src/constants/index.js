import images from "./images";

const abouts = [
  {
    title: "Web Developer",
    description:
      "I have two years of experience as a web developer, specializing in web development. I am truly passionate about crafting websites that are not only visually appealing but also optimized and highly functional for businesses and production purposes",
    image: images.about01,
  },
  {
    title: "Front End Developer (React.js)",
    description:
      "As a Front-End Developer, I am deeply passionate about building exceptional single-page web applications (SPAs) that not only showcase stunning and well-designed interfaces but also excel in terms of optimization and functionality for production purposes",
    image: images.about02,
  },
  {
    title: "Full Stack Developer (MERN & Next.js)",
    description:
      "As a versatile full-stack developer skilled in MERN (MongoDB, Express.js, React.js, Node.js) and Next.js, I have a comprehensive understanding of both front-end and back-end development, with expertise in creating dynamic and full stack web application",
    image: images.about04,
  },
];

const skills = [
  // {
  //   name: "HTML",
  //   icon: images.html,
  // },
  // {
  //   name: "CSS",
  //   icon: images.css,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: images.bootstrap,
  // },
  // {
  //   name: "JavaScript",
  //   icon: images.javascript,
  // },
  {
    name: "React.js",
    icon: images.react,
  },
  {
    name: "Tailwind CSS",
    icon: images.tailwind,
  },
  {
    name: "Node.js",
    icon: images.node,
  },
  {
    name: "Next.js",
    icon: images.nextjs,
  },
  {
    name: "MongoDB",
    icon: images.mongodb,
  },
  // {
  //   name: "Git",
  //   icon: images.git,
  // },
  {
    name: "GitHub",
    icon: images.github,
  },
];

const experiences = [
  {
    year: "2021 - 2022",
    works: [
      {
        name: "Front End Developer",
        company: "EVS Training Institute",
        desc: "As a seasoned full stack web developer, I have been an integral part of this reputable company for nearly one year. This dynamic organization specializes in delivering comprehensive IT services, and during my tenure, I have actively contributed to the development and implementation of cutting-edge web solutions.",
      },
    ],
  },
  {
    year: "2022 - Current",
    works: [
      {
        title: "Full Stack Developer",
        company: "Opus Solutions",
        desc: "As a seasoned full stack web developer, I have been an integral part of this reputable company for nearly one year. This dynamic organization specializes in delivering comprehensive IT services, and during my tenure, I have actively contributed to the development and implementation of cutting-edge web solutions.",
      },
    ],
  },
];

const testimonials = [
  {
    name: "Tahir Hameed",
    company: "Al Syed Institute of Commerce",
    feedback:
      "As a managing director at Al Syed institute of commerce, I would say the services provided by Muneeb are quite efficient assuring reliability and scalability. He is a passionate developer and have expertise in various web technologies.",
    image: images.testimonial1,
  },
  {
    name: "Jon Doe",
    company: "ABC Company",
    feedback:
      "Being a CEO of ABC Company, I would say the services provided by Muneeb are quite efficient assuring reliability and scalability. He is a passionate developer and have expertise in various web technologies.",
    image: images.testimonial2,
  },
  {
    name: "Stella Rose",
    company: "XYZ Company",
    feedback:
      "Being a CEO of XYZ Company, I would say the services provided by Muneeb are quite efficient assuring reliability and scalability. He is a passionate developer and have expertise in various web technologies.",
    image: images.testimonial3,
  },
];

const works = [
  {
    image: images.about02,
    name: "Age Calculator",
    title: "Age Calculator",
    projectLink: "#",
    codeLink: "#",
    description:
      "A simple age calculator, implemented at very initial stages of my web development and coding journey. The project is implemented using pure CSS and JavaScript",
    tags: ["Vanilla JS"],
  },
  {
    image: images.about01,
    name: "My Personal Portfolio",
    title: "My Personal Portfolio",
    projectLink: "https://muneeb-personal-portfolio.vercel.app/",
    codeLink: "https://github.com/Muneeb752/muneeb-personal-portfolio.git",
    description:
      "The portfolio your are currently seeing is implemented using React.js with SCSS. It has a modern and sleek design that represents my expertise in React,js",
    tags: ["React.js"],
  },
  {
    image: images.about04,
    name: "Khanqah Ghilania",
    title: "Khanqah Ghilania",
    projectLink: "https://khanqahghilania.org/",
    codeLink: "https://github.com/Muneeb752/khanqahghilania.git",
    description:
      "A confidential project implemented using pure JavaScript with Login and Registration system with only authenticated users have access to specified pages",
    tags: ["Vanilla JS"],
  },
];
export { images, abouts, skills, experiences, testimonials, works };
