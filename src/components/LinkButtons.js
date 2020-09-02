import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { cyan } from '../utils/colors';
import { typeScale } from '../utils/type-scale';

const MODIFIER_CONFIG = {
  large: () => `
    padding: 15px 30px;
    font-size: ${typeScale['text-xl']}
  `,
};

const StyledLink = styled.a`
  display: inline-block;

  padding: 12px 16px;

  border: none;

  font-family: 'Roboto';
  font-size: ${typeScale['text-base']};
  font-weight: 700;

  border-radius: 4px;

  cursor: pointer;

  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export const PrimaryLinkButton = styled(StyledLink)`
  &:link,
  &:visited {
    background-color: ${cyan['cyan-vivid-500']};
    color: white;

    text-decoration: none;
  }

  &:hover,
  &:active {
    background-color: ${cyan['cyan-vivid-600']};
  }
`;
