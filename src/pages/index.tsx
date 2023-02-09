import Header from "@/components/Header/Header";
import PlusCircle from "@/components/Icons/PlusCircle";
import ListCard from "@/components/ListCard/ListCard";
import MainText from "@/components/Main/MainText";
import { NextPage } from "next";
import { PaginaInicial } from "./style";

const mockValuesTest = [
  "Lista do marcelol",
  "Lista 2",
  "Lista 3",
  "Lista 4",
  "Lista 5",
];

const HomePage: NextPage = () => {
  return (
    <PaginaInicial>
      <Header />
      {mockValuesTest.map((lista) => (
        <ListCard nameList={lista} />
      ))}
    </PaginaInicial>
  );
};

export default HomePage;
