import Link from "next/link";
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
      <Link href={`lista/${nameList}`}>
        <Setinha />
      </Link>
    </ListCardWrapper>
  );
}

export default ListCard;
