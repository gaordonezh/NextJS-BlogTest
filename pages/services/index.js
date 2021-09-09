import MainComponent from "../../components/MainComponent";
import Hero from "../../components/Hero";
import ServiceCards from "../../components/ServiceCards";

export default function About() {
  return (
    <MainComponent
      title="SERVICIOS | Yuri Manuel Montenegro Barrantes"
      description="Página web | servicios | Yuri Manuel Montenegro Barrantes"
    >
      <Hero title="SERVICIOS" />
      <ServiceCards />
    </MainComponent>
  );
}
