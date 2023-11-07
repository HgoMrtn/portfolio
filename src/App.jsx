import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col p-10 gap-10 max-w-5xl">
          <h1 className="text-5xl font-semibold text-center">Hugo Martin</h1>
          <div className="flex flex-col gap-4 p-5 bg-gray-800 rounded-md">
            <p>
              Hey there! 👋 I'm Hugo, a passionate Full Stack MERN Developer on
              a mission to turn ideas into beautifully functional websites and
              applications. Whether you need a sleek user interface, a robust
              backend, or anything in between, you're in the right place!
            </p>
            <a
              href="https://flowcv.com/resume/4svasiog8s"
              className="font-semibold bg-gray-700 px-4 py-3 w-fit rounded-md text-sm"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Download my Resume
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h2>What I Do</h2>
            <p>
              ✨ Craft Stunning Websites: From eye-catching designs to seamless
              user experiences, I bring ideas to life with clean, responsive web
              development.
            </p>
            <p>
              💻 Code Magic: JavaScript, Tailwind CSS, React.js, Node.js,
              MongoDB - you name it! I thrive on turning lines of code into
              interactive wonders.
            </p>
            <p>
              🚀 Optimize for Success: I don't just stop at making it work; I
              optimize for speed, performance, and scalability to ensure your
              project runs like a dream. Ready to see your project take flight?
              Let's create something amazing together! Dive into my portfolio,
              check out my work, and let's talk about how we can collaborate.
            </p>
            <p>
              Ready to see your project take flight? Let's create something
              amazing together! Dive into my portfolio, check out my work, and
              let's talk about how we can collaborate.
            </p>
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
              className="font-semibold bg-blue-600 px-4 py-3 w-fit rounded-md text-sm"
            >
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
              className="font-semibold bg-blue-600 px-4 py-3 w-fit rounded-md text-sm"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
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
              className="font-semibold bg-blue-600 px-4 py-3 w-fit rounded-md text-sm"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Open my Xolo Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
