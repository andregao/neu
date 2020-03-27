import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/theme';

const Video = ({ src }) => {
  const videoEl = useRef(null);
  const [paused, setPaused] = useState(null);
  const handleClick = () => {
    const video = videoEl.current;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <Container>
      <video width="100%" autoPlay loop muted ref={videoEl}>
        <source src={src} type="video/mp4" />
      </video>
      <Control onClick={handleClick}>
        {paused ? <PlayIcon /> : <PauseIcon />}
      </Control>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  position: relative;
`;
const Control = styled.button`
  color: transparent;
  border: none;
  outline: none;
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  &:hover {
    color: ${colors.white};
  }
  transition: color 0.4s;
`;

const PlayIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="100"
    height="100"
  >
    <title>play</title>
    <path
      fill="currentColor"
      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
    ></path>
  </svg>
);
const PauseIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="100"
    height="100"
  >
    <title>pause</title>
    <path
      fill="currentColor"
      d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
    ></path>
  </svg>
);

export default Video;
