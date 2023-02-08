import PlusCircle from "@/components/Icons/PlusCircle";
import MainText from "@/components/Main/MainText";
import { NextPage } from "next";
import { Header, PaginaInicial, HeaderButton } from "./style";

const HomePage: NextPage = () => {
  return (
    <PaginaInicial>
      <Header>
        <h1>TO DO | YOUR LISTS</h1>
        <HeaderButton startIcon={<PlusCircle />} variant="text">
          Add new List
        </HeaderButton>
      </Header>
      <MainText />
    </PaginaInicial>
  );
};

export default HomePage;
