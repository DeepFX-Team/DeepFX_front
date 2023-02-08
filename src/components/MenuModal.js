import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function MenuModal() {
  const navigate = useNavigate();

  const logoutClicked = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");

    navigate("/");
  };

  return (
    <Container>
      <Modal>
        <Link to="/my">
          <MyPageText>My Page</MyPageText>
        </Link>
        <LogoutText onClick={logoutClicked}>Log Out</LogoutText>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  float: right;
  margin-top: 67px;
`;

const Modal = styled.div`
  position: fixed;
  padding-left: 25px;
  text-align: left;
  width: 208px;
  height: 119px;
  background: #1d1d1d;
  border-radius: 10px;
  margin-right: 7vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
  z-index: 999;
`;

const MyPageText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  margin-top: 23px;
`;

const LogoutText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #db0000;
  margin-top: 18px;
  cursor: pointer;
`;

export default MenuModal;
