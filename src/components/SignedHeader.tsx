import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuModal from "./MenuModal.js";

function SignedHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HeaderContainer>
        <LogoImg src="img/deepfx_logo.png" />
        <SignContainer>
          <MenuImgContainer>
            <MenuImg
              src="img/hamburger.png"
              onClick={() => {
                setShowModal(!showModal);
              }}
            />
          </MenuImgContainer>
        </SignContainer>
      </HeaderContainer>
      {showModal ? <MenuModal></MenuModal> : null}
    </>
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
  display: flex;
  align-items: center;
  margin-right: 7vw;
`;

const MenuImgContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content 
`;

const MenuImg = styled.img`
  width: 40px;
  height: 40x;
`;

export default SignedHeader;
