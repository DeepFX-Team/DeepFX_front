import React, { useState } from "react";
import SignedHeader from "../components/SignedHeader.tsx";
import styled from "styled-components";
import MyInfo from "../components/MyPage/MyInfo.js";
import MyRecords from "../components/MyPage/MyRecords.js";

function MyPage() {
  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <>
      <SignedHeader />
      <Container>
        <MyPageTitle>My Page</MyPageTitle>
        <MyPageSelection>
          {currentMenu === 0 ? (
            <>
              <MenuSelected>My Info</MenuSelected>
              <MenuUnselected
                onClick={() => {
                  setCurrentMenu(1);
                }}
              >
                My FX records
              </MenuUnselected>
            </>
          ) : (
            <>
              <MenuUnselected
                onClick={() => {
                  setCurrentMenu(0);
                }}
              >
                My Info
              </MenuUnselected>
              <MenuSelected>My FX records</MenuSelected>
            </>
          )}
        </MyPageSelection>

        <MyHR />

        {currentMenu === 0 ? <MyInfo></MyInfo> : <MyRecords></MyRecords>}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 67px;
  width: 92vw;
  height: 832px;
  background: #0d0c31;
  padding-left: 4vw;
  padding-right: 4vw;
  font-family: "Noto Sans", sans-serif;
  color: white;
  text-align: left;
`;

const MyPageTitle = styled.div`
  margin-top: 35px;
  font-weight: 700;
  font-size: 36px;
`;

const MyPageSelection = styled.div`
  width: 328px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const MenuSelected = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-decoration: underline;
  text-underline-offset: 8px;
`;

const MenuUnselected = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
  color: #a5a5a5;
`;

const MyHR = styled.hr`
  border: 1px solid #a5a5a5;
  margin-top: 25px;
  margin-bottom: 40px;
`;

export default MyPage;
