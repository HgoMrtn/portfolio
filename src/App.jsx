import { useState } from "react";
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

import { BiEnvelope, BiLogoGithub, BiRocket } from "react-icons/bi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="bg-indigo-600">
          <div className="flex flex-col px-10 py-20 gap-7 max-w-5xl">
            <p>Hi I'm Hugo Martin 👋</p>
            <h1 className="md:text-8xl text-5xl font-bold">
              Full Stack Web Developer
            </h1>
            <p className="max-w-3xl">
              I'm on a mission to turn ideas into beautifully functional
              websites and applications. Whether you need a sleek user
              interface, a robust backend, or anything in between, you're in the
              right place!
            </p>
            <a
              href="https://flowcv.com/resume/4svasiog8s"
              className="font-semibold bg-white text-indigo-600 px-4 py-3 w-fit rounded-md hover:bg-indigo-100"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Download my Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col p-10 gap-16 max-w-5xl">
          <div className="flex flex-col gap-4">
            <h2 className="mb-3">What I Do</h2>
            <h3>✨ Craft Stunning Websites</h3>
            <p>
              From eye-catching designs to seamless user experiences, I bring
              ideas to life with clean, responsive web development.
            </p>
            <h3>💻 Code Magic</h3>
            <p>
              JavaScript, Tailwind CSS, React.js, Node.js, MongoDB - you name
              it! I thrive on turning lines of code into interactive wonders.
            </p>
            <h3>🚀 Optimize for Success</h3>
            <p>
              I don't just stop at making it work; I optimize for speed,
              performance, and scalability to ensure your project runs like a
              dream. Ready to see your project take flight? Let's create
              something amazing together! Dive into my portfolio, check out my
              work, and let's talk about how we can collaborate.
            </p>
            <p>
              Let's create something amazing together! Dive into my portfolio,
              check out my work, and let's talk about how we can collaborate.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-5">
            <h2>My Skills</h2>
            {/* Tech Logos */}
            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img
                  className="h-8 w-auto"
                  src={logoJavascript}
                  alt="JavaScript"
                />
                <p>JavaScript</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img
                  className="h-8 w-auto"
                  src={logoHtmlcss}
                  alt="HTML and CSS"
                />
                <p>HTML/CSS</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoReact} alt="React" />
                <p>React</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoVite} alt="Vite" />
                <p>Vite</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoNext} alt="Next.js" />
                <p>Next.js</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-7 w-auto" src={logoTailwind} alt="Tailwind" />
                <p>Tailwind</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoRedux} alt="Redux" />
                <p>Redux</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoNode} alt="Node" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoExpress} alt="Express" />
                <p>Express.js</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoMongodb} alt="Mongodb" />
                <p>MongoDB</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoGithub} alt="Github" />
                <p>GitHub</p>
              </div>

              <div className="flex flex-col items-center gap-3 px-6 py-4 bg-gray-800 rounded-md">
                <img className="h-8 w-auto" src={logoDocker} alt="Docker" />
                <p>Docker</p>
              </div>
            </div>
          </div>

          {/* SEND A MESSAGE */}
          <div className="flex flex-col gap-5 border border-gray-500 rounded-md p-5">
            <h2>Shoot me a message</h2>
            <p>
              Have a project in mind or just want to chat about all things tech?
              I'm all ears! Fill out the form below, and let's start the
              conversation. Whether it's a cool collaboration idea, a freelance
              gig, or just a friendly hello, I can't wait to hear from you!
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
          <div className="flex flex-col gap-5 border border-gray-500 rounded-md p-5">
            <h2>Check out my new GitHub</h2>
            <p>
              Curious about the nitty-gritty of my coding adventures? You're
              invited to explore my GitHub space, where lines of code come to
              life! From open-source contributions to personal passion projects,
              I'm refactoring my repositories and everything will be available
              soon.
            </p>
            <a
              href="https://github.com/HgoMrtn/welcome"
              className="font-semibold bg-indigo-600 px-4 py-3 w-fit rounded-md text-sm inline-flex gap-x-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <BiLogoGithub size={20} />
              Open my GitHub Profile
            </a>
          </div>

          {/* OPEN MY XOLO PROFILE */}
          <div className="flex flex-col gap-5 border border-gray-500 rounded-md p-5">
            <h2>Explore my projects on Xolo</h2>
            <p>
              Xolo is my digital playground where I showcase my best work, share
              my passion projects, and highlight the innovative solutions I've
              crafted. It's the go-to spot to see my skills in action, browse
              through detailed project descriptions, and maybe even find some
              inspiration for your own ideas!
            </p>
            <a
              href="https://app.xolo.io/profile/hugomartin"
              className="font-semibold bg-indigo-600 px-4 py-3 w-fit rounded-md text-sm inline-flex gap-x-2"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <BiRocket size={20} />
              Open my Xolo Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
