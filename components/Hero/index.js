import styles from "./styles";
export default function AboutHero({ title }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
