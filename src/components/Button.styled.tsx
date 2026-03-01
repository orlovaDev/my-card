import styled, {css} from "styled-components";

type StyledButtonPropsType = {
  colorOne?: string
  colorTwo?: string
  colorHover?: string
  btnType?: "primary" | "secondary"
}


export const WrapperBtn = styled.div`
  display: flex;
  gap: 12px;
`

export const StyledButton = styled.button<StyledButtonPropsType>`
  width: 86px;
  height: 30px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  cursor: pointer;
  border-radius: 5px;

  ${props => props.btnType === "primary" && css<StyledButtonPropsType>`
    color: ${props => props.colorTwo || "#fff"};
    background-color: ${props => props.colorOne || "#4e71fe"};
    border: ${props => props.colorOne || "#4e71fe"};

    &:hover {
      background-color: ${props => props.colorHover || "#eeb648"};
      border: ${props => props.colorHover || "#eeb648"};
    }
  `}

  ${props => props.btnType === "secondary"&& css<StyledButtonPropsType>`
    background-color: ${props => props.colorTwo || "#fff"};
    color: ${props => props.colorOne || "#4e71fe"};
    border: 2px solid ${props => props.colorOne || "#4e71fe"};

    &:hover {
      color: ${props => props.colorHover || "#eeb648"};
      border: 2px solid ${props => props.colorHover || "#eeb648"};
    }
  `}
`

