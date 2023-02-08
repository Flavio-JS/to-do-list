import BaseButton from "@/components/BaseButton/BaseButton";
import styled, { css } from "styled-components";

export const PaginaInicial = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    padding-top: 75px;
    background: #241722;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    height: 80px;
    margin: 0 113px 0px 113px;
    border-bottom: 2px solid #462730;

    h1 {
      font-style: normal;
      font-size: 24px;
      line-height: 36px;
      color: ${theme.colors.second200};
    }
  `}
`;

export const HeaderButton = styled(BaseButton)`
  ${({ theme }) => css`
    color: #f25551;
    gap: 16px;
  `}
`;


