import React, { useState } from "react";
import styled from "styled-components";
import Waveform from "../SoundWave/Waveform.js";
import PlayList from "../SoundWave/PlayList.js";

function MyRecords() {
  const [soundList, setSoundList] = useState([
    {
      id: 0,
      title: "sound1",
      url: "https://deepfx.s3.ap-northeast-2.amazonaws.com/sound/650f60c3-d602-4ce5-9d8a-563f86f7c4f2notifications-sound-127856.mp3",
    },
    {
      id: 1,
      title: "sound2",
      url: "https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3",
    },
  ]);

  const [selectedTrack, setSelectedTrack] = useState(soundList[0]);

  return (
    <Container>
      <Waveform url={selectedTrack.url} />
      <PlayList
        tracks={soundList}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </Container>
  );
}

const Container = styled.div`
  color: white;
  font-family: "Noto Sans", sans-serif;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: fit-content;
`;

const Wave = styled.div`
  margin-top: 50px;
  float: right;
  box-sizing: border-box;
  width: 60vw;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 19.8336px;
  background: #222529;
  margin-left: 60vw;
`;

export default MyRecords;
