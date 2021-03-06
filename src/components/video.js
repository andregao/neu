import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../styles/theme';
import { getStyle, useObserver } from '../utils';

const Video = ({ src, autoplay, poster }) => {
  const videoEl = useRef(null);
  const [paused, setPaused] = useState(!autoplay);
  const handlePlaybackClick = () => {
    const video = videoEl.current;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  const handleVideoClick = () => {
    videoEl.current.muted = false;
  };

  // scroll reveal
  const ref = useRef(null);
  const [entry, setTarget] = useObserver(0.15);
  useEffect(() => {
    setTarget(ref.current);
  }, []);

  return (
    <Container ref={ref} style={getStyle(entry)} onClick={handleVideoClick}>
      <video
        width="100%"
        autoPlay={autoplay || false}
        poster={poster || ''}
        loop
        muted
        ref={videoEl}
        controls
      >
        <source src={src} type="video/mp4" />
      </video>
      {/*<PlaybackControl onClick={handlePlaybackClick}>*/}
      {/*  {paused ? <PlayIcon /> : <StyledPauseIcon />}*/}
      {/*</PlaybackControl>*/}
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  position: relative;
  ${transitions.long};
`;
const PlaybackControl = styled.button`
  border: none;
  outline: none;
  position: absolute;
  width: 50%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  color: ${colors.white};
`;

const PlayIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -50 448 612"
    width="120"
    height="120"
  >
    <defs>
      <filter id="shadow">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="20"
          floodColor={colors.warmGreen}
        />
      </filter>
    </defs>
    <title>play icon</title>
    <path
      fill="currentColor"
      filter="url(#shadow)"
      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
    />
  </svg>
);
const PauseIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="100"
    height="100"
    className={className}
  >
    <defs>
      <filter id="shadow">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="20"
          floodColor={colors.warmGreen}
        />
      </filter>
    </defs>
    <title>pause icon</title>
    <path
      fill="currentColor"
      filter="url(#shadow)"
      d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
    />
  </svg>
);

const StyledPauseIcon = styled(PauseIcon)`
  color: transparent;
  &:hover {
    color: ${colors.white};
  }
  transition: color 0.4s;
`;

export default Video;
