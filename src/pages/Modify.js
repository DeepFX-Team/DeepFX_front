import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Modify() {
  const navigate = useNavigate();

  const [item, setItem] = useState(["Name", "Company / School", "E-mail"]);
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    /*유저 정보 불러오기*/
    const fetchInfo = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/user/info`,
        {
          headers: {
            "X-ACCESS-TOKEN": localStorage.getItem("jwtToken"),
          },
        }
      );

      const result = response.data.result;

      setName(result.userName);
      setGroup(result.groupName);
      setEmail(result.email);
    };

    fetchInfo();
  }, []);

  const modifyClicked = async () => {
    const result = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}api/user/modify`,
      {
        email: email,
        group: group,
        userName: name,
      },
      {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("jwtToken"),
        },
      }
    );

    if (result.data.isSuccess) {
      navigate("/my");
    } else {
      alert("error occured!");
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
                onChange={(e) => {
                  i === 0
                    ? setName(e.target.value)
                    : i === 1
                    ? setGroup(e.target.value)
                    : setEmail(e.target.value);
                }}
                value={i === 0 ? name : i === 1 ? group : email}
              ></Input>
            </InputContainer>
          );
        })}

        <SignupBtn onClick={modifyClicked}>Modify</SignupBtn>
      </Contents>
      <InputContainer></InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 900px;
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

export default Modify;
