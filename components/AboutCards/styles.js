import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";
export default css`
  /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 275px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 30px */
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: ${colors.primary};
    color: white;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
    padding: 30px;
  }
  section {
    display: flex;
    margin: 50px 0;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (max-width: ${breakpoints.mobile}) {
    section {
      flex-direction: column;
    }
    .flip-card {
      margin: 20px 0;
    }
  }
`;
