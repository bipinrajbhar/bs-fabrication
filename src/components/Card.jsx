import React from 'react';
import styled from 'styled-components';

import { neutrals } from '../utils/colors';
import Paragraph from '../elements/Paragraph';
import Title from '../elements/Title';

const Card = ({
  img,
  title,
  location,
  images,
  setImages,
  setCurrentImage,
  setToggleModal,
}) => {
  return (
    <StyledCard
      onClick={() => {
        setCurrentImage(images[0]);
        setImages(images);
        setToggleModal(true);
        console.log(images);
      }}
    >
      <Title fontSize="text-2xl" color={neutrals['blue-grey-000']}>
        {title}
      </Title>
      <Paragraph
        fontSize="text-base"
        color={neutrals['blue-grey-000']}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <svg viewBox="0 0 20 20" fill="currentColor" width="16px" height="16px">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="location">{location}</span>
      </Paragraph>
      <img src={img} alt={title} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin: 24px;
  padding: 0 16px;
  height: 250px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }

  &:hover img {
    transform: translateY(-20px);
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .location {
    padding: 0 10px;
  }
`;

export default Card;
