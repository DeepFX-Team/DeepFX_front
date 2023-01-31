import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [item, setItem] = useState([
    "ID",
    "Password",
    "Confirm Password",
    "Name",
    "Company / School",
    "E-mail",
  ]);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [email, setEmail] = useState("");

  const signupClicked = async () => {
    if (PW === confirmPW) {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/auth/signup`,
        {
          email: email,
          group: group,
          id: ID,
          name: name,
          password: PW,
        }
      );

      if (result.data.isSuccess) {
        navigate("/signin");
      } else {
        alert("invalid information!");
      }
    } else {
      alert("Check your password!");
    }
  };

  return (
    <Container>
      <LogoImg src="img/deepfx_logo.png" />
      <Contents>
        {item.map((a, i) => {
          return (
            <InputContainer>
              <InputTitle>{a}</InputTitle>
              <Input
                type={i === 1 || i === 2 ? "password" : "text"}
                onChange={(e) => {
                  i === 0
                    ? setID(e.target.value)
                    : i === 1
                    ? setPW(e.target.value)
                    : i === 2
                    ? setConfirmPW(e.target.value)
                    : i === 3
                    ? setName(e.target.value)
                    : i === 4
                    ? setGroup(e.target.value)
                    : setEmail(e.target.value);
                }}
              ></Input>
            </InputContainer>
          );
        })}

        <SignupBtn onClick={signupClicked}>Sign Up</SignupBtn>
      </Contents>
      <InputContainer></InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 1300px;
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

const SignupBtn = styled.div`
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 11vw;
  height: 60px;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;
  margin-top: 85px;
`;

export default Signup;
