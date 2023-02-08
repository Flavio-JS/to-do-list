import PlusCircle from "@/components/Icons/PlusCircle";
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
    </PaginaInicial>
  );
};

export default HomePage;
