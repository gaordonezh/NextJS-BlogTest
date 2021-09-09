import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";

export default css`
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
    margin: 50px auto;
    margin-top: 30px;
    padding: 0 20px;
    text-align: left;
    background-color: #aaa;
  }
  input {
    padding: 10px;
    outline: none;
    border: 2px solid white;
  }
  input:focus {
    border: 2px solid ${colors.primary};
  }
  textarea {
    resize: vertical;
    min-height: 99px;
    outline: none;
    padding: 10px;
    border: 2px solid white;
  }
  textarea:focus {
    border: 2px solid ${colors.primary};
  }
  .form-name-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .form-name {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .name {
    margin-right: 8px;
  }
  .lastname {
    margin-left: 8px;
  }
  label {
    margin-top: 20px;
  }
  button {
    padding: 10px;
    border: none;
    margin: 20px 0;
    color: white;
    background-color: ${colors.primary};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    .form-name-container {
      flex-direction: column;
    }
    .name,
    .lastname {
      margin: 0;
    }
  }
`;
