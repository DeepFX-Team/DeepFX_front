import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SignedHeader from "../components/SignedHeader.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Plan() {
  const navigate = useNavigate();

  const [planList, setPlanList] = useState([
    {
      planIdx: 0,
      planName: "",
      planPrice: 0,
      planDesc: ["", ""],
    },
  ]);

  /*플랜 리스트 불러오기*/
  useEffect(() => {
    const fetchPlan = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/plan/list`
      );

      setPlanList(response.data.result);
    };

    fetchPlan();
  }, []);

  /*플랜 선택하기*/
  const selectPlan = async (i) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}api/plan/select/${planList[i].planIdx}`,
      {},
      {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("jwtToken"),
        },
      }
    );

    if (response.data.returnCode === 1000) {
      navigate("/my");
    }
  };

  return (
    <>
      <SignedHeader />
      <Container>
        <Title>Our Membership</Title>
        <PlanContainer>
          {planList.map((a, i) => {
            return (
              <PlanBox>
                <PlanName>{a.planName}</PlanName>
                <PlanPrice>
                  ${a.planPrice}
                  {i === 0 ? (
                    <span style={{ fontSize: "24px" }}>/month</span>
                  ) : (
                    <span style={{ fontSize: "24px" }}>/month~</span>
                  )}
                </PlanPrice>
                {a.planDesc.map((a, i) => {
                  return <PlanDesc>✔ &nbsp;{a}</PlanDesc>;
                })}
                <SelectBtn
                  onClick={() => {
                    selectPlan(i);
                  }}
                >
                  Select Plan
                </SelectBtn>
              </PlanBox>
            );
          })}
        </PlanContainer>
      </Container>
    </>
  );
}

export default Plan;

const Container = styled.div`
  padding-top: 67px;
  width: 92vw;
  height: 713px;
  background: #0d0c31;
  padding-left: 4vw;
  padding-right: 4vw;
  font-family: "Noto Sans", sans-serif;
  color: white;
  text-align: left;
`;

const Title = styled.div`
  margin-top: 35px;
  font-weight: 700;
  font-size: 36px;
`;

const PlanContainer = styled.div`
  margin-top: 56px;
  display: flex;
  width: 76vw;
  margin-left: 7vw;
  justify-content: space-between;
`;

const PlanBox = styled.div`
  box-sizing: border-box;
  width: 34vw;
  height: 434px;
  background: #242424;
  padding-top: 29px;
  padding-left: 3%;
  position: relative;
`;

const PlanName = styled.div`
  font-weight: 600;
  font-size: 26px;
`;

const PlanPrice = styled.div`
  font-weight: 700;
  font-size: 36px;
  margin-top: 40px;
  margin-bottom: 60px;
`;

const PlanDesc = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 20px;
`;

const SelectBtn = styled.div`
  cursor: pointer;
  width: 139px;
  height: 49px;
  background: #f18860;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60%;
  position: absolute;
  margin-bottom: 34px;
  bottom: 0;
`;
