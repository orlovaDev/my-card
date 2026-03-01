import styled from "styled-components";

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const StyledCard = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.color || "#fff"};
`