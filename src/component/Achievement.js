import cert1 from "../images/cert1.jpg";
import cert2 from "../images/cert2.jpg";
import cert3 from "../images/cert3.jpg";
import cert4 from "../images/cert4.jpg";
import cert5 from "../images/cert5.jpg";

export const Achievement = () => {
  return (
    <>
      <div id="achieve1">
        <div id="achieve2">
          <div className="slider md:p-2 text-2xl">
            <span style={{ "--i": 1 }}>
              <img
                src={`${cert2}?auto=compress`}
                alt=""
                className="shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]"
              />
            </span>

            <span style={{ "--i": 2 }}>
              <img
                src={`${cert3}?auto=compress`}
                alt=""
                className="shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]"
              />
            </span>
            <span style={{ "--i": 3 }}>
              <img
                src={`${cert1}?auto=compress`}
                alt=""
                className="shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] grid content-center"
              />
            </span>
            <span style={{ "--i": 4 }}>
              <img
                src={`${cert4}?auto=compress`}
                alt=""
                className="shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]"
              />
            </span>
            <span style={{ "--i": 5 }}>
              <img
                src={`${cert5}?auto=compress`}
                alt=""
                className="shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
