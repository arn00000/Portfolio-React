import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className=" w-full pt-2 lg:w-4/5 z-50 fixed top-0 grid grid-cols-1 lg:grid-cols-3 justify-items-center text-3xl md:text-4xl bg-white">
        <Link
          to="/"
          className="hidden lg:block home material-symbols-outlined text-4xl md:text-5xl"
        >
          home
        </Link>
        <h1 id="name" className="uppercase">
          CɅɅᏒOn
        </h1>
        <h1 className="hidden lg:block underline text-2xl text-teal-500">
          {pathname.substring(1)}
        </h1>
      </nav>
    </>
  );
};
