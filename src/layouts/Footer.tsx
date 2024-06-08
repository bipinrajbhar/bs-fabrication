import React from 'react';
import styled from 'styled-components';

import { neutrals } from '../utils/colors';
import logo from '../assets/logo.svg';
import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';
import media from '../utils/media';

const StyledFooter = styled.footer`
  background-color: ${neutrals['blue-grey-900']};
  padding: 50px 24px;

  .footer-group {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;

    ${media.md`
      grid-template-columns: repeat(2, 1fr);
    `}

    .icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }

    .mail {
      color: ${neutrals['blue-grey-050']};
    }

    .logo {
      width: 100px;
      height: auto;
    }

    .location {
      display: grid;
      grid-template-columns: max-content 1fr;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-group">
        <div className="company-summary">
          <img className="logo" src={logo} alt="BS Fabrication" />
          <Paragraph color={neutrals['blue-grey-050']}>
            We Are Industry Leader In Building Elevation Aluminum, MS And SS
            Fabrication
          </Paragraph>
        </div>
        <div id="contact" className="contact">
          <Title fontSize="h2" color={neutrals['blue-grey-050']}>
            Contact
          </Title>
          <Paragraph className="location" color={neutrals['blue-grey-050']}>
            <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Unit No. 03, Near Asmira English Hight School, Tunga village, Saki
            Vihar Road, Powai, Mumbai - 400072
          </Paragraph>
          <a href="mailto:bs.fabrication@yahoo.com" className="mail">
            <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            bs.fabrication@yahoo.com
          </a>
          <br />
          <a href="mailto:bsfabrication.info@gmail.com" className="mail">
            <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            bsfabrication.info@gmail.com
          </a>
          <Paragraph color={neutrals['blue-grey-050']}>
            <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 9987065718 / +91 7039883718
          </Paragraph>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
