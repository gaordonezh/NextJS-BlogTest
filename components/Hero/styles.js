import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  div {
    height: 25vh;
    width: 100%;
    background-image: url("/images/homeHero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  h1 {
    background-color: rgba(0, 0, 0, 0.6);
    margin: 0;
    height: 100%;
    /* color: ${colors.primary}; */
    color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
