import styled, { css } from "styled-components";
import ButtonRainbow from "../Icons/ButtonRainbow";
import CheckedBoxRainbow from "../Icons/CheckedBoxRainbow";

export const CheckListCardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: ${theme.colors.dark800};
    margin-top: 20px;

    :hover {
      background-color: ${theme.colors.dark700};
    }
  `}
`;

export const ToDoNameContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    svg {
      margin-left: 32px;
    }

    p {
      color: ${theme.colors.second200};
    }
  `}
`;
interface IBoxRainbowCheckedProps {
  isCheckedCSS: boolean;
}
export const BoxRainbowChecked = styled(
  CheckedBoxRainbow
)<IBoxRainbowCheckedProps>`
  ${({ theme, isCheckedCSS }) => css`
    display: none;

    ${isCheckedCSS &&
    css`
      display: block;
    `}
  `}
`;

interface IBoxRainbowNotCheckedProps {
  isCheckedCSS: boolean;
}
export const BoxRainbowNotChecked = styled(
  ButtonRainbow
)<IBoxRainbowNotCheckedProps>`
  ${({ theme, isCheckedCSS }) => css`
    display: block;

    ${isCheckedCSS &&
    css`
      display: none;
    `}
  `}
`;
