import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <DeepFXLogo src="img/deepfx_logo.png" />
      <Credit>Jae Min Song &nbsp; Jeong Ha Lee &nbsp; Ji Ho Lee</Credit>
      <Github>
        <img src="img/github.png" style={{ width: "24px" }} />
        &nbsp; &nbsp;Github
        <span
          style={{
            float: "right",
            marginRight: "9vw",
            color: "gray",
          }}
        >
          2022 Team DeepFX
        </span>
      </Github>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100vw;
  height: 338px;
  background: black;

  color: white;
  text-align: left;
`;

const DeepFXLogo = styled.img`
  padding-left: 6vw;
  margin-top: 40px;
  width: 150px;
  height: auto;
  //float: left;
`;

const Credit = styled.div`
  font-weight: 600;
  font-size: 24px;
  //float: left;
  margin-left: 9vw;
  margin-top: 15px;
`;

const Github = styled.div`
  margin-left: 9vw;
  font-weight: 600;
  font-size: 20px;
  margin-top: 45px;
  height: 24px;
`;

export default Footer;
