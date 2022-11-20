import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();
  if ("/skill" === pathname) {
    console.log("true");
  } else {
    console.log("false");
  }

  const [acn2, setAcn2] = useState("");
  const [acn3, setAcn3] = useState("");
  const [acn4, setAcn4] = useState("");
  const [acn5, setAcn5] = useState("");

  const change = (id) => {
    // setAcn1("");

    // if (id === "home") setAcn1("border-y border-white");
    if (id === pathname) setAcn2("border-y border-white");
    else if (id === pathname) setAcn3("border-y border-white ");
    else if (id === pathname) setAcn4("border-y border-white");
    else if (id === pathname) setAcn5("border-y border-white");
    else if (id !== pathname) {
      setAcn2("");
      setAcn3("");
      setAcn4("");
      setAcn5("");
    }
  };

  return (
    <>
      <div>
        {/* <div className={`${acn1} cursor-pointer flex`}>
          <Link
            to="/"
            id="home"
            onClick={() => {
              change("home");
            }}
            className={`nav-link w-full py-6 pl-20 hover:text-red-500 hover:pl-2 duration-1000 ease-in-out delay-200 cursor-pointer`}
          >
            Home
          </Link>
        </div> */}
        <div className={`${acn2} cursor-pointer flex`}>
          <Link
            to="/skills"
            onClick={() => {
              change("/skill");
            }}
            className={`nav-link w-full py-6 pl-20 hover:text-orange-500 hover:pl-2 duration-1000 ease-in-out delay-200 cursor-pointer`}
          >
            Skills
          </Link>
        </div>
        <div className={`${acn3} cursor-pointer flex`}>
          <Link
            to="/projects"
            onClick={() => {
              change("/project");
            }}
            className={`nav-link w-full  py-6 pl-20 hover:text-green-500 hover:pl-2 duration-1000 ease-in-out delay-200 cursor-pointer`}
          >
            Projects
          </Link>
        </div>
        <div className={`${acn4} cursor-pointer flex`}>
          <Link
            to="/achievement"
            onClick={() => {
              change("/achievement");
            }}
            className={`nav-link w-full  py-6 pl-20 hover:text-blue-500 hover:pl-2 duration-1000 ease-in-out delay-200 cursor-pointer`}
          >
            Achievement
          </Link>
        </div>
        <div className={`${acn5} cursor-pointer flex`}>
          <Link
            to="/aboutme"
            onClick={() => {
              change("/about");
            }}
            className={`nav-link w-full  py-6 pl-20 hover:text-indigo-500 hover:pl-2 duration-1000 ease-in-out delay-200 cursor-pointer`}
          >
            About me
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly text-2xl xl:text-3xl">
        <a
          href="https://www.facebook.com/profile.php?id=100010849962307&mibextid=LQQJ4d"
          atl=""
        >
          <i className="nav-link fa-brands fa-facebook hover:text-black"></i>
        </a>
        <a href="https://instagram.com/comingsooncn?igshid=YmMyMTA2M2Y=" atl="">
          <i className="nav-link fa-brands fa-instagram hover:text-black"></i>
        </a>
        <a href="https://github.com/arn00000" atl="">
          <i className="nav-link fa-brands fa-github hover:text-black"></i>
        </a>
      </div>
    </>
  );
};
