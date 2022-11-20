export const Home = () => {
  return (
    <>
      <div className="lg:h-[100vh] grid grid-cols-1 content-center text-center mt-32 space-y-5 md:mt-52 lg:mt-0 md:space-y-10 lg:space-y-2 2xl:space-y-5 p-2">
        <div className="animate-pulse flex space-x-4">
          <div className="space-y-6">
            <div className="h-2 w-20 md:w-56 bg-black rounded"></div>
            <div className="h-2 w-28 md:w-64 bg-black rounded"></div>
            <div className="h-2 w-36 md:w-72 bg-black rounded"></div>
            <div className="h-2 w-40 md:w-80 bg-black rounded"></div>
            <div className="h-2 w-48 md:w-96 bg-black rounded"></div>
          </div>
        </div>
        <h1
          id="homeText"
          className="uppercase text-5xl md:text-7xl 2xl:text-8xl animate__animated animate__jackInTheBox"
        >
          <span id="welcome" className="underline">
            Welcome
          </span>{" "}
          to my portfolio
        </h1>
        <div className="animate-pulse flex justify-end space-x-4">
          <div className="space-y-6">
            <div className="h-2 w-48 md:w-72 bg-black rounded"></div>
            <div className="h-2 w-56 md:w-80 bg-black rounded"></div>
            <div className="h-2 w-20 md:w-32 bg-black rounded"></div>
            <div className="h-2 w-32 md:w-64 bg-black rounded"></div>
            <div className="h-2 w-40 md:w-56 bg-black rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};
