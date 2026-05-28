import "./Home.css";
// import headshot from "../images/headshot.jpg";
import headshot from "../images/headshot-bearded-darker-background.png";
import thirtyNineReview from "../images/27east-transparent-red-3.png";
import thirtyNineReviewReverse from "../images/27east-transparent-red-reverse.png";
import ThirtyNineStepsPoster from "../images/39-Steps-poster.jpg";
import HomeNavButton from "../components/HomeNavButton";
import { useState, useEffect } from "react";
import Review from "../components/Review.jsx";

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
      </a>
      <div className="reviews">
        <Review
          text="The production is led by Adam Mosebach as Richard Hannay. He is genuine and eases through the comedic moments and movements with grace and vigor. He also plays the sensitive moments in an audience-winning way. He is a special talent."
          source="Hamptons.com"
          sourceLink="https://hamptons.com/hampton-theatre-companys-the-39-steps-delivers-nonstop-laughs-and-brilliant-performances/?shem=rimspwouoe,"
        />
        <Review
          text="All four actors are pitch-perfect and play off each other like they’ve been doing this show for years"
          source="27east.com"
          sourceLink="https://www.27east.com/arts-living/stage-screen/article_ce952aa6-978c-477d-a576-2192d3c2c07c.html"
        />
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
