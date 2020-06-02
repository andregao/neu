import React, { useState } from 'react';
import Carousel from './carousel';
import { Hr } from '../styles/common';
import Button from './button';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { colors, devices, fontPresets, transitions } from '../styles/theme';
import GatsbyImage from 'gatsby-image';
import SecondaryText from './secondaryText';
import Modal from './modal';

const Expansion = ({ activeItem, images }) => {
  const { floorPlan } = activeItem;
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  return (
    <Container>
      <Carousel imageTitles={activeItem.imageTitles} images={images} />
      <ExpansionCards>
        {activeItem.cards.map(({ heading, paragraph }) => (
          <ExpansionCard key={heading}>
            <StyledSecondaryText
              heading={heading}
              paragraph={paragraph}
              theme="dark"
              hrVariant="thin"
            />
          </ExpansionCard>
        ))}
      </ExpansionCards>
      <FloorPlanContainer>
        <MapImage
          fluid={
            images.find((image) => image.title === floorPlan.mapImage).fluid
          }
        />
        <SideBar>
          <SideBarHeading>SAMPLE FLOOR PLANS</SideBarHeading>
          <Hr />
          <InformationContainer>
            <Item>
              <Title>SIZE</Title>
              <Subtitle>{floorPlan.size}</Subtitle>
            </Item>
            <Hr variant="thin" />
            <Item>
              <Title>TYPE</Title>
              <Subtitle>{floorPlan.type}</Subtitle>
            </Item>
            <Hr variant="thin" />
            <Item>
              <Title>INSTALL TIME</Title>
              <Subtitle>{floorPlan.installTime}</Subtitle>
            </Item>
            <Hr variant="thin" />
            <Actions>
              <Button
                text="VIEW DETAILS"
                variant="white"
                handleClick={() => setDetailsOpen(true)}
              />
              {/*<DownloadLink>*/}
              {/*  <a href={floorPlan.downloadUrl} target="_blank" download>*/}
              {/*    Download Property Map*/}
              {/*  </a>*/}
              {/*</DownloadLink>*/}
            </Actions>
          </InformationContainer>
        </SideBar>
      </FloorPlanContainer>
      <Modal isOpen={isDetailsOpen} handleClose={() => setDetailsOpen(false)}>
        <ModalImage
          imgStyle={{ objectFit: 'contain' }}
          fluid={
            images.find(
              (image) => image.title === activeItem.floorPlan.detailImage
            ).fluid
          }
        />
      </Modal>
    </Container>
  );
};
const Container = styled.section`
  border-top: solid 16px ${colors.dark};
  // make container full width by compensating body margin
  --side-margin: calc(-1 * var(--body-side-padding));
  margin: 0 var(--side-margin);
  @media (${devices.xs}) {
    margin: 0;
  }
  color: ${colors.white};
  background-color: ${colors.dark};
`;
const ExpansionBackground = styled(BackgroundImage)`
  width: 100vw;
  height: 800px;
  max-height: 100vmin;
`;

const ExpansionCards = styled.section`
  padding: 0 var(--body-side-padding);
  padding-top: var(--cards-margin);
  width: 100%;
  display: grid;
  grid-column-gap: var(--cards-margin);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;
const ExpansionCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${transitions.long};
`;

const FloorPlanContainer = styled.article`
  width: 100%;
  padding: 0 var(--body-side-padding);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
`;
const MapImage = styled(GatsbyImage)`
  flex: 2 1 400px;
`;
const SideBar = styled.aside`
  flex: 1 0 200px;
  margin: 50px var(--cards-margin) 50px 0;
  min-width: 205px;
`;
const SideBarHeading = styled.h3`
  ${fontPresets.secondaryHeading};
  margin-bottom: 20px;
`;
const InformationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  :first-child {
    margin: 30px 0 20px;
  }
  :not(:first-child) {
    margin: 20px 0;
  }
`;
const Title = styled.h4`
  ${fontPresets.sidebarTitle};
  margin-bottom: 7px;
`;
const Subtitle = styled.h5`
  ${fontPresets.sidebarSubtitle};
`;
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > :first-child {
    margin: 30px 0 20px;
  }
`;
// const DownloadLink = styled(Subtitle)`
//   :hover {
//     text-decoration: underline;
//   }
// `;
const StyledSecondaryText = styled(SecondaryText)`
  padding: 0;
  margin-bottom: 60px;
`;
const ModalImage = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  max-width: 1024px;
`;

export default Expansion;
