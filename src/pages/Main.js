import React, { useState, useEffect } from "react";
import SignedHeader from "../components/SignedHeader.tsx";
import styled from "styled-components";
import axios from "axios";
import Waveform from "../components/SoundWave/Waveform";

function Main() {
  const [currentText, setCurrentText] = useState("");

  const [loading, setLoading] = useState(false);

  const [sound, setSound] = useState({
    id: 0,
    title: "",
    url: "https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3",
    serverIdx: 0,
  });

  const getResult = async (text) => {
    setLoading(true);
    const response = await axios.post(
      `http://127.0.0.1:5000/api/predict/`,
      {
        alpha: 0.75,
        num_inference_steps: 50,
        seed_image_id: "og_beat",

        start: {
          prompt: text,
          seed: 42,
          denoising: 0.75,
          guidance: 7.0,
        },

        end: {
          prompt: text,
          seed: 123,
          denoising: 0.75,
          guidance: 7.0,
        },
      },
      {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("jwtToken"),
        },
      }
    );

    console.log(response.data.result);

    setLoading(false);

    setSound({
      id: 0,
      title: text,
      url: response.data.result.soundUrl,
      serverIdx: response.data.result.soundIdx,
    });
  };

  const InputEntered = (e) => {
    if (e.key === "Enter") {
      setCurrentText(e.target.value);

      if (e.target.value !== "") {
        getResult(e.target.value);
      } else {
        setSound({
          id: 0,
          title: "",
          url: "https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3",
          serverIdx: 0,
        });
      }
    }
  };

  const saveClick = () => {
    alert("Saved in your library!");
  };

  return (
    <>
      <SignedHeader />
      <Container>
        <TextInput
          placeholder="What SoundFX do you want?"
          onKeyDown={InputEntered}
        />
        <CurrentText>{currentText}</CurrentText>
        {sound.title !== "" ? (
          <div style={{ marginTop: "50px" }}>
            <Waveform
              url={sound.url}
              fileName={sound.title}
              serverIdx={sound.serverIdx}
              deleteClick={saveClick}
              mode="main"
            />
          </div>
        ) : null}
        {loading === true ? (
          <div class="wave-center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        ) : null}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 67px;
  width: 100vw;
  height: 800px;
  background: #0d0c31;
  font-family: "Noto Sans", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextInput = styled.input`
  width: 62vw;
  height: 55px;
  margin-top: 80px;
  border-radius: 10px;
  padding-left: 29px;
  padding-right: 29px;
  font-weight: 500;
  font-size: 24px;
`;

const CurrentText = styled.div`
  margin-top: 75px;
  font-weight: 700;
  font-size: 36px;
`;

export default Main;
