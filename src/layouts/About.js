import React from 'react';
import styled from 'styled-components';

import background2 from '../../assets/background-images/background-4.webp';
import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';
import { neutrals } from '../utils/colors';

const About = ({ className }) => {
  return (
    <section id="about" className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="150px"
        className="wave-top"
      >
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
      <div className="about-group">
        <Title fontSize="text-3xl" color={neutrals['blue-grey-050']}>
          BS Fabrication was established in 2004 by Vinod Rajbhar.
        </Title>
        <Paragraph fontSize="text-base" color={neutrals['blue-grey-050']}>
          B. S. Fabrication Works on Aluminum Doors and Windows, Composite
          Panels, Aluminum and GI Flush Doors, Spider Glass Canopy and Frame
          Less Glass, Semi Unitized Structural and Curtain Wall Galzing, M.S.
          and S.S. Glass Railings, etc.
        </Paragraph>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="150px"
        className="wave-bottom"
      >
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

const StyledAbout = styled(About)`
  margin: 50px 0;

  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${background2});
  background-size: cover;
  background-position: center;
  height: 600px;

  .about-group {
    max-width: 1280px;
  }

  & .wave-top {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }

  & .wave-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default StyledAbout;
