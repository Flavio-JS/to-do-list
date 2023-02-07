import styled, { css } from "styled-components";

export const PaginaInicial = styled.section`
  ${({ theme, }) => css`
    width:100%;
    height : 100vh;
    padding-top: 75px;
    box-sizing: border-box;
    background: #241722;

  `}
`;

export const Header = styled.header`
  ${({ theme, }) => css`
    background-color : transparent;
    width: 100%;
    height: 80px;
    margin: 0 113px 0px 113px;

    h1{
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #FFFBFF;
    }
  `}
`;
