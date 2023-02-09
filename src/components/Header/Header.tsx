import PlusCircle from "../Icons/PlusCircle";
import { HeaderWrapper, HeaderButton } from "./Header.styles";

function Header() {
  return (
    <HeaderWrapper>
      <h1>TO DO | YOUR LISTS</h1>
      <HeaderButton startIcon={<PlusCircle />} variant="text">
        Add new List
      </HeaderButton>
    </HeaderWrapper>
  );
}

export default Header;
