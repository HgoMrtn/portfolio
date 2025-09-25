import { BiEnvelope, BiLogoGithub, BiRocket } from "react-icons/bi";

{/* Tools Logos */ }
import logoDocker from "./assets/logo-docker.svg";
import logoExpress from "./assets/logo-express.svg";
import logoGithub from "./assets/logo-github.svg";
import logoMongodb from "./assets/logo-mongodb.svg";
import logoNode from "./assets/logo-node.svg";
import logoReact from "./assets/logo-react.svg";
import logoRedux from "./assets/logo-redux.svg";
import logoTailwind from "./assets/logo-tailwind.svg";
import logoVite from "./assets/logo-vite.svg";
import logoNext from "./assets/logo-next.svg";
import logoJavascript from "./assets/logo-javascript.svg";
import logoHtmlcss from "./assets/logo-htmlcss.svg";

import logoPython from "./assets/logo-python.svg";
import logoTanstackQuery from "./assets/logo-tanstack-query.svg";
import logoSvelte from "./assets/logo-svelte.svg";
import logoReactRouter from "./assets/logo-react-router.svg";
import logoVitest from "./assets/logo-vitest.svg";
import logoPostman from "./assets/logo-postman.svg";


{/* Companies Logos */ }
import logoGoogleDomains from "./assets/logo-google-domains.svg";
import logoClinist from "./assets/logo-clinist.svg";
import logoSping from "./assets/logo-sping.svg";
import logoVocBee from "./assets/logo-vocbee.svg";


import ParticlesContainer from "./components/ParticlesContainer";

const tools = [
    {
        name: "JavaScript",
        logo: logoJavascript,
    },
    {
        name: "HTML/CSS",
        logo: logoHtmlcss,
    },
    {
        name: "React",
        logo: logoReact,
    },
    {
        name: "Vite",
        logo: logoVite,
    },
    {
        name: "Next.js",
        logo: logoNext,
    },
    {
        name: "Tailwind",
        logo: logoTailwind,
    },
    {
        name: "Redux",
        logo: logoRedux,
    },
    {
        name: "Node",
        logo: logoNode,
    },
    {
        name: "Express",
        logo: logoExpress,
    },
    {
        name: "MongoDB",
        logo: logoMongodb,
    },
    {
        name: "GitHub",
        logo: logoGithub,
    },
    {
        name: "Docker",
        logo: logoDocker,
    },
    {
        name: "Python",
        logo: logoPython,
    },
    {
        name: "React Query",
        logo: logoTanstackQuery,
    },
    {
        name: "Svelte",
        logo: logoSvelte,
    },
    {
        name: "React Router",
        logo: logoReactRouter,
    },
    {
        name: "Vitest",
        logo: logoVitest,
    },
    {
        name: "Postman",
        logo: logoPostman,
    },
];

const companies = [
    {
        name: "Sping",
        logo: logoSping,
        url: "https://sping.app",
    },
    {
        name: "Clinist",
        logo: logoClinist,
        url: "https://clinist.space",
    },
    {
        name: "Google Domains",
        logo: logoGoogleDomains,
        url: "https://domains.google.com",
    },
    {
        name: "VocBee",
        logo: logoVocBee,
        url: "https://vocbee.com",
    },
];

