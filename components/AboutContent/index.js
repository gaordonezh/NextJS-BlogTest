import styles from "./styles";
export default function AboutContent() {
  return (
    <>
      <section>
        <div className="about__content__image"></div>
        <div className="about__content__text">
          <h2>Sabemos lo que hacemos</h2>
          <p style={{ textAlign: "justify" }}>
            Para alcanzar el éxito hoy en día, las Instituciones Educativas,
            Congregaciones Religiosas, Organizaciones sin fines de Lucro y en
            general, cualquier empresa necesita estar bien orientada en materia
            laboral, contable, tributaria, administrativa, marketing, etc.
          </p>
          <p style={{ textAlign: "justify" }}>
            Deben ser capaces de asesorarse de las múltiples normas laborales,
            tributarias, administrativas, etc. a fin de no ser multadas por el
            Ministerio de Trabajo, la SUNAT, el INDECOPI, etc., muchas veces
            estas responden más a infracciones cometidas por desconocimiento
            legal que por querer evadirlas en si.
          </p>
          <p style={{ textAlign: "justify" }}>
            El trabajo en múltiples jurisdicciones plantea un sin número de
            complicados cuestionamientos contable, tributario, administrativo,
            etc. que demandan una pronta y acertada atención. Para gerenciar con
            éxito es imprescindible contar con un asesoramiento profesional que
            se distinga por el dominio en el manejo de la normativa legal, por
            su amplia experiencia en el mercado, y especialmente el
            profesionalismo demostrado en el mismo.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span>YURI MONTENEGRO CONTADORES Y AUDITORES</span> nace como
            respuesta a la gran demanda de asesoría contable, tributaria,
            administrativa, etc. especializada. Es un Estudio con profesionales
            especializados en servicios de asesoría contable integral bajo las
            más exigentes normas de atención personalizada y con el más alto
            nivel de desempeño. Damos adecuada y oportuna respuesta a los
            requerimientos globales de nuestros clientes.
          </p>
        </div>
        <style jsx>{styles}</style>
      </section>
    </>
  );
}
