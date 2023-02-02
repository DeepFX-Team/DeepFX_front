import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function MyInfo() {
  const [infoList, setInfoList] = useState([
    "Name",
    "Company / School",
    "E-mail",
  ]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    group: "",
    email: "",
  });
  const [planInfo, setPlanInfo] = useState({
    name: "Individual Plan",
    status: "Active",
    price: "9.99",
    ends: "Feb 15, 2023",
    specs: ["Available to individual users", "Unlimited SoundFX downloads"],
  });
  const [planSpecs, setPlanSpecs] = useState([
    "Status",
    "Price/month",
    "Membership ends",
  ]);

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

      setUserInfo({
        name: response.data.result.userName,
        group: response.data.result.groupName,
        email: response.data.result.email,
      });

      console.log(response);
    };

    fetchInfo();
  }, []);

  return (
    <Container>
      <MenuTitle>Personal Info</MenuTitle>
      <InfoContainer>
        {infoList.map((a, i) => {
          return (
            <div style={{ display: "flex" }}>
              <InfoTitle>{a}</InfoTitle>
              {i === 0 ? (
                <InfoContent>{userInfo.name}</InfoContent>
              ) : i === 1 ? (
                <InfoContent>{userInfo.group}</InfoContent>
              ) : (
                <InfoContent>{userInfo.email}</InfoContent>
              )}
            </div>
          );
        })}
      </InfoContainer>
      <MenuTitle>My Membership</MenuTitle>
      <PlanContainer>
        <PlanName>{planInfo.name}</PlanName>
      </PlanContainer>
    </Container>
  );
}

const Container = styled.div`
  color: white;
  font-family: "Noto Sans", sans-serif;
`;

const MenuTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const InfoContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 70px;
  row-gap: 30px;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const InfoContent = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-left: 40px;
`;

const PlanContainer = styled.div`
  box-sizing: border-box;
  background: #242424;
  width: 100%;
  height: 187px;
  margin-top: 30px;
  padding: 34px 0px 39px 40px;
`;

const PlanName = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export default MyInfo;
