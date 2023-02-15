import { title } from "process";
import ButtonMore from "../Icons/ButtonMore";
import PlusCircle from "../Icons/PlusCircle";
import Trash from "../Icons/Trash";
import {
  HeaderWrapper,
  HeaderButton,
  HeaderButtonWrapper,
} from "./Header.styles";

interface IHeaderProps {
  title?: string | string[] | undefined;
  isListHeader: boolean;
}
function Header({ title, isListHeader }: IHeaderProps) {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      {isListHeader && (
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
      )}
      {!isListHeader && (
        <HeaderButton startIcon={<PlusCircle />} variant="text">
          Add new List
        </HeaderButton>
      )}
    </HeaderWrapper>
  );
}

export default Header;
