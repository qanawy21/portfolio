// Single source of truth for the whole site. Edit the content here only.

export const profile = {
  handle: "qanawy",
  photo: "" as string, // e.g. "/me.webp" (file in /public). Leave empty to hide.
  firstName: "Mahmoud",
  lastName: "Shehto",
  role: "Front-End Developer",
  stack: "React.js / WordPress",
  location: "Ismailia, Egypt",
  email: "mahmoudalqanawy21@gmail.com",
  phone: "+20 100 914 8225",
  phoneHref: "tel:+201009148225",
  github: "https://github.com/qanawy21",
  linkedin: "https://www.linkedin.com/in/mahmoudalqanawy21",
  resume: "/resume.pdf",
  summary:
    "I build responsive websites, booking systems and e-commerce experiences with a focus on clean interfaces, performance and practical business needs. My background includes React, modern JavaScript, WordPress and WooCommerce.",
};

// Tools shown as logo tiles. `img` is a file in /public/images/tools,
// `icon` is a key handled in components/ToolIcon.tsx (react-icons).
export type Tool = { name: string; img?: string; icon?: string };

export const tools: Tool[] = [
  { name: "HTML5", img: "html5.webp" },
  { name: "CSS3", img: "css3.webp" },
  { name: "JavaScript", img: "javascript.webp" },
  { name: "React.js", img: "react.webp" },
  { name: "Redux", img: "redux.webp" },
  { name: "Bootstrap", img: "bootstrap.webp" },
  { name: "WordPress", img: "wordpress.webp" },
  { name: "WooCommerce", img: "woocommerce.webp" },
  { name: "Git", img: "git.webp" },
  { name: "GitHub", icon: "github" },
  { name: "Python", img: "python.webp" },
  { name: "Figma", img: "figma.webp" },
  { name: "Photoshop", img: "photoshop.webp" },
  { name: "Illustrator", img: "illustrator.webp" },
  { name: "React Router", icon: "reactrouter" },
  { name: "Netlify", icon: "netlify" },
  { name: "Postman", icon: "postman" },
  { name: "Stripe", icon: "stripe" },
  { name: "PayPal", icon: "paypal" },
];

export const moreSkills = {
  "WordPress & payments": ["Kadence Framework", "MyFatoorah", "Paymob", "Fawry"],
  "Engineering": ["OOP", "Data Structures", "Algorithms", "Debugging", "Performance Optimization", "Clean Code"],
  "Languages": ["Arabic", "English"],
};

export type Experience = {
  date: string;
  title: string;
  company: string;
  place: string;
  bullets: string[];
  tags: string[];
  link?: { href: string; label: string };
};

export const experiences: Experience[] = [
  {
    date: "08/2026 - Present",
    title: "IT Support & Network Technician",
    company: "Armed Forces Information Systems Department",
    place: "Egypt",
    bullets: [
      "Maintain and troubleshoot network equipment including routers, switches and ONTs.",
      "Install and maintain CCTV systems and NVRs.",
      "Manage the centralized satellite TV system and room TVs.",
      "Support desktops, printers and Avaya phone systems.",
      "Perform preventive maintenance and resolve incidents quickly to minimize downtime.",
    ],
    tags: ["Networking", "CCTV", "IT Support"],
  },
  {
    date: "08/2025 - 01/2026",
    title: "WordPress Developer",
    company: "Golden Trilar Factory",
    place: "Saudi Arabia",
    bullets: [
      "Developed and currently maintain a full trailer booking website using WordPress and the Gutenberg editor.",
      "Implemented optimized booking workflows, responsive UI components and ongoing performance updates.",
      "Page load dropped from 5s to 2s, measured with PageSpeed Insights.",
    ],
    tags: ["WordPress", "Gutenberg", "Responsive UI"],
    link: { href: "https://golden-trilar.com/", label: "golden-trilar.com" },
  },
  {
    date: "09/2025 - 10/2025",
    title: "WordPress Developer",
    company: "Barah brand",
    place: "Kuwait",
    bullets: [
      "Developed an e-commerce store for a hoodie brand using WordPress, WooCommerce and the Gutenberg editor.",
    ],
    tags: ["WordPress", "WooCommerce", "Gutenberg"],
  },
];

export const training = [
  {
    date: "11/2023 - 01/2024",
    title: "Artificial Intelligence and Project Management",
    org: "Zewail City, Cairo",
    text: "50-hour blended learning program in AI concepts and real-world applications, plus project management training.",
  },
  {
    date: "08/2022 - 09/2022",
    title: "Oracle, Oracle SQL, Oracle APEX and .NET Framework",
    org: "Suez Canal Authority, Ismailia",
    text: "Hands-on training in databases and application development.",
  },
];

export type Project = {
  name: string;
  kind: "client" | "personal";
  label: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: { src: string; alt: string; w: number; h: number };
  note?: string;
};

