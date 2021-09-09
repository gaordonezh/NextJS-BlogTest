import styles from "./styles";
import CommentaryItem from "../CommentaryItem";
import CommentaryInput from "../ComentaryInput";

export default function CommentaryBox({ comments, obtainNews, notice }) {
  return (
    <>
      <section>
        <h3>Comentarios</h3>
        {comments.length > 0 && comments ? (
          comments.map((e, i) => (
            <CommentaryItem comment={e} refresh={obtainNews} key={i} />
          ))
        ) : (
          <p></p>
        )}
      </section>
      <CommentaryInput notice={notice && notice._id} refresh={obtainNews} />
      <style jsx>{styles}</style>
    </>
  );
}
