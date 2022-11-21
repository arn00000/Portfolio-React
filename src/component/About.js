import { useState } from "react";
import resume from "../images/resume.pdf";

export const About = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="mt-12 lg:h-[90vh] p-2 grid grid-cols-1 lg:grid-cols-2  relative lg:mt-12">
        <div className="lg:border-r border-black p-1 lg:p-10 grid content-center">
          <h1
            id="aboutMe"
            className="text-4xl lg:text-7xl font-bold tracking-widest mb-2"
          >
            Ooi Caaron
          </h1>
          <h1 className="uppercase font-bold text-base lg:text-3xl text-teal-500 mb-5">
            Software Developer
          </h1>
          <div className="space-y-2">
            <h1 className="text-xl"> 1 | JULY | 1999</h1>
            <h1 className="text-xl">arn_0000@hotmail.com</h1>
            <h1 className="text-xl">George Town, Penang</h1>
          </div>
          <br />
        </div>
        <div className="lg:border-l border-black grid content-center">
          <div className="lg:ml-14 w-full">
            <h1 className="text-2xl font-bold mb-3">Short Introduction</h1>
            {!click ? (
              <p className="lg:pr-14 text-lg tracking-widest">
                I am 23 years old and my biological name is Ooi Caaron. I
                attended primary and secondary education in penang. While
                waiting for my final high school result, .....
              </p>
            ) : (
              <p className="lg:pr-14 text-lg tracking-widest">
                I am 23 years old and my biological name is Ooi Caaron. I
                attended primary and secondary education in penang. While
                waiting for my final high school result, I took up Martial arts
                known as Boxing as a Amateur figthers. After a period of time I
                realize that a career in this field is short live and took on
                another career working with an interior design company doing
                administrative support. Due to the co running into cash-flow
                issue I was retrenched, however I was lucky to get a position in
                the Hotel line. My services was terminated when Covid-19 strike
                the Hotel line took a heavy beating in Penang. The Hotel ceased
                to operate immediately, again I was retrenched.
              </p>
            )}
            {!click ? (
              <button
                onClick={() => setClick(true)}
                className="text-teal-500 flex items-center font-bold hover:text-teal-700"
              >
                Read more{" "}
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            ) : (
              <button
                onClick={() => setClick(false)}
                className="text-teal-500 flex items-center font-bold hover:text-teal-700"
              >
                Show less{" "}
                <span className="material-symbols-outlined">expand_less</span>
              </button>
            )}
            <br />
            <div className="flex justify-center space-x-8 lg:justify-start lg:space-x-0">
              <a
                href={resume}
                download
                className="px-3 py-2 border border-black shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] hover:bg-white hover:border-white rounded-lg"
              >
                Download Resume
              </a>
              <a
                href="mailto:ars_24@outlook.com?subject='We Looking For Software Engineer'&body='Dear Mr Caaron'"
                className="lg:hidden px-3 py-2 rounded-lg bg-black text-white shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black"
              >
                Hire Me
              </a>
            </div>
            <div className="lg:hidden flex justify-center space-x-8 lg:space-x-0 text-3xl xl:text-3xl mt-5">
              <a
                href="https://www.facebook.com/profile.php?id=100010849962307&mibextid=LQQJ4d"
                atl=""
              >
                <i className="fa-brands fa-facebook hover:text-teal-700"></i>
              </a>
              <a
                href="https://instagram.com/comingsooncn?igshid=YmMyMTA2M2Y="
                atl=""
              >
                <i className="fa-brands fa-instagram hover:text-teal-700"></i>
              </a>
              <a href="https://github.com/arn00000" atl="">
                <i className="fa-brands fa-github hover:text-teal-700"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid absolute lg:top-[40%] lg:left-[45.5%] xl:top-[40%] xl:left-[46.2%] 2xl:top-[40%] 2xl:left-[46.8%] w-20 h-20 rounded-full bg-black text-white flex justify-center items-center hover:bg-white hover:text-black shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
          <a
            href="mailto:ars_24@outlook.com?subject='We Are Looking For Software Developer'&body='Dear Mr Caaron'"
            className=""
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};
