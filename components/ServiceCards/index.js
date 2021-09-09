let info = [
  {
    title: "Asesoría Contable",
    description:
      "El objetivo principal de la Asesoría Contable es brindarles a nuestros clientes una herramienta útil y oportuna para la toma de decisiones.",
    icon: "/images/chart.png",
  },
  {
    title: "Asesoría Tributaria",
    description:
      "Nuestro servicio de Asesoría Tributaria consiste en la planificación, análisis y diseño de los controles que permitan el estricto cumplimiento de las normas tributarias que rigen a las empresas.",
    icon: "/images/lamp.png",
  },
  {
    title: "Asesoría Laboral",
    description:
      "Nuestro servicio de asesoría laboral es brindarles un servicio especializado en el cumplimiento de la normativa laboral de acuerdo a las normas que rigen a la Institución.",
    icon: "/images/suitcase.png",
  },
  {
    title: "Auditoría",
    description:
      "El objetivo principal de una Auditoría es obtener y evaluar de manera objetiva las evidencias relacionadas con informes sobre actividades económicas y otros acontecimientos relacionados así como la emisión de opinión, que permita tomar decisiones sobre el mismo.",
    icon: "/images/money.png",
  },
  {
    title: "Auditoría Tributaria",
    description:
      "Hacer una revisión de la documentación relacionada a los tributos afectos de la Institución y dar un diagnóstico y una planificación Estratégica que permita evitar contingencias futuras.",
    icon: "/images/pencil.png",
  },
  {
    title: "Outsourcing",
    description:
      "Nos encargamos de procesos que permitan a su empresa ser más ágil, al delegar el control contable, tributario, laboral, etc. a una empresa especializada.",
    icon: "/images/search.png",
  },
];

export default function ServiceCards() {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {info.map((ev, i) => (
            <article className="service-item" key={i}>
              <div className="icon">
                <img src={ev.icon} alt={ev.title} style={{ height: "50px" }} />
              </div>
              <div className="text">
                <h4>{ev.title}</h4>
                <p style={{ textAlign: "justify", color: "#eee" }}>
                  {ev.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
