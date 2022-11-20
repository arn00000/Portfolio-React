import { useState } from "react";

export const Skill = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);
  const [click7, setClick7] = useState(false);
  const [click8, setClick8] = useState(false);
  const [click9, setClick9] = useState(false);
  const [click10, setClick10] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center p-2 gap-5 animate__animated animate__zoomIn text-9xl mt-16">
        {click ? (
          <div
            onClick={() => setClick(false)}
            id="iconText"
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              HTML
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-html5-plain"></i>
            </h1>
          </div>
        )}

        {click2 ? (
          <div
            onClick={() => setClick2(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML or XML.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              CSS
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick2(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-css3-plain"></i>
            </h1>
          </div>
        )}

        {click3 ? (
          <div
            onClick={() => setClick3(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              JavaScript, often abbreviated as JS, is a programming language
              that is one of the core technologies of the World Wide Web,
              alongside HTML and CSS.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              JavaScript
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick3(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-javascript-plain"></i>
            </h1>
          </div>
        )}

        {click4 ? (
          <div
            onClick={() => setClick4(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              PHP is a general-purpose scripting language geared toward web
              development.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              PHP
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick4(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-php-plain"></i>
            </h1>
          </div>
        )}

        {click5 ? (
          <div
            onClick={() => setClick5(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2 overflow-y-auto"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              REACT
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick5(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-react-original"></i>
            </h1>
          </div>
        )}

        {click6 ? (
          <div
            onClick={() => setClick6(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              Next.js is an open-source web development framework created by
              Vercel enabling React-based web applications with server-side
              rendering and generating static websites.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              NEXT.<span className="text-2xl">JS</span>
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick6(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-nextjs-original"></i>
            </h1>
          </div>
        )}

        {click7 ? (
          <div
            onClick={() => setClick7(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              Kotlin is a cross-platform, statically typed, general-purpose
              programming language with type inference.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              KOTLIN
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick7(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-kotlin-plain"></i>
            </h1>
          </div>
        )}

        {click8 ? (
          <div
            onClick={() => setClick8(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              Tailwind CSS is an open source CSS framework.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              TAILWIND CSS
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick8(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-tailwindcss-plain"></i>
            </h1>
          </div>
        )}

        {click9 ? (
          <div
            onClick={() => setClick9(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              Bootstrap is a free and open-source CSS framework.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              BOOTSTRAP
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick9(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-bootstrap-plain"></i>
            </h1>
          </div>
        )}
        {click10 ? (
          <div
            onClick={() => setClick10(false)}
            className="grid content-between bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl p-2"
          >
            <h1 className="text-base animate__animated animate__fadeInDown">
              Node.js is an open-source server environment. Node.js is a
              back-end JavaScript runtime environment.
            </h1>
            <h1 className="text-3xl underline animate__animated animate__fadeInUp">
              NODE.<span className="text-2xl">js</span>
            </h1>
          </div>
        ) : (
          <div
            onClick={() => setClick10(true)}
            id="iconDiv"
            className="grid content-center bg-zinc-200 hover:bg-white hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] transition duration-700 cursor-pointer h-56 rounded-2xl"
          >
            <h1 id="icon">
              <i className="devicon-nodejs-plain"></i>
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
