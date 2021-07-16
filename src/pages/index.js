import { useState } from "react";
import DivHome from "../components/layout/DivHome";
import Nav from "../components/Nav";
import Sobre from "../components/About";

function Home() {
  const [menuControl, setMenuControl] = useState({
    view: 1,
    title: "Pokebook",
  });

 function renderSwitch(param){
    switch(param) {
      case 1:
        return <Nav setMenuControl={setMenuControl} />
      case 2: 
      return <Sobre setMenuControl={setMenuControl} content="Selecione a geração de pokemons desejada e tenha acesso a uma listagem, em seguida escolha um pokemon para ter informações sobre ele."/>
      case 3: 
      return <Sobre setMenuControl={setMenuControl} content="Contrução do site feita com Nextjs, integrado com a API (https://pokeapi.co/). Denilson Rocha &copy; 2021."/>
      default: 
        return <Nav setMenuControl={setMenuControl} />
    } 
  }

  return (
    <DivHome title={menuControl.title}>
      {renderSwitch(menuControl.view)}
    </DivHome>
  );
}

export async function getStaticProps() {
  return {
    props: { },
  };
}

export default Home;
