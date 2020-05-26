import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontPresets, transitions } from '../styles/theme';
import SecondaryText from './secondaryText';
import { Hr } from '../styles/common';
import GatsbyImage from 'gatsby-image';
import Button from './button';
import BackgroundImage from 'gatsby-background-image';
import Modal from './modal';

const ExpansionGroup = ({ data, images, noTabCards }) => {
  const [activeItem, setActiveItem] = useState(data[0]);
  const { floorPlan } = activeItem;
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  // console.log('active', activeItem);
  return (
    <Container>
      {!noTabCards && (
        <TabsContainer>
          {data.map((item) => (
            <TabCard
              key={item.heading}
              selected={activeItem.heading === item.heading}
              onClick={() => setActiveItem(item)}
            >
              <StyledSecondaryText
                heading={item.heading}
                paragraph={item.paragraph}
                theme="light"
              />
            </TabCard>
          ))}
        </TabsContainer>
      )}
      <ExpansionContainer>
        <ExpansionBackground
          fluid={[
            images.find((image) => image.title === activeItem.image).fluid,
          ]}
        />
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
                <Title>CITY</Title>
                <Subtitle>{floorPlan.city}</Subtitle>
              </Item>
              <Hr variant="thin" />
              <Item>
                <Title>STATE</Title>
                <Subtitle>{floorPlan.state}</Subtitle>
              </Item>
              <Hr variant="thin" />
              <Item>
                <Title>PROPERTY</Title>
                <Subtitle>{floorPlan.property}</Subtitle>
              </Item>
              <Hr variant="thin" />
              <Actions>
                <Button
                  text="VIEW PROPERTY DETAILS"
                  variant="white"
                  handleClick={() => setDetailsOpen(true)}
                />
                <DownloadLink>
                  <a href={floorPlan.downloadUrl} target="_blank" download>
                    Download Property Map
                  </a>
                </DownloadLink>
              </Actions>
            </InformationContainer>
          </SideBar>
        </FloorPlanContainer>
      </ExpansionContainer>
      <Modal isOpen={isDetailsOpen} onClose={() => setDetailsOpen(false)}>
        <ModalImage
          imgStyle={{ objectFit: 'contain' }}
          fluid={
            images.find((image) => image.title === floorPlan.detailImage).fluid
          }
        />
      </Modal>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
`;
const TabsContainer = styled.section`
  color: ${colors.dark};
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TabCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  :not(:last-child) {
    margin-right: var(--cards-margin);
  }
  ${({ selected }) => selected && `border-bottom: solid 16px ${colors.dark}`};
  cursor: pointer;
`;

const StyledSecondaryText = styled(SecondaryText)`
  padding: 0;
  margin-bottom: 60px;
`;

const ExpansionContainer = styled.section`
  border-top: solid 16px ${colors.dark};
  // make container full width by compensating body margin
  --side-margin: calc(-1 * var(--body-side-padding));
  margin: 0 var(--side-margin);
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
const DownloadLink = styled(Subtitle)`
  :hover {
    text-decoration: underline;
  }
`;

const ModalImage = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
`;

export default ExpansionGroup;
