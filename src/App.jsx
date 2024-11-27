import { useState } from "react";
import { BiEnvelope, BiLogoGithub, BiRocket } from "react-icons/bi";

{/* Skills Logos */ }
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

{/* Companies Logos */ }
import logoGoogleDomains from "./assets/logo-google-domains.svg";
import logoClinist from "./assets/logo-clinist.svg";
import logoSping from "./assets/logo-sping.svg";
import logoVocBee from "./assets/logo-vocbee.svg";


import ParticlesContainer from "./components/ParticlesContainer";

export default function App() {
  const [count, setCount] = useState(0);

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
                websites and applications. Working with startup and large companies.
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
        <div className="flex flex-col p-10 gap-16 max-w-5xl">
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

          {/* MY SKILLS */}
          <div className="flex flex-col gap-4 mb-5">
            <h2>My Skills</h2>
            {/* Tech Logos */}
            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img
                  className="h-8 w-auto"
                  src={logoJavascript}
                  alt="JavaScript"
                />
                <p>JavaScript</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img
                  className="h-8 w-auto"
                  src={logoHtmlcss}
                  alt="HTML and CSS"
                />
                <p>HTML/CSS</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoReact} alt="React" />
                <p>React</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoVite} alt="Vite" />
                <p>Vite</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoNext} alt="Next.js" />
                <p>Next.js</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-7 w-auto" src={logoTailwind} alt="Tailwind" />
                <p>Tailwind</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoRedux} alt="Redux" />
                <p>Redux</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoNode} alt="Node" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoExpress} alt="Express" />
                <p>Express.js</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoMongodb} alt="Mongodb" />
                <p>MongoDB</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoGithub} alt="Github" />
                <p>GitHub</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]">
                <img className="h-8 w-auto" src={logoDocker} alt="Docker" />
                <p>Docker</p>
              </div>
            </div>
          </div>

          {/* COMPANIES */}
          <div className="flex flex-col gap-4 mb-5">
            <h2>Some Products I Worked On</h2>
            {/* Companies Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="https://sping.app"
                className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="h-8 w-auto"
                  src={logoSping}
                  alt="Sping"
                />
                <p>Sping</p>
              </a>

              <a
                href="https://clinist.io?lang=en_us"
                className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="h-8 w-auto"
                  src={logoClinist}
                  alt="Clinist"
                />
                <p>Clinist</p>
              </a>

              <a
                href="https://domains.google.com"
                className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-8 w-auto"
                  src={logoGoogleDomains}
                  alt="Google Domains"
                />
                <p>Google Domains</p>
              </a>

              <a
                href="https://vocbee.com"
                className="flex flex-col items-center gap-3 px-6 py-4 bg-slate-800/90 rounded-[16px]"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="h-8 w-auto"
                  src={logoVocBee}
                  alt="VocBee"
                />
                <p>VocBee</p>
              </a>


            </div>
          </div>

          {/* SEND A MESSAGE */}
          <div className="flex flex-col gap-5 bg-slate-800/90 rounded-[16px] p-6">
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
          <div className="flex flex-col gap-5 bg-slate-800/90 rounded-[16px] p-6">
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
