import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <LogoImg src="img/deepfx_logo.png" />
      <SignContainer>
        <SignInText>Sign in</SignInText>
        <SignUpText>Sign up</SignUpText>
      </SignContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 67px;
  background-color: #0d0c31;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Noto Sans", sans-serif;
  position: fixed;
  z-index: 9999;
`;

const LogoImg = styled.img`
  width: auto;
  height: 90%;
  margin-left: 3vw;
`;

const SignContainer = styled.div`
  width: 14vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 7vw;
`;

const SignInText = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
`;

const SignUpText = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 7vw;
  height: 40px;
  line-height: 40px;
`;

export default Header;
