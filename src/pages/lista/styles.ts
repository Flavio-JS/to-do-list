import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import styled, { css } from "styled-components";

export const PaginaInicial = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    padding: 75px 10% 0 10%;
    background: #241722;
  `}
`;

export const CheckListsWrapper = styled.div`
  ${({ theme }) => css`
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-top: 87px;
    }
  `}
`;

export const HeaderLeftArrow = styled(ArrowLeftIcon)`
  ${({ theme }) => css`
    :hover {
      cursor: pointer;
      path {
        stroke: ${theme.colors.primary};
      }
    }
  `}
`;