export default function App() {

    return (
        <>
            <div className="flex flex-col items-center">
                {/* Hero Section */}
                <div className="flex flex-col bg-indigo-700 w-screen items-center">
                    <div className="flex flex-col px-10 py-20 max-w-5xl">
                        <div className="flex flex-col gap-7">
                            <ParticlesContainer />

                            <p>Hi I'm Hugo Martin 👋</p>
                            <h1 className="md:text-8xl text-5xl font-bold">
                                Senior Software Engineer
                            </h1>
                            <p className="max-w-3xl">
                                I'm on a mission to turn ideas into beautifully functional
                                websites and applications, working with startup and large companies.
                            </p>
                            <a
                                href="https://flowcv.com/resume/4svasiog8s"
                                className="font-semibold bg-white text-indigo-700 px-4 py-3 w-fit rounded-md hover:bg-indigo-100"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                Download my Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col p-10 gap-16 max-w-5xl">

                    {/* Description Section */}
                    <div className="flex flex-col gap-4">
                        <h2 className="mb-3 font-extrabold">What I Do</h2>
                        <h3>Build with Purpose</h3>
                        <p className="font-light mb-4">
                            Every line of code should solve a real problem. I focus on creating meaningful, efficient, and scalable solutions that align with the bigger picture. Functionality and clarity guide every decision I make.
                        </p>
                        <h3>Collaborate with Impact</h3>
                        <p className="font-light mb-4">
                            Great software is built by great teams. I value clear communication, mutual respect, and a shared drive for excellence. Whether brainstorming or debugging, I believe the best outcomes come from working together.
                        </p>
                        <h3>Evolve with Curiosity</h3>
                        <p className="font-light mb-4">
                            Technology is always changing, and so am I. Staying curious and adaptable allows me to explore new tools, refine my skills, and push boundaries. Learning isn't just part of the job, it's what keeps it exciting.
                        </p>
                    </div>

                    {/* MY TOOLS */}
                    <div className="flex flex-col gap-4 mb-5">
                        <h2>My Favorite Tools</h2>
                        {/* Tech Logos */}
                        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
                            {tools.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="flex flex-col items-center gap-3 px-6 py-4 rounded-md border-1 bg-indigo-500/10 backdrop-blur-sm border border-slate-500/20"
                                >
                                    {/* <div
                                    key={tool.name}
                                    className="flex flex-col items-center gap-3 px-6 py-4 border-slate-700/50 border bg-slate-800/40 rounded-md"
                                > */}
                                    <img
                                        className="h-8 w-auto"
                                        src={tool.logo}
                                        alt={tool.name}
                                    />
                                    <p className="text-sm text-slate-300">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COMPANIES */}
                    <div className="flex flex-col gap-4 mb-5">
                        <h2>Some Products I Worked On</h2>
                        {/* Companies Logos */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">

                            {companies.map((company) => (
                                <a
                                    href={company.url}
                                    key={company.name}
                                    className="flex flex-col items-center gap-3 px-6 py-4 rounded-md border-1 bg-indigo-500/10 backdrop-blur-sm border border-slate-500/20 hover:scale-105 transition-transform"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <img
                                        className="h-8 w-auto"
                                        src={company.logo}
                                        alt={company.name}
                                    />
                                    <p>{company.name}</p>
                                </a>
                            ))}

                        </div>
                    </div>

                    {/* SEND A MESSAGE */}
                    <div className="flex flex-col gap-5 rounded-md p-6 border-1 bg-indigo-500/10 backdrop-blur-sm border border-slate-500/20">
                        <h2>Shoot me a message</h2>
                        <p className="font-light">
                            Have a project in mind or just want to chat about all things tech?
                            I'm all ears! Shoot me an email and let's start the
                            conversation. For freelance gigs, please make sure to mention your deadlines/timeframe, this will help me give you a helpful answer.
                        </p>
                        <a
                            href="mailto:h.martin.dev@gmail.com"
                            className="font-semibold bg-indigo-600 px-4 py-3 w-fit rounded-md text-sm inline-flex gap-x-2"
                        >
                            <BiEnvelope size={20} />
                            Write me Something
                        </a>
                    </div>

                    {/* OPEN MY GITHUB */}
                    <div className="flex flex-col gap-5 rounded-md p-6 border-1 bg-indigo-500/10 backdrop-blur-sm border border-slate-500/20">
                        <h2>Check out my new GitHub</h2>
                        <p className="font-light">
                            Curious about the nitty-gritty of my coding adventures? You're
                            invited to explore my GitHub space. I mostly share fun little projects and personal experiments so there is usually not much. Side note: I'm currently refactoring my repositories so some projects will appear in the near future.
                        </p>
                        <a
                            href="https://github.com/HgoMrtn"
                            className="font-semibold bg-indigo-600 px-4 py-3 w-fit rounded-md text-sm inline-flex gap-x-2"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <BiLogoGithub size={20} />
                            Open my GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
