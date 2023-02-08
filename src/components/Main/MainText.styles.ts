import styled, { css } from "styled-components";

export const MainTextWrapper = styled.div`
  ${({ theme}) => css`
    h1{
    font-size: ${theme.font.size.giant3};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.second200};
    text-align: center; 
    }
    p{
    background-image: linear-gradient(180deg, #632329 0%, #F25551 49.65%, rgba(80, 242, 131, 0.8) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-align: center;
    }
  `}
`;

export const GradientBorder = styled.div`
  ${({ theme}) => css`
  border: 4px solid red;
  //background-image: linear-gradient(180deg, #632329 0%, #F25551 49.65%, rgba(80, 242, 131, 0.8) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  height: 312px;
  width: 471px;
  position:relative;
  z-index: 1;
  `}
`;