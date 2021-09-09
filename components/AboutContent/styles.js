import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";

export default css`
  span {
    color: ${colors.secondary};
    font-weight: bold;
  }
  section {
    max-width: 1200px;
    display: flex;
    margin: auto;
    padding: 40px 0;
  }
  h2 {
    color: ${colors.secondary};
  }
  .about__content__image {
    background-image: url(/images/nosotros.png);
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .about__content__text {
    padding: 20px;
    width: 100%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    section {
      flex-direction: column-reverse;
      padding: 0;
    }
    .about__content__text {
      width: 100%;
    }
    .about__content__image {
      width: 100%;
      height: 300px;
    }
  }
`;
