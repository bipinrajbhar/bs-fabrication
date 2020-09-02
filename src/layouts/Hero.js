import React from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../assets/background-images/background-1.webp';
import { neutrals } from '../utils/colors';
import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';
import { PrimaryLinkButton } from '../components/LinkButtons';

const Hero = ({ className }) => {
  return (
    <section id="hero" className={className}>
      <div className="heroGroup">
        <Title fontSize="text-4xl" color={neutrals['blue-grey-900']}>
          Welcome To BS Fabrication
        </Title>
        <Paragraph fontSize="text-base" color={neutrals['blue-grey-500']}>
          We are Industry Leader In Aluminum, Metal, Steel, And Stain Less Steel
          Fabrication.
        </Paragraph>
        <PrimaryLinkButton href="#contact">Contact Now</PrimaryLinkButton>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="150px">
        <path fill="white">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
          />
        </path>
      </svg>
    </section>
  );
};

const StyledHero = styled(Hero)`
  position: relative;
  background-image: url('${BackgroundImage}');
  background-size: cover;
  background-position: center;
  height: 800px;

  text-align: center;

  .heroGroup {
    padding: 150px 24px;
    margin: 0 auto;

    & > h1 {
      opacity: 0;
      animation-name: HeroAnimation;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & > svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default StyledHero;
