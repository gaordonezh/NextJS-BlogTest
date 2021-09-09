import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";

export default css`
  .show-button {
    color: #fff;
    border: none;
    outline: none;
    padding: 5px;
    cursor: pointer;
    background-color: transparent;
  }
  .show-button-text {
    display: flex;
    align-items: center;
  }
  .children-author {
    background-color: ${colors.primary};
    color: white;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .children-comment {
    padding: 10px;
    background-color: white;
  }
`;
