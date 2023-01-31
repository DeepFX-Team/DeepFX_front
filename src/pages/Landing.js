import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import "../css/main.css";
import Header from "../components/Header.tsx";

function Landing() {
  const scrollToElement = () =>
    window.scrollTo({ top: 760, behavior: "smooth" });

  const { ref: firstRef, inView: firstVisible } = useInView();
  const { ref: secondRef, inView: secondVisible } = useInView();

  useEffect(() => {
    console.log(secondVisible);
  }, [secondVisible]);

  return (
    <>
      <Header />
      <Container>
        <Section1>
          <div style={{ position: "absolute" }}>
            <WaveImg src="img/landing/3d_sound_wave.png"></WaveImg>
          </div>
          <div style={{ position: "absolute" }}>
            <Section1Title>Text to SoundFX</Section1Title>
          </div>
          <div style={{ position: "absolute" }}>
            <Section1SubTitle>
              DeepFX is a service that converts a entered sentence into SoundFX
              using stable diffusion machine learning model
            </Section1SubTitle>
          </div>
          <MoreInfo onClick={scrollToElement}>
            <MoreInfoText>More Information</MoreInfoText>
            <MoreInfoPolygon src="img/landing/polygon.png" />
          </MoreInfo>
        </Section1>

        <Section2 id="section2" ref={firstRef}>
          <Section2Title>
            If you struggling to find your favorite soundFX for your
          </Section2Title>
          <Section2Images>
            <div className={firstVisible ? "section2Visible1" : ""}>
              <img src="img/landing/game.png" style={{ width: "340.3px" }} />
              <Section2Names>Game</Section2Names>
            </div>
            <div className={firstVisible ? "section2Visible2" : ""}>
              <img src="img/landing/video.png" style={{ width: "352.68px" }} />
              <Section2Names>Video</Section2Names>
            </div>
            <div className={firstVisible ? "section2Visible3" : ""}>
              <img
                src="img/landing/gundam.png"
                style={{ width: "352px", marginTop: "24px" }}
              />
              <Section2Names style={{ marginTop: "50px" }}>
                Animation
              </Section2Names>
            </div>
          </Section2Images>
        </Section2>

        <Section3>
          <div style={{ display: "flex" }}>
            <Section3Desc>
              You don't have to waste time and get stressed finding the right
              SoundFX anymore
            </Section3Desc>
            <Section3Img src="img/landing/stressed_man.png" />
          </div>
        </Section3>

        <Section4>
          <div style={{ display: "flex" }}>
            <Section4Img src="img/landing/happy_man.png" />
            <Section4Desc>
              Now you can get the best SoundFX by simply entering the sound you
              want through{" "}
              <span style={{ fontSize: "48px", color: "#0D0C31" }}>DeepFX</span>
            </Section4Desc>
          </div>
        </Section4>

        <Section5>
          <div style={{ display: "flex" }}>
            <Section5Half>
              <Section5Title>How does it possible?</Section5Title>
              <Section5SubTitle>
                We learn the sounds of the objects around us in a deep learning
                model for making new SoundFXs
              </Section5SubTitle>
            </Section5Half>
            <Section5Half>
              <Section5Video controls width="250" autoPlay muted loop>
                <source src="vid/sfx_video.webm" type="video/webm"></source>
              </Section5Video>
            </Section5Half>
          </div>
        </Section5>

        <Section6>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "180px", marginLeft: "8vw" }}>
              <Section6Title>
                <span style={{ fontSize: "42px" }}>Start DeepFX.</span>
                <br />
                Everything is provided to make the best SoundFX
              </Section6Title>
              <Section6Features>
                ☑️ Generate SFX from Text &nbsp;&nbsp; ☑️ Select SFX
                <br />
                ☑️ Download SFX &nbsp; ☑️ Save SFX in library
              </Section6Features>
              <Section6Starting>Starting at $29.99/month</Section6Starting>
              <Section6TrialBtn>Try 2 weeks free trial</Section6TrialBtn>
            </div>
            <img
              src="img/landing/mockup.png"
              className={secondVisible ? "mockUpVisible" : "mockup"}
              ref={secondRef}
            />
          </div>
        </Section6>
      </Container>
    </>
  );
}

