import React, { useState } from "react";
import moment from "moment";
import "moment/locale/es";
import styles from "./styles";
import CommentChildren from "../CommentChildren";
import CommentaryInput from "../ComentaryInput";

moment.locale("es");
export default function CommentaryItem({ comment, refresh }) {
  const [responder, setResponder] = useState(false);

  return (
    <>
      <article style={{ marginBottom: "15px" }}>
        <div>
          <p className="comentaryBox-author">
            <span style={{ fontWeight: "bold" }}>{comment.author}</span> -{" "}
            {moment(comment.date).fromNow()}
          </p>
        </div>
        <div className="comentaryBox-comment-container">
          <p className="comentaryBox-comment-text">{comment.comment}</p>
          <button
            className="comentaryBox-comment-replyButton"
            onClick={() => setResponder(!responder)}
          >
            Responder
          </button>
        </div>
        {comment.children && comment.children.length > 0 ? (
          <CommentChildren item={comment.children} />
        ) : null}
        <div
          className={`reply ${responder ? "reply-visible" : "reply-invisible"}`}
        >
          <CommentaryInput
            notice={comment.notice}
            identificador={comment._id}
            refresh={refresh}
            setVisible={setResponder}
          />
        </div>
      </article>
      <style jsx>{styles}</style>
    </>
  );
}
