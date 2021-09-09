import React, { useState } from "react";
import axios from "axios";
import api from "../../utils/api";
import styles from "./styles";

export default function CommentaryInput(props) {
  const { notice, refresh, identificador = null, setVisible } = props;
  const [autor, setAutor] = useState("");
  const [comment, setComment] = useState("");

  const sendComment = async (event) => {
    event.preventDefault();
    try {
      let data = {
        comment: comment,
        identificador: identificador,
        author: autor,
        date: Date.now(),
        notice: notice,
      };
      await axios.post(`${api}/comment`, data);
      refresh();
      clearInputs();
      if (Boolean(setVisible)) {
        setVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearInputs = () => {
    setAutor("");
    setComment("");
  };

  return (
    <>
      <form onSubmit={sendComment}>
        <label className="comment-label">
          Nombre <span style={{ color: "red" }}>*</span>
        </label>
        <input
          className="commentary-input"
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
        />
        <label className="comment-label" style={{ paddingTop: 10 }}>
          Comentario <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          className="comment-textarea"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button className="comment-input-button" type="submit">
          AGREGAR
        </button>
      </form>
      <style jsx>{styles}</style>
    </>
  );
}
