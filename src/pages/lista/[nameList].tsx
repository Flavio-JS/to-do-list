import CheckListCard from "@/components/CheckList/CheckListCard";
import Header from "@/components/Header/Header";
import EmptyToDoListSVG from "@/components/Icons/EmptyToDoListSVG";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { PaginaInicial } from "../style";
import { CheckListsWrapper } from "./styles";

const NameListPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <PaginaInicial>
      <Header title={query.nameList} isListHeader={true} />
      <CheckListsWrapper>
        <EmptyToDoListSVG />
      </CheckListsWrapper>
    </PaginaInicial>
  );
};

export default NameListPage;
