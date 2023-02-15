import { HeaderLeftArrow } from "@/pages/lista/styles";
import ButtonMore from "../Icons/ButtonMore";
import PlusCircle from "../Icons/PlusCircle";
import Trash from "../Icons/Trash";
import {
  HeaderWrapper,
  HeaderButton,
  HeaderButtonWrapper,
  ListHeaderTitleWrapper,
} from "./Header.styles";

interface IHeaderProps {
  title?: string | string[] | undefined;
  isListHeader: boolean;
}
function Header({ title, isListHeader }: IHeaderProps) {
  return (
    <HeaderWrapper>
      {isListHeader && (
        <>
          <ListHeaderTitleWrapper>
            <HeaderLeftArrow />
            <h1>{title}</h1>
          </ListHeaderTitleWrapper>
          <HeaderButtonWrapper>
            <HeaderButton
              startIcon={<Trash color="#F25551" width={24} height={24} />}
              variant="text"
            >
              Delete List
            </HeaderButton>
            <HeaderButton
              startIcon={<ButtonMore color="#F25551" width={24} height={24} />}
              variant="text"
            >
              Add to-do
            </HeaderButton>
          </HeaderButtonWrapper>
        </>
      )}
      {!isListHeader && (
        <>
          <h1>{title}</h1>
          <HeaderButton startIcon={<PlusCircle />} variant="text">
            Add new List
          </HeaderButton>
        </>
      )}
    </HeaderWrapper>
  );
}

export default Header;