export const projects: Project[] = [
  {
    name: "Golden Trilar",
    kind: "client",
    label: "Booking website",
    desc: "A full trailer booking website for a manufacturer in Saudi Arabia, built with WordPress and the Gutenberg editor. I still maintain it.",
    tags: ["WordPress", "Gutenberg", "Responsive UI"],
    demo: "https://golden-trilar.com/",
  },
  {
    name: "Barah",
    kind: "client",
    label: "E-commerce store",
    desc: "An online store for a hoodie brand in Kuwait, built with WordPress, WooCommerce and the Gutenberg editor.",
    tags: ["WordPress", "WooCommerce", "Gutenberg"],
    image: {
      src: "/images/projects/barah.jpg",
      alt: "Barah store homepage in Arabic with a desert landscape banner and shop buttons",
      w: 693,
      h: 448,
    },
    note: "Offline for now: hosting expired",
  },
  {
    name: "MailFlow",
    kind: "personal",
    label: "Full-stack",
    desc: "Email campaign manager built with Python and FastAPI. CSV recipients with validation and duplicate detection, personalized Jinja2 HTML templates, SMTP delivery, background processing with retries, and live campaign progress.",
    tags: ["Python", "FastAPI", "Jinja2", "SMTP"],
    github: "https://github.com/qanawy21/MailFlow",
    demo: "https://mail-flow-tawny.vercel.app/",
  },
  {
    name: "Prayer Times App",
    kind: "personal",
    label: "Front-end",
    desc: "Responsive prayer-times app built with React and Vite. Fetches real-time data from the Aladhan API for the selected city, with a glassmorphism interface.",
    tags: ["React", "Vite", "Aladhan API", "CSS"],
    github: "https://github.com/qanawy21/Prayer-Times-App",
    demo: "https://qanawy21.github.io/Prayer-Times-App/",
  },
  {
    name: "Tasks App",
    kind: "personal",
    label: "Front-end",
    desc: "Arabic to-do app with due dates, priorities, search, filters and a progress counter. Tasks stay saved in the browser with LocalStorage.",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    github: "https://github.com/qanawy21/Tasks-app",
    demo: "https://qanawy21.github.io/Tasks-app/",
  },
  {
    name: "CRUD Product Management",
    kind: "personal",
    label: "Front-end",
    desc: "Product inventory manager with create, read, update and delete, price, taxes, ads and discount totals, and search by title or category, in vanilla JavaScript.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/qanawy21/CRUD-Product-Management-System",
    demo: "https://qanawy21.github.io/CRUD-Product-Management-System/",
  },
  {
    name: "Best Restaurant",
    kind: "personal",
    label: "Front-end template",
    desc: "Responsive restaurant website template with menu, gallery, blog, FAQ, team and table-booking sections.",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    github: "https://github.com/qanawy21/Best-Restaurant",
    demo: "https://qanawy21.github.io/Best-Restaurant/",
  },
];

export const education = {
  date: "08/2020 - 06/2024",
  school: "Sinai University",
  place: "Ismailia, Egypt",
  degree: "Information Technology & Computer Science",
  major: "Major: Information Technology",
  grade: "Very Good",
  project: "Sinai Medical App, an automated healthcare services management system",
  projectGrade: "Excellent",
};

export type Certificate = { title: string; issuer: string; date?: string; url?: string };

// Ordered by relevance: the first six are shown before "Show More".
export const certificates: Certificate[] = [
  { title: "Introduction to Front-End Development", issuer: "Meta, on Coursera", date: "Apr 2026", url: "https://coursera.org/verify/IPL5HOX42PCU" },
  { title: "JavaScript for Dynamic Web Development", issuer: "Packt, on Coursera", date: "Aug 2026", url: "https://coursera.org/verify/1ZGNQFKGP5YG" },
  { title: "WordPress Essential Training", issuer: "LinkedIn Learning", date: "Feb 2026" },
  { title: "CS50x", issuer: "Harvard University", date: "2024", url: "https://cs50.harvard.edu/certificates/a28f691e-0416-4615-8a25-9b3ba32c02a2" },
  { title: "Learning Git and GitHub", issuer: "LinkedIn Learning", date: "Feb 2026" },
  { title: "Building LLM Applications With Prompt Engineering", issuer: "NVIDIA", date: "Feb 2026", url: "https://learn.nvidia.com/certificates?id=9HCRDjG9SzWy7d5EY2oIBw" },
  { title: "Learn HTML & CSS", issuer: "ITI, Mahara-Tech", date: "Aug 2024" },
  { title: "The Freelancer School, Web Design Track", issuer: "ITIDA, TIEC and Aspire Training Solutions", date: "Sep 2022" },
  { title: "The Principles of Writing Clean Code", issuer: "ITI, Mahara-Tech", date: "Aug 2024" },
  { title: "AI for All: From Basics to GenAI Practice", issuer: "NVIDIA Academy", date: "Jan 2026" },
  { title: "Fundamentals of Digital Marketing", issuer: "Google, with Banque Misr", date: "2025" },
  { title: "1 Million Prompters", issuer: "Dubai Future Foundation and Dubai Centre for AI" },
];
