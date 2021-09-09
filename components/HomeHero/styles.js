import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";

export default css`
  .hero__container {
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .hero__image1 {
    background-image: url("/images/homeHero.jpg");
  }
  .hero__image2 {
    background-image: url("/images/homeHero2.jpg");
  }
  .hero__image3 {
    background-image: url("/images/homeHero3.jpg");
  }
  .hero__image1,
  .hero__image2,
  .hero__image3 {
    position: relative;
    width: 40vw;
    height: calc(100vh - 95px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 100vh;
  }
  .hero__image1::after,
  .hero__image2::after,
  .hero__image3::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .hero__text__container {
    width: 60%;
    text-align: center;
    color: white;
  }
  .slick-slider {
    width: 40vw !important;
    height: 100vh !important;
  }
  @media (max-width: ${breakpoints.tablet}) {
    .hero__container {
      background-color: transparent;
    }
    .hero__image1 {
      display: none;
    }
    .hero__text__container {
      width: 100%;
    }
    .test-slider {
      display: none;
    }
  }
`;
