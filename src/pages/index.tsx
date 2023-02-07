import { NextPage } from "next";
import { Header, PaginaInicial } from "./style";

const HomePage: NextPage = () => {
  return (
    <PaginaInicial>
      <Header>
        <h1>TO DO | YOUR LISTS</h1>
      </Header>
    </PaginaInicial>
  );
};

export default HomePage;
