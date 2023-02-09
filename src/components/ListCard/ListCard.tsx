import Setinha from "../Icons/Setinha";
import Trash from "../Icons/Trash";
import {
  ListCardWrapper,
  RectangleRed,
  NameCardContainer,
} from "./ListCard.style";

interface IListCardProps {
  nameList: string;
}

function ListCard({ nameList }: IListCardProps) {
  return (
    <ListCardWrapper>
      <NameCardContainer>
        <RectangleRed>
          <Trash />
        </RectangleRed>
        <p>{nameList}</p>
      </NameCardContainer>
      <Setinha />
    </ListCardWrapper>
  );
}

export default ListCard;
