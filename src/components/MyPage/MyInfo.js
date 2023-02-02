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
      <FlexDiv>
        <MenuTitle>Personal Info</MenuTitle>
        <ModifyBtn>Modify</ModifyBtn>
      </FlexDiv>
      <InfoContainer>
        {infoList.map((a, i) => {
          return (
            <FlexDiv>
              <InfoTitle>{a}</InfoTitle>
              {i === 0 ? (
                <InfoContent>{userInfo.name}</InfoContent>
              ) : i === 1 ? (
                <InfoContent>{userInfo.group}</InfoContent>
              ) : (
                <InfoContent>{userInfo.email}</InfoContent>
              )}
            </FlexDiv>
          );
        })}
      </InfoContainer>
      <FlexDiv>
        <MenuTitle>My Membership</MenuTitle>
        <ModifyBtn>Change Plan</ModifyBtn>
      </FlexDiv>
      <PlanContainer>
        <BlockDiv>
          <PlanName>{planInfo.name}</PlanName>
          <PlanSpecContainer>
            {planSpecs.map((a, i) => {
              return (
                <BlockDiv>
                  <PlanSpecName>{a}</PlanSpecName>
                  <PlanSpecContent>
                    {i === 0 ? (
                      <PlanSpecContent>{planInfo.status}</PlanSpecContent>
                    ) : i === 1 ? (
                      <PlanSpecContent>${planInfo.price}</PlanSpecContent>
                    ) : (
                      <PlanSpecContent>{planInfo.ends}</PlanSpecContent>
                    )}
                  </PlanSpecContent>
                </BlockDiv>
              );
            })}
          </PlanSpecContainer>
        </BlockDiv>
        <BlockDiv style={{ marginLeft: "21vw" }}>
          {planInfo.specs.map((a, i) => {
            return <PlanDesc>✔ &nbsp;{a}</PlanDesc>;
          })}
        </BlockDiv>
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

const ModifyBtn = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #a5a5a5;
  line-height: 40px;
  margin-left: 30px;
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
  display: flex;
`;

const PlanName = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const PlanSpecContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const PlanSpecName = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #a5a5a5;
  margin-right: 30px;
`;

const PlanSpecContent = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
`;

const BlockDiv = styled.div`
  display: block;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const PlanDesc = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 20px;
`;

export default MyInfo;
