import MainComponent from "../../components/MainComponent";
import Hero from "../../components/Hero";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";

export default function About() {
  return (
    <MainComponent
      title="CONTACTO | Yuri Manuel Montenegro Barrantes"
      description="Página web | contacto | Yuri Manuel Montenegro Barrantes"
    >
      <Hero title="CONTACTO" />
      <ContactForm />
      <Map />
    </MainComponent>
  );
}
