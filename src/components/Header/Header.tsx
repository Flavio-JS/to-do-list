import { title } from "process";
import PlusCircle from "../Icons/PlusCircle";
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
          <HeaderButton startIcon={<PlusCircle />} variant="text">
            Add new L
          </HeaderButton>
          <HeaderButton startIcon={<PlusCircle />} variant="text">
            Add new L
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
