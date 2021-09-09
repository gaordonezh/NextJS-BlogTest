import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";

export default css`
  article {
    color: #222;
    padding-bottom: 10px;
  }
  .comentaryBox-author {
    background-color: ${colors.secondary};
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
  }
  .comentaryBox-comment-container {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .comentaryBox-comment-text {
    padding: 10px;
  }
  .comentaryBox-comment-replyButton {
    border: none;
    padding: 10px;
    background: none;
    align-self: flex-end;
    border-left: 2px solid ${colors.secondary};
    border-top: 2px solid ${colors.secondary};
    border-top-left-radius: 15px;
    color: ${colors.secondary};
    font-weight: bold;
    cursor: pointer;
  }
  /* .reply-visible {
    display: block;
  }
  .reply-invisible {
    display: none;
  } */

  .reply-invisible {
    max-height: 0;
    overflow: hidden;
    transition: max-height 300ms linear;
  }

  .reply-visible {
    max-height: 500px;
    overflow: hidden;
    transition: max-height 300ms linear;
  }
`;
