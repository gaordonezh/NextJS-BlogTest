import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles";

const list = [
  {
    title: "Asesoría Integral",
    description:
      "Tenemos soluciones para que empresas como la suya puedan contar con el mejor asesoramiento y el soporte tributario (SUNAT), laboral (SUNAFIL), administrativo (INDECOPI) y contable que buscaban, con unos honorarios ajustados a sus necesidades.",
    img: "/images/asesoria-icon.png",
  },
  {
    title: "Experiencia",
    description:
      "Contamos con un equipo altamente calificado, capacitado y con alto nivel de compromiso y con una gran motivación, que permiten prestar un servicio eficaz con las mayores garantías, en plazos razonables y con un alto grado de calidad y satisfacción.",
    img: "/images/experience-icon.png",
  },
  {
    title: "Responsabilidad",
    description:
      "Nuestra RESPONSABILIDAD hace que nuestro servicio sea un valor agregado para su negocio, el cual le permite proyectar, planificar y gestionar los objetivos que se propone en su empresa.",
    img: "/images/responsabilidad-icon.png",
  },
];

const info = [
  "Somos un equipo de profesionales que trabajamos profesionalmente para asegurar el éxito de nuestros clientes.",
  "Personalizamos a cada cliente.",
  "Cumplimos con los plazos establecidos.",
  "Trabajamos con ética, transparencia y confianza.",
  "Somos flexibles, nos adaptamos a las necesidades de su empresa en estos tiempos de Pandemia.",
];

const clients = [
  {
    title: "ACUNTA",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/acunta.png",
  },
  {
    title: "ANUNCIATA",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/anunciata.png",
  },
  {
    title: "BAIRON",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/bairon.png",
  },
  {
    title: "CABLE STAR",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/cable_star.png",
  },
  {
    title: "CASA VIDA",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/casa_vida.png",
  },
  {
    title: "FRANCISCO COLL",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/francisco_coll.png",
  },
  {
    title: "JORGE WASHINGTON",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/gw.png",
  },
  {
    title: "KAREN HORNEY",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/karen_horney.png",
  },
  {
    title: "MATER PURISSIMA",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/mater_purissima.png",
  },
  {
    title: "RH",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/RH.png",
  },
  {
    title: "SAN JUDAS TADEO",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/san_judas_tadeo.png",
  },
  {
    title: "SAN SALVADOR",
    img: "https://files-web.s3.us-east-2.amazonaws.com/netappperu-oficial/clients/san_salvador.png",
  },
];

export default function HomeContent() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    className: "sample",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row">
            {list.map((ev, i) => (
              <article className="service-item" data-aos="zoom-in" key={i}>
                <div className="icon">
                  <img src={ev.img} alt="service" style={{ height: "50px" }} />
                </div>
                <div className="text">
                  <h4>{ev.title}</h4>
                  <p style={{ textAlign: "justify", color: "#eee" }}>{ev.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="more-about-us" style={{overflow: 'hidden'}}>
        <article className="container">
          <div className="content_right">
            <div className="content" data-aos="fade-left">
              <h2>¿Por qué elegirnos?</h2>
              <br />
              {info.map((ev, i) => (
                <div style={{ display: "flex" }} key={i}>
                  <img
                    src="/images/check.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginTop: 3,
                      marginRight: 8,
                    }}
                    alt="info"
                  />
                  <p style={{ paddingBottom: 10 }}>{ev}</p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <div style={{ paddingBottom: 50 }}>
        <h2 style={{ padding: "50px 0", color: "white" }}> Clientes </h2>
        <Slider {...settings}>
          {clients.map((e, i) => (
            <div data-aos="zoom-out" key={i}>
              <img src={e.img} className="clients-logo" alt="client" />
              {/* <p>{e.title}</p> */}
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
