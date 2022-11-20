import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <>
      <div className="lg:hidden fixed bottom-0 h-16 md:h-24 w-full bg-black">
        <div className="flex items-center justify-around text-white h-full">
          <Link
            to="/skills"
            className="material-symbols-outlined text-4xl md:text-6xl"
          >
            psychology
          </Link>
          <Link
            to="/achievement"
            className="material-symbols-outlined text-4xl md:text-6xl"
          >
            military_tech
          </Link>
          <Link
            to="/"
            className="material-symbols-outlined text-4xl md:text-6xl"
          >
            home
          </Link>
          <Link
            to="/projects"
            className="material-symbols-outlined text-4xl md:text-6xl"
          >
            home_storage
          </Link>
          <Link
            to="/aboutme"
            className="material-symbols-outlined text-4xl md:text-6xl"
          >
            person
          </Link>
        </div>
      </div>
    </>
  );
};
