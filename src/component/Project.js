import image1 from "../images/starbuckReserve.png";
import image2 from "../images/ethereum.png";
import image3 from "../images/ufc.png";
import image4 from "../images/litecoin.png";
import image5 from "../images/metamask.png";
import image6 from "../images/dhl.png";
import image7 from "../images/boxingproject.png";
import image8 from "../images/drmanagmentpage.png";

export const Project = () => {
  return (
    <>
      <div className="md:p-2 grid gap-5 text-2xl overflow-y-auto mt-16">
        <div className="animate__animated animate__slideInRight grid grid-cols-1 xl:grid-cols-3 md:hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] xl:border xl:border-black md:m-5">
          <img
            className="xl:col-start-1 xl:col-end-3"
            src={`${image1}?auto=compress`}
            alt=""
          />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              Starbuck Reserve
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__slideInLeft grid grid-cols-1 xl:grid-cols-3 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] xl:border xl:border-black md:m-5">
          <img className="xl:col-start-1 xl:col-end-3" src={image2} alt="" />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              Ethereum
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__slideInRight grid grid-cols-1 xl:grid-cols-3 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] xl:border xl:border-black md:m-5">
          <img className="xl:col-start-1 xl:col-end-3" src={image3} alt="" />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              UFC
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__slideInLeft grid grid-cols-1 xl:grid-cols-3 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] xl:border xl:border-black md:m-5">
          <img className="xl:col-start-1 xl:col-end-3" src={image4} alt="" />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              Litecoin
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]  xl:border xl:border-black md:m-5">
          <img className="xl:col-start-1 xl:col-end-3" src={image5} alt="" />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              Metamask
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]  xl:border xl:border-black md:m-5">
          <img className="xl:col-start-1 xl:col-end-3" src={image6} alt="" />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              DHL
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]  xl:border xl:border-black md:m-5">
          <img className="xl:col-start-1 xl:col-end-3" src={image7} alt="" />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              Boxing Project
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]  xl:border xl:border-black md:m-5">
          <img className="xl:col-start-1 xl:col-end-3" src={image8} alt="" />
          <div className="xl:col-start-3 xl:col-end-4 grid content-center p-2 space-y-3">
            <h1 id="projectText" className="text-2xl md:text-5xl">
              Dr Management Project
            </h1>
            <p className="text-sm md:text-lg">Self practice cloning </p>
            <div className="space-x-2">
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                View Website
              </button>
              <button className="bg-black py-1 px-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md text-sm md:text-lg hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
