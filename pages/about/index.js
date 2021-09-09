import AboutCards from "../../components/AboutCards";
import AboutContent from "../../components/AboutContent";
import Hero from "../../components/Hero";
import MainComponent from "../../components/MainComponent";

export default function About() {
  return (
    <MainComponent
      title="ACERCA DE MI | Yuri Manuel Montenegro Barrantes"
      description="Página web | acerca de mi | Yuri Manuel Montenegro Barrantes"
    >
      <Hero title="¿QUIENES SOMOS?" />
      <AboutContent />
      <AboutCards />
    </MainComponent>
  );
}
