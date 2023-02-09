import styled, { css } from "styled-components";
import Rectangle from "../Icons/Rectangle";

export const MainTextWrapper = styled.div`
  ${({ theme}) => css`
    margin-top:139px;
    display:flex;
    flex-direction:column;  
    align-items:center;
    justify-content:center;

    h1{
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.size.giant3};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.second200};
    text-align: center;
    z-index:2;

    p{
      font-size: 20px;
      background-image: linear-gradient(180deg, #632329 0%, #F25551 49.65%, rgba(80, 242, 131, 0.8) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      text-align: center;
      }
    }
    
  `}
`;

export const RainbowRectangle = styled(Rectangle)`
  ${({ theme}) => css`
    position:fixed;
    z-index:1;
  `}
`;