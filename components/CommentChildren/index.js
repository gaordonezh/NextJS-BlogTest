import React, { useState } from "react";
import moment from "moment";
import "moment/locale/es";
import styles from "./styles";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

moment.locale("es");

export default function CommentChildren({ item }) {
  const [reply, setReply] = useState(false);

  return (
    <>
      <div style={{ border: "2px solid #fff" }}>
        <button className="show-button" onClick={() => setReply(!reply)}>
          {reply ? (
            <div className="show-button-text">
              <RiArrowUpSLine style={{ fontSize: 20 }} />
              <p>Ocultar Respuestas</p>
            </div>
          ) : (
            <div className="show-button-text">
              <RiArrowDownSLine style={{ fontSize: 20 }} />
              <p> Ver Respuestas</p>
            </div>
          )}
        </button>
        {reply ? (
          <div style={{ marginLeft: "20px" }}>
            {item.map((x, i) => (
              <div style={{ marginBottom: "15px" }} key={i}>
                <p className="children-author">
                  <span style={{ fontWeight: "bold" }}>{x.author}</span> -{" "}
                  {moment(x.date).fromNow()}
                </p>
                <div className="children-comment">
                  <p className="children-comment-text">{x.comment}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
