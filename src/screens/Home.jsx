import "./Home.css";
// import headshot from "../images/headshot.jpg";
import headshot from "../images/headshot-bearded-darker-background.png";
import thirtyNineReview from "../images/27east-transparent-red-3.png";
import thirtyNineReviewReverse from "../images/27east-transparent-red-reverse.png";
import ThirtyNineStepsPoster from "../images/39-Steps-poster.jpg";
import HomeNavButton from "../components/HomeNavButton";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Home({ updateBannerNav }) {
  updateBannerNav(false);

  console.log("window width", useWindowDimensions().width);
  const smallWindow = useWindowDimensions().width <= 1450;

  let showCurrentShowSection = false;

  showCurrentShowSection = true;

  const navButtonSection = (
    <div className={`home-nav ${showCurrentShowSection ? "yesCurrentShow" : "noCurrentShow"}`}>
      <HomeNavButton name="Bio" linkTo="/bio" />
      <HomeNavButton name="Resume" linkTo="/resume" />
      <HomeNavButton name="Photos" linkTo="/photos" />
      <HomeNavButton name="Media" linkTo="/media" />
      <HomeNavButton name="Contact" linkTo="/contact" />
    </div>
  );

  const headshotSection = (
    <div
      className={`headshot-container ${showCurrentShowSection ? "yesCurrentShow" : "noCurrentShow"}`}
    >
      <img src={headshot} alt="headshot" className={`headshot ${showCurrentShowSection ? "headshot-yes-current-show" : "headshot-no-current-show"}`}></img>
    </div>
  );

  const currentShowSection = (
    <div
      className={`current-show-container ${showCurrentShowSection ? "yesCurrentShow" : "noCurrentShow"}`}
    >
      <div className='show-and-review'>
        <a href="https://www.hamptontheatre.org/?page_id=7675" target="_blank">
          <img
            src={ThirtyNineStepsPoster}
            alt="39 Steps"
            className="current-show"
          ></img>
        </a>
        <img
          src={smallWindow ? thirtyNineReviewReverse : thirtyNineReview}
          alt="27east review"
          className='review'
        ></img>
      </div>
    </div>
  );

  return smallWindow ? (
    <div className={`home-div ${showCurrentShowSection ? "" : "home-div-no-show"}`}>
      <div className="home-group-for-phones">
        {navButtonSection}
        {headshotSection}
      </div>
      {showCurrentShowSection && currentShowSection}
    </div>
  ) : (
    <div className={`home-div ${showCurrentShowSection ? "" : "home-div-no-show"}`}>
      {navButtonSection}
      {headshotSection}
      {showCurrentShowSection && currentShowSection}
    </div>
  );
}

export default Home;
