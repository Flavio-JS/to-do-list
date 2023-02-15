import BaseButton from "@/components/BaseButton/BaseButton";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    height: 80px;
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
    color: ${theme.colors.primary};
    gap: 16px;
    font-size: 18px;
    padding: 16px 36px;
    border-radius: 40px;

    :hover {
      background-color: ${theme.colors.dark700};
    }
  `}
`;

export const HeaderButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 24px;
  `}
`;
