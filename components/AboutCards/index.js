import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./styles";

export default function AboutCards() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="flip-card" data-aos="fade-right">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="card__icon"
              src="/images/mision-white.png"
              width={150}
              height={150}
              alt="misión"
            />
            <h3>Misión</h3>
          </div>
          <div className="flip-card-back">
            <p style={{ textAlign: "justify" }}>
              Desarrollar y consolidar el negocio de nuestros clientes y
              accionistas generándoles valor permanente y sostenible en el
              tiempo.
            </p>
          </div>
        </div>
      </div>

      <div className="flip-card" data-aos="fade-left">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="card__icon"
              src="/images/vision-white.png"
              width={150}
              height={150}
              alt="visión"
            />
            <h3>Visión</h3>
          </div>
          <div className="flip-card-back">
            <p style={{ textAlign: "justify" }}>
              Ser la empresa líder en el mercado de la consultoría dirigida a
              empresas medianas y pequeñas, reconocida por su flexibilidad y
              excelencia en su trabajo.
            </p>
          </div>
        </div>
      </div>
      <style jsx> {styles} </style>
    </section>
  );
}
