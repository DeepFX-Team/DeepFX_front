import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import WaveSurfer from "wavesurfer.js";

import axios from "axios";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barMinHeight: 2,
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
});

export default function Waveform({
  url,
  fileName,
  serverIdx,
  deleteClick,
  mode,
}) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const soundDownload = () => {
    axios({
      url: url, //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", fileName + ".mp3"); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  };

  const deleteSound = async () => {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}api/sound/history/${serverIdx}`,
      {},
      {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("jwtToken"),
        },
      }
    );

    if (response.data.returnCode === 1000) {
      deleteClick();
    }
  };

  const saveSound = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}api/sound/history/${serverIdx}`,
      {},
      {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("jwtToken"),
        },
      }
    );

    console.log(response);

    if (response.data.returnCode === 1000) {
      deleteClick();
    }
  };

  return (
    <WaveContainer>
      <div id="waveform" ref={waveformRef} />
      <Controls>
        {!playing ? (
          <PlayBtn onClick={handlePlayPause}>
            {!playing ? "Play" : "Pause"}
          </PlayBtn>
        ) : (
          <PauseBtn onClick={handlePlayPause}>
            {!playing ? "Play" : "Pause"}
          </PauseBtn>
        )}

        <SoundIcon src="img/download.png" onClick={soundDownload} />
        {mode === "main" ? (
          <SoundIcon src="img/add-library.png" onClick={saveSound} />
        ) : (
          <SoundIcon src="img/trash.png" onClick={deleteSound} />
        )}
      </Controls>
    </WaveContainer>
  );
}

const WaveContainer = styled.div`
  width: 80vw;
`;

const Controls = styled.div`
  display: flex;
  text-align: left;
  padding: 1em;
  align-items: center;
  gap: 15px;
`;

const PlayBtn = styled.button`
  background: #ff4500;
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  outline: none;
  text-transform: uppercase;
  transition: all 0.2s ease;
  &:hover {
    background: #d63d05;
  }
`;

const PauseBtn = styled.button`
  background: white;
  color: black;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  outline: none;
  text-transform: uppercase;
  transition: all 0.2s ease;
  &:hover {
    background: #d63d05;
  }
`;

const SoundIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
