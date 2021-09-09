import styles from "./styles";

export default function ContactForm() {
  return (
    <>
      <form>
        <div className="form-name-container">
          <div className="form-name name">
            <label>Nombre</label>
            <input type="text" name="nombre" required></input>
          </div>
          <div className="form-name lastname">
            <label>Apellido</label>
            <input type="text" name="apellido" required></input>
          </div>
        </div>
        <label>Email</label>
        <input type="email" name="email" required></input>
        <label>Consulta</label>
        <textarea rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <style jsx>{styles}</style>
    </>
  );
}
