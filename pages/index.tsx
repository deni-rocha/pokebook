import { useState } from "react";
import DivHome from "../src/components/layout/DivHome";
import Nav from "../src/components/Nav";
import About from "../src/components/About";
import { IMenuControl } from "../src/types";

function Home() {
  const [menuControl, setMenuControl] = useState<IMenuControl>({
    view: 1,
    title: "Pokebook",
  });

  function renderSwitch(param: number) {
    switch (param) {
      case 1:
        return <Nav setMenuControl={setMenuControl} />;
      case 2:
        return (
          <About
            setMenuControl={setMenuControl}
            content="Selecione a geração de pokemons desejada e tenha acesso a uma listagem, em seguida escolha um pokemon para ter informações do mesmo."
          />
        );
      case 3:
        return (
          <About
            setMenuControl={setMenuControl}
            content="Site integrado com a RESTful API (https://pokeapi.co/)."
            copyright={true}
          />
        );
      default:
        return <Nav setMenuControl={setMenuControl} />;
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
    props: {},
  };
}

export default Home;
