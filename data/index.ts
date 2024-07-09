import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "EWG's Healthy Living",
    // des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
    img: "/3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://play.google.com/store/apps/details?id=com.skindeep.mobile&hl=en_US&gl=US",
  },
  {
    id: 2,
    title: "3D Infinite",
    img: "/img2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shopify.svg"],
    link: "HTTPS://3DINFINITE.COM/",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-imaginify.netlify.app",
  },
  {
    id: 4,
    title: "HENDY GROUP",
    img: "/p.png",
    iconLists: ["/next.svg", "/css-3.svg", "/ts.svg" , "/angular-icon-1.svg"],
    link: "https://www.hendy.co.uk/",
  },
  {
    id: 4,
    title: "MarketingBlocks",
    img: "/p3.png",
    iconLists: ["/next.svg", "bootstrap-5-1.svg", "/ts.svg", "/javascript-1.svg", "/react-2.svg"],
    link: "HTTPS://HEY.MARKETINGBLOCKS.AI/",
    // sourceCode: "https://github.com/sanidhyy/apple-clone",
  },
  {
    id: 4,
    title: "Deepspace",
    img: "/image2.png",
    iconLists: ["/next.svg", "/css-3.svg", "/javascript-1.svg","/solana.svg","/blockchain.svg" ],
    link: "HTTPS://DEEPSPACE.GAME/",
  },
] as const;

export const testimonials = [
  {
    quote: `${links.ownerName} is a very talented developer who delivers professional, fast results.
    I am very impressed with his skills and would highly recommend his to anyone looking for a real Senior MERN stack developer who excels at API integration.
    Thank you.`,
    name: "Michael Johnson",
    image: "/profile.svg",
    
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Ben Hall",
    image: "/1.jpg",
  },
  {
    quote: `${links.ownerName} finished the tasks on time, and they really have a very professional team. I am very, very thankful to him.`,
    name: "Jonrdan Arajuo",
    image: "/2.jpg",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Juvo Company",
    date:"07/2015 ~ 07/2017",
    desc: "I developed and maintained robust web applications using JavaScript, HTML5, CSS3, and PHP Laravel, focusing on security, performance, and scalability. ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SaltStack For DevOps Company",
    date:"08/2017 ~ 03/2019",
    desc: "I led the development of scalable web applications using React, Angular, and Vue.js, ensuring seamless user experiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "CPS Innovations Company",
    date:"04/2019 ~ 09/2021",
    desc: "I significantly increased user engagement by 30% through a customer portal redesign, enhancing UX and retention",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Codevico Company",
    date:"10/2021 ~ 04/2024",
    desc: "I developed a website using React.js aimed at resource conservation. ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Jonny0301",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jonny-steven-perdomo-virguez-999a70317/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
