import React, { useState } from "react";
import SignedHeader from "../components/SignedHeader.tsx";
import styled from "styled-components";

function Main() {
  const [currentText, setCurrentText] = useState("");

  const InputEntered = (e) => {
    if (e.key == "Enter") {
      setCurrentText(e.target.value);
    }
  };

  return (
    <>
      <SignedHeader />
      <Container>
        <TextInput
          placeholder="What SoundFX do you want?"
          onKeyDown={InputEntered}
        />
        <CurrentText>{currentText}</CurrentText>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 67px;
  width: 100vw;
  height: 800px;
  background: #0d0c31;
  font-family: "Noto Sans", sans-serif;
  color: white;
`;

const TextInput = styled.input`
  width: 62vw;
  height: 55px;
  margin-top: 80px;
  border-radius: 10px;
  padding-left: 29px;
  padding-right: 29px;
  font-weight: 500;
  font-size: 24px;
`;

const CurrentText = styled.div`
  margin-top: 60px;
  font-weight: 700;
  font-size: 36px;
`;

export default Main;
