import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { colors, devices, transitions } from '../styles/theme';
import SecondaryText from './secondaryText';
import Modal from './modal';
import { getStyle, useObserver } from '../utils';
import Expansion from './expansion';

const ExpansionGroup = ({ data, images, noTabCards }) => {
  const cardsCount = data.length;
  const [activeItem, setActiveItem] = useState(data[0]);

  // modal controls
  const [isExpansionOpen, setExpansionOpen] = useState(false);

  // scroll reveal
  const ref = useRef(null);
  const [entry, setTarget] = useObserver();
  useEffect(() => {
    setTarget(ref.current);
  }, []);

  return (
    <>
      <DesktopContainer>
        {!noTabCards && (
          <TabsContainer
            ref={ref}
            style={getStyle(entry)}
            cardsCount={cardsCount}
          >
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
        <Expansion activeItem={activeItem} images={images} />
      </DesktopContainer>
      <MobileContainer>
        {!noTabCards && (
          <TabsContainer cardsCount={cardsCount}>
            {data.map((item) => (
              <TabCard
                key={item.heading}
                selected={activeItem.heading === item.heading}
                onClick={() => {
                  setActiveItem(item);
                  setExpansionOpen(true);
                }}
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
        {isExpansionOpen && (
          <Modal handleClose={() => setExpansionOpen(false)}>
            {/*Wrap the children to stop click events from bubbling up to modal overlay*/}
            <div onClick={(e) => e.stopPropagation()}>
              <Expansion activeItem={activeItem} images={images} />
            </div>
          </Modal>
        )}
      </MobileContainer>
    </>
  );
};

const DesktopContainer = styled.section`
  width: 100%;
  @media (${devices.xs}) {
    display: none;
  }
`;
const TabsContainer = styled.section`
  color: ${colors.dark};
  padding-top: 20px;
  width: 100%;
  display: grid;
  grid-template: none / repeat(${({ cardsCount }) => cardsCount}, 1fr);
  grid-gap: var(--cards-margin);
  ${transitions.long};

  @media (${devices.xs}) {
    display: grid;
    grid-template: repeat(${({ cardsCount }) => cardsCount}, 1fr) / none;
  }
`;

const TabCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: solid 16px transparent;
  ${({ selected }) => selected && `border-bottom-color: ${colors.dark};`};
  :hover {
    border-bottom: solid 16px ${colors.darkTransparent};
    ${({ selected }) =>
      selected
        ? `border-bottom-color: ${colors.dark}`
        : `border-bottom-color: ${colors.darkTransparent}`};
    ${({ selected }) => !selected && `cursor: pointer`};
    ${({ selected }) => !selected && `transform: scale(1.05)`};
  }
  ${transitions.medium};

  @media (${devices.xs}) {
    border: none;
    border-radius: 1%;
    padding: 16px;
    background-color: ${colors.white};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    :hover {
      border-bottom: none;
    }
  }
`;

const StyledSecondaryText = styled(SecondaryText)`
  padding: 0;
  margin-bottom: 60px;
`;

const MobileContainer = styled.section`
  display: none;
  @media (${devices.xs}) {
    display: grid;
  }
`;

export default ExpansionGroup;
