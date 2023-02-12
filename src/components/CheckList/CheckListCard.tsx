import { useState } from "react";
import ButtonRainbow from "../Icons/ButtonRainbow";
import CheckedBoxRainbow from "../Icons/CheckedBoxRainbow";
import Setinha from "../Icons/Setinha";
import Trash from "../Icons/Trash";
import {
  BoxRainbowChecked,
  CheckListCardWrapper,
  ToDoNameContainer,
  BoxRainbowNotChecked,
} from "./CheckListCard.styles";

interface IListCardProps {
  nameList: string | string[] | undefined;
}

function CheckListCard({ nameList }: IListCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckListCardWrapper>
      <ToDoNameContainer>
        <BoxRainbowNotChecked
          isCheckedCSS={isChecked}
          width={20}
          onClick={() => setIsChecked(true)}
        />
        <BoxRainbowChecked
          isCheckedCSS={isChecked}
          width={20}
          onClick={() => setIsChecked(false)}
        />
        <p>{nameList}</p>
      </ToDoNameContainer>
    </CheckListCardWrapper>
  );
}

export default CheckListCard;