const Container = styled.div`
  font-family: "Noto Sans", sans-serif;
  color: white;
`;

/*section 1*/
const Section1 = styled.div`
  padding-top: 69px;
  width: 100vw;
  height: 760px;
  background: linear-gradient(180deg, #0d0c31 0%, #242180 100%);
`;

const WaveImg = styled.img`
  margin-top: 52px;
  width: 753px;
  height: auto;
  margin-left: 44vw;
`;

const Section1Title = styled.div`
  font-weight: 800;
  font-size: 55px;
  margin-top: 268px;
  margin-left: 11vw;
`;

const Section1SubTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  color: #e1e1e1;
  width: 65vw;
  margin-top: 366px;
  text-align: left;
  margin-left: 11vw;
`;

const PolygonAnim = keyframes`
    from{
        margin-top: 605px;
    }
    to{
        margin-top: 590px;
    }
`;

const MoreInfo = styled.div`
  margin-top: 615px;
  animation: ${PolygonAnim} 1.5s linear infinite;
`;

const MoreInfoText = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const MoreInfoPolygon = styled.img`
  margin-top: 5px;
  width: 20px;
  height: auto;
`;

/* */

/*Section2*/
const Section2 = styled.div`
  width: 100vw;
  height: 760px;
  background: linear-gradient(
    180deg,
    #0d0c31 0%,
    #ffffff 0.01%,
    rgba(255, 255, 255, 0.31) 0.02%,
    rgba(13, 12, 49, 0) 99.97%,
    rgba(255, 255, 255, 0.75) 99.98%
  );
  color: black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Section2Title = styled.div`
  font-weight: 800;
  font-size: 44px;
  margin-top: 138px;
`;

const Section2Images = styled.div`
  display: flex;
  justify-content: space-around;
  width: 88vw;
  margin-left: 6vw;
  margin-top: 73px;
`;

const Section2Names = styled.div`
  font-weight: 700;
  font-size: 38px;
`;
/* */

/*Section3*/
const Section3 = styled.div`
  width: 100vw;
  height: 760px;
  background: linear-gradient(
    180deg,
    #d9d9d9 0%,
    rgba(255, 255, 255, 0.83) 100%
  );
  color: #000000;
`;

const Section3Desc = styled.div`
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
  text-align: right;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 600px;
  float: left;
  margin-top: 298px;
  margin-left: 2vw;
`;

const Section3Img = styled.img`
  float: left;
  width: 764px;
  margin-left: 25px;
  margin-top: 20px;
`;
/* */

/*Section4*/
const Section4 = styled.div`
  width: 100vw;
  height: 760px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.38) 0%,
    rgba(140, 138, 255, 0.16) 100%
  );
`;
const Section4Img = styled.img`
  width: 811px;
  height: 722px;
  margin-top: 38px;
`;
const Section4Desc = styled.div`
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 600px;
  margin-top: 298px;
  margin-left: 54vw;
  color: black;
  position: absolute;
`;
/**/

/*Section5*/
const Section5 = styled.div`
  width: 100vw;
  height: 760px;
  background: black;
`;
const Section5Half = styled.div`
  width: 50vw;
  height: 100%;
`;
const Section5Video = styled.video`
  width: 100%;
  height: 760px;
`;
const Section5Title = styled.div`
  margin-top: 207px;
  font-weight: 600;
  font-size: 48px;
  color: #8d83ff;
`;
const Section5SubTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 54px;
  width: 36vw;
  margin-left: 7vw;
  margin-top: 30px;
`;
/* */

/*Section6*/
const Section6 = styled.div`
  width: 100vw;
  height: 760px;
  background: linear-gradient(180deg, #0d0c31 0%, #242180 100%);
`;
const Section6Title = styled.div`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  width: 39vw;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: left;
`;
const Section6Features = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 34vw;
  text-align: left;
`;
const Section6Starting = styled.div`
  margin-top: 22px;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  color: rgba(255, 255, 255, 0.45);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: left;
`;
const Section6TrialBtn = styled.div`
  width: 29vw;
  height: 71px;
  line-height: 71px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 32px;
  margin-top: 44px;
`;
const Mockup = styled.img`
  width: 661px;
  height: auto;
  margin-top: 60px;
`;

export default Landing;
