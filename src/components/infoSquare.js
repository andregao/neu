import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../styles/theme';
import CheckIcon from './icons/check';
import { Hr } from '../styles/common';

const InfoSquare = ({ data: { title, subtitle, info, note }, className }) => {
  return (
    <Container className={className}>
      <Square>
        <InfoContainer>
          <SubtitleContainer>
            <div style={{ width: '28px', height: '28px' }}>
              <CheckIcon fill={colors.teal} />
            </div>
            <Subtitle>{subtitle}</Subtitle>
          </SubtitleContainer>
          <Title>{title}</Title>
          <Hr variant="thin" style={{ width: '71%' }} />
          <NoteContainer>
            <Info>{info}</Info>
            <Note>{note}</Note>
          </NoteContainer>
        </InfoContainer>
      </Square>
    </Container>
  );
};
const Container = styled.aside`
  width: 100%;
`;
const Square = styled.div`
  border: 1px solid ${colors.dark};
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
const Subtitle = styled.h5`
  ${fontPresets.infoSquareSubtitle};
  padding-top: 7px;
`;
const Title = styled.h4`
  ${fontPresets.infoSquareTitle};
`;
const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > :first-child {
    margin-right: 10px;
  }
`;
const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
const Info = styled.h5`
  ${fontPresets.infoSquareInfo};
  color: ${colors.info};
`;
const Note = styled.h5`
  ${fontPresets.infoSquareNote};
`;

export default InfoSquare;
