import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";

export default css`
  footer {
    position: relative;
    min-height: calc(100vh - 95px);
    margin: 50px 0;
  }

  .footer-prueba {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(63, 150, 171, 0.1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: 0;
  }

  .footer-top {
    border: 1px solid #f2f2f2;
    padding: 25px 15px 40px 15px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.25);
    max-width: 500px;
    margin: 50px auto 0 auto;
    position: relative;
  }
  .footer-top h4 {
    font-size: 25px;
    color: white;
  }
  .footer-top p {
    font-size: 17px;
    color: white;
    padding-bottom: 30px;
  }
  .footer-top a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    border: 2px solid #fff;
    padding: 15px 25px;
  }

  .footer__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 9;
    max-width: 1280px;
    margin: 25px auto;
  }
  .footer__content-left {
  }
  .footer__content-left .social {
    margin-top: 10vh;
    font-size: 40px;
    display: flex;
    justify-content: space-between;
  }
  .footer__content-right {
  }
  .footer__content-right h3 {
    font-size: 30px;
    text-transform: uppercase;
  }
  .copyright {
    margin-top: 15vh;
    color: #555;
    position: relative;
    z-index: 9;
    font-weight: bold;
  }
  .copyright a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: ${breakpoints.mobile}) {
    footer {
      padding: 10px;
    }
    .footer__content {
      flex-direction: column;
    }
  }
`;
