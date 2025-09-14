import chalk from "chalk";
import boxen from "boxen";

const link = (text, url) => `\u001b]8;;${url}\u0007${text}\u001b]8;;\u0007`;

const name = "SUKHAMOY ROY";
const title = "Python Developer | Full Stack Expert";
const location = "Paschim Midnapore, West Bengal, 721122";
const phone = "8972188626 / 7810916597";
const email = "sukhamoy29roy@gmail.com";
const linkedin = "https://www.linkedin.com/in/sukhamoy-roy-819346243";
const github = "https://github.com/sukhamoy29";
const portfolio = "https://sukhamoy-portfolio.vercel.app/";

const objective =
  "backend-heavy Full-Stack Expert. Ready to take my career to the next level and currently seeking new opportunities.";

const skills = [
  chalk.bold("Technical:"),
  "Languages: C, Python",
  "Database: SQL, MySQL",
  "Frameworks: FastAPI, React, Nodejs",
  "Others: HTML5, CSS3, Tailwind CSS, MS Word, PowerPoint, MS Excel",
  "",
  chalk.bold("Behavioral:"),
  "Leadership, Team player, Problem-solving",
];

const education = [
  "Bachelor of Computer Application (Aug 2022 – Jun 2025)",
  "Midnapore College (Autonomous), West Bengal | CGPA: 7.31/10",
  "",
  "Higher Secondary (Class XII) — Saharda Kalipada Vidyapith (H.S)",
  "Specialization: Science | Percentage: 94.2%",
  "",
  "Secondary (Class X) — Saharda Kalipada Vidyapith (H.S)",
  "Percentage: 73.57%",
];

const projects = [
  link(chalk.bold("MediHub:"), "https://github.com/sukhamoy29/MediHub"),
  "Medical website to search local clinics, book appointments online,",
  "and visit them offline. Goal: reduce patient waiting times.",
  
  "Technology: Python, FastAPI, HTML5, Tailwind CSS, JavaScript, React, MySQL",

  `Repository: ${link("Demo View", "https://medi-hub-three.vercel.app/")}`,
  "",
  chalk.bold("MediBot:"),
  "Appointment Booking System integrating Google Calendar.",
  "Features: free slot retrieval, availability check, scheduling.",
  "Technology: FastAPI, Streamlit, LangChain, OpenRouter API, Pydantic",
];

const certificate = [
  "Python for Absolute Beginner (2024): Gained proficiency in Python.",
];

const hobbies = [
  "Exploring tools for productivity improvement",
  "Traveling",
  "Reading Story Books",
];

const output = `
${chalk.bold(name)} — ${chalk.green(title)}

${chalk.cyan("Location:")} ${location}
${chalk.cyan("Phone:")} ${phone}
${chalk.cyan("Email:")} ${email}
${chalk.cyan("LinkedIn:")} ${linkedin}
${chalk.cyan("GitHub:")} ${github}
${chalk.cyan("Portfolio:")} ${portfolio}

${chalk.bold("Objective:")}
${objective}

${chalk.bold("Skills:")}
${skills.join("\n")}

${chalk.bold("Education:")}
${education.join("\n")}

${chalk.bold("Projects:")}
${projects.join("\n")}

${chalk.bold("Certifications:")}
${certificate.join("\n")}

${chalk.bold("Hobbies & Interests:")}
${hobbies.join(", ")}
`;

console.log(
  boxen(output, { padding: 1, margin: 1, borderStyle: "round" })
);
