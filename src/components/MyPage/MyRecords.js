import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Waveform from "../SoundWave/Waveform.js";
import PlayList from "../SoundWave/PlayList.js";
import axios from "axios";

function MyRecords() {
  const [isUpdated, setIsUpdated] = useState(0);

  const [soundList, setSoundList] = useState([
    {
      id: 0,
      title: "default",
      url: "https://deepfx.s3.ap-northeast-2.amazonaws.com/sound/650f60c3-d602-4ce5-9d8a-563f86f7c4f2notifications-sound-127856.mp3",
      severIdx: 0,
    },
  ]);

  const fetchHistory = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}api/user/history`,
      {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("jwtToken"),
        },
      }
    );

    console.log(response);

    const result = response.data.result;

    var temp = [];

    result.map((a, i) => {
      //console.log(a);
      temp.push({
        id: i,
        title: a.soundName,
        url: a.soundURL,
        serverIdx: a.soundIdx,
        isUpdated: isUpdated,
      });
    });

    setSoundList(temp);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const deleteClick = () => {
    fetchHistory();
  };

  const [selectedTrack, setSelectedTrack] = useState(soundList[0]);

  return (
    <Container>
      <Waveform
        url={selectedTrack.url}
        fileName={selectedTrack.title}
        serverIdx={selectedTrack.serverIdx}
        deleteClick={deleteClick}
      />
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
