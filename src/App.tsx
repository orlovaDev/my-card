// import {useState} from 'react';
import './App.css'
import myImage from "./assets/Rectangle 1.png";
import {StyledCard, WrapperCard} from "./components/Card.styled.tsx";
import {StyledImg} from "./components/Image.styled.tsx";
import { WrapperCardContent } from "./components/CardContent.styled.tsx";
import { StyledTitle } from "./components/Title.styled.tsx";
import {StyledDescription} from "./components/Description.styled.tsx";
import {
  StyledButton,
  WrapperBtn
} from "./components/Button.styled.tsx";


function App() {
  return (
    <div className="App">
      <WrapperCard>
        <StyledCard color={"#fff"}>
          <StyledImg>
            <img
              src={myImage}
              alt="Описание карточки"
            />
          </StyledImg>
          <WrapperCardContent>
            <StyledTitle color={"#000"}>Headline</StyledTitle>
            <StyledDescription color={"#abb3ba"}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu
              ut. Sit molestie ornare in venen.</StyledDescription>
            <WrapperBtn>
              <StyledButton colorOne={"#4e71fe"} colorTwo={"#fff"} colorHover={"#eeb648"} btnType={"primary"}>See more</StyledButton>
              <StyledButton colorOne={"#4e71fe"} colorTwo={"#fff"} colorHover={"#eeb648"} btnType={"secondary"}>Save</StyledButton>
              {/*<StyledButton as={ButtonTwo}>Save</StyledButton>*/}
            </WrapperBtn>
          </WrapperCardContent>
        </StyledCard>
      </WrapperCard>
    </div>
  )
}

export default App












