import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SignIn() {
  const [item, setItem] = useState(["ID", "Password"]);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  return (
    <Container>
      <LogoImg src="img/deepfx_logo.png" />
      <Contents>
        {item.map((a, i) => {
          return (
            <InputContainer>
              <InputTitle>{a}</InputTitle>
              <Input
                type={i === 1 ? "password" : "text"}
                onChange={(e) => {
                  i === 0 ? setID(e.target.value) : setPW(e.target.value);
                  console.log(ID);
                  console.log(PW);
                }}
              ></Input>
            </InputContainer>
          );
        })}

        <SigninBtn>Sign In</SigninBtn>

        <Link to="/signup">
          <SignupBtn>sign up</SignupBtn>
        </Link>
      </Contents>
      <InputContainer></InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 824px;
  background: #0d0c31;
  font-family: "Noto Sans", sans-serif;
  color: white;
`;

const LogoImg = styled.img`
  margin-top: 80px;
  width: 223px;
  height: auto;
`;

const Contents = styled.div`
  width: 40vw;
  margin-left: 30vw;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 98px;
  margin-top: 25px;
`;

const InputTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-align: left;
`;

const Input = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 20px;
  color: black;
`;

const SigninBtn = styled.div`
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 11vw;
  height: 60px;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;
  margin-top: 85px;
`;

const SignupBtn = styled.div`
  font-weight: 400;
  font-size: 22px;
  margin-top: 10px;
  color: white;
`;

export default SignIn;
