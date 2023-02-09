import styled, { css } from "styled-components";

export const ListCardWrapper = styled.div`
  ${({ theme}) => css`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 60px;
    width: 100%;
    transition: background-color 0.5s;
    
    svg{
        margin-right:20px;
    }
    
    :hover{
        background-color:${theme.colors.dark800};
    }
  `}
`;

export const NameCardContainer = styled.div`
  ${({ theme}) => css`
    display: flex;
    justify-content:center;
    align-items:center;

    p{
        color:${theme.colors.second200}
    }
  `}
`;

export const RectangleRed = styled.div`
  ${({ theme}) => css`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 60px;
    width: 10px;
    overflow-x:hidden;
    margin-right: 8px;
    background-color:${theme.colors.dark600};
    transition: width 0.5s;
    
    svg{
        margin-right:0px;
        display:none;
    }

    :hover{
      width: 70px;

      svg{
        display:block;
      }
    }
  `}
`;