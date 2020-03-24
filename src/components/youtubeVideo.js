import React from 'react';
import styled from 'styled-components';

const YoutubeVideo = ({ id }) => {
  return (
    <Container>
      <VideoIframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  // set all children with position:absolute to have zero content height
  position: relative; 
  & > * {
    position: absolute;
  }
  
  padding-bottom: 56.25%; // set container's height with padding percentage based on width and 16:9 aspect ratio

  filter: grayscale(35%);
  &:hover {
    filter: none;
  }
`;
const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default YoutubeVideo;
