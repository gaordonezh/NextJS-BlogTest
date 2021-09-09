import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../animations/Sales.json";

export default function HomeHero() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    className: "sample",
  };
  return (
    <>
      <div className="hero__container">
        <div className="hero__text__container">
          <h1>Su Contabilidad en Buenas Manos</h1>
          <p>Somos mucho más que una consultoría</p>
          <Player
            loop
            src={animation}
            style={{ maxWidth: 400, width: "100%" }}
            autoplay={true}
          />
        </div>
        <div className="test-slider">
          <Slider {...settings} style={{ width: "40vw", height: "100vh" }}>
            <div className="hero__image1"></div>
            <div className="hero__image2"></div>
            <div className="hero__image3"></div>
          </Slider>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
