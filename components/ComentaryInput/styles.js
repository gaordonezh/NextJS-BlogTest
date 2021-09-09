import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    text-align: left;
    padding: 25px;
    color: black;
    margin: 0 auto;
    max-width: 600px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .commentary-input,
  .comment-textarea {
    width: 100%;
    padding: 10px;
    outline: none;
    font-size: 16px;
    background-color: #fff;
    border: 2px solid transparent;
  }
  .commentary-input:focus,
  .comment-textarea:focus {
    border: 2px solid ${colors.secondary};
  }
  .comment-label {
    align-self: start;
  }
  .comment-textarea {
    resize: vertical;
  }
  .comment-input-button {
    align-self: flex-end;
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    color: white;
    background-color: ${colors.secondary};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 900;
  }
`;
