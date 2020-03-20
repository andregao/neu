import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';
import Hr from './Hr';
import GatsbyImage from 'gatsby-image';

const SidebarList = ({ list, images }) => {
  return (
    <Container>
      {list.map(({ title, subtitle, imageTitle }) => (
        <React.Fragment key={title}>
          <Item>
            <Image
              fluid={images.find(image => image.title === imageTitle).fluid}
            />
            <Titles>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </Titles>
          </Item>
          <Hr variant="thin" />
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & :first-child {
    margin: 40px 0 15px;
  }
  & :not(:first-child) {
    margin: 20px 0;
  }
`;
const Image = styled(GatsbyImage)`
  width: 20%;
  height: 100%;
  margin-right: 20px;
`;
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h4`
  ${fontPresets.sidebarTitle};
  margin-bottom: 7px;
`;
const Subtitle = styled.h5`
  ${fontPresets.sidebarSubtitle};
`;

export default SidebarList;
