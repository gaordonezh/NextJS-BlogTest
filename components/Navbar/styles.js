import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";

export default css`
  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    transition: all 300ms ease-in-out;
  }
  li {
    margin: 10px;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }
  li:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colors.primary};
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }
  li:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  nav {
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  a {
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
  }
  .selected {
    font-size: 1.05rem;
    font-weight: 600;
    border-bottom: 2px solid ${colors.primary};
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 100%;
    height: 50px;
    z-index: 90;
  }
  .nav-icon {
    position: absolute;
    top: 32.5px;
    right: 32.5px;
    width: 30px;
    height: 30px;
    visibility: hidden;
    opacity: 0;
  }
  .active {
    transform: translateX(0%);
  }
  .navbar-filter {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    visibility: hidden;
  }

  @media (max-width: ${breakpoints.tablet}) {
    ul {
      position: absolute;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      background-color: white;
      position: absolute;
      top: 0;
      right: 0;
      width: 250px;
      transform: translateX(200%);
    }
    .nav-icon {
      visibility: visible;
      opacity: 1;
      z-index: 101;
    }
    .navbar-filter-active {
      visibility: visible;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    ul {
      width: 150px;
    }
  }
`;
