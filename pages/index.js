import HomeContent from "../components/HomeContent";
import HomeHero from "../components/HomeHero";
import MainComponent from "../components/MainComponent";

export default function Home() {
  return (
    <MainComponent
      title="INICIO | Yuri Manuel Montenegro Barrantes"
      description="Página web | inicio | Yuri Manuel Montenegro Barrantes"
    >
      <HomeHero />
      <div>
        <HomeContent />
      </div>
    </MainComponent>
  );
}
