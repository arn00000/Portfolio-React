import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div>
        <div className={`cursor-pointer flex`}>
          <NavLink
            to="/skills"
            className={`nav-link w-full py-6 pl-20 hover:text-orange-500 hover:pl-2 duration-700 ease-in-out delay-200 cursor-pointer`}
          >
            Skills
          </NavLink>
        </div>
        <div className={` cursor-pointer flex`}>
          <NavLink
            to="/projects"
            className={`nav-link w-full  py-6 pl-20 hover:text-green-500 hover:pl-2 duration-700 ease-in-out delay-200 cursor-pointer`}
          >
            Projects
          </NavLink>
        </div>
        <div className={`cursor-pointer flex`}>
          <NavLink
            to="/achievement"
            className={`nav-link w-full  py-6 pl-20 hover:text-blue-500 hover:pl-2 duration-700 ease-in-out delay-200 cursor-pointer`}
          >
            Achievement
          </NavLink>
        </div>
        <div className={`cursor-pointer flex`}>
          <NavLink
            to="/aboutme"
            className={`nav-link w-full  py-6 pl-20 hover:text-indigo-500 hover:pl-2 duration-700 ease-in-out delay-200 cursor-pointer`}
          >
            About me
          </NavLink>
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
