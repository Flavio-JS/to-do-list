import CheckListCard from "@/components/CheckList/CheckListCard";
import Header from "@/components/Header/Header";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { PaginaInicial } from "../style";

const NameListPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <PaginaInicial>
      <Header title={query.nameList} isListHeader={true} />
      <CheckListCard nameList={query.nameList} />
    </PaginaInicial>
  );
};

export default NameListPage;
