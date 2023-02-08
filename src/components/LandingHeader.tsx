import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <HeaderContainer>
      <LogoImg src="img/deepfx_logo_outline.png" />
      <SignContainer>
        <Link to="/signin">
          <SignInText>Sign in</SignInText>
        </Link>
        <Link to="/signup">
          <SignUpText>Sign up</SignUpText>
        </Link>
      </SignContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 67px;
  background: rgba(236, 236, 255, 0.4);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Noto Sans", sans-serif;
  position: fixed;
  z-index: 9999;
`;

const LogoImg = styled.img`
  width: auto;
  height: 75%;
  margin-left: 4.2vw;
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
  color: black;
`;

const SignUpText = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  width: 7vw;
  height: 40px;
  line-height: 40px;
  color: black;
`;

export default LandingHeader;
