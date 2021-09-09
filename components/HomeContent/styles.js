import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  div {
    color: black;
  }
  h1 {
    text-align: center;
  }
  .home__content__container {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 30px 0;
  }
  .home__content__image {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .home__content__text {
    width: 50%;
    padding: 0 20px;
  }
  .sample {
    margin: 0 auto;
    width: 400px;
  }
  .clients-logo {
    filter: grayscale(100%);
    margin: auto;
    transition: all 300ms ease-in-out;
  }
  .clients-logo:hover{
    filter: grayscale(0);
  }
`;
