import React from 'react';
import styled from 'styled-components';

import { cyan, neutrals } from '../utils/colors';

const StyledNavLink = styled.a`
  color: ${neutrals['blue-grey-050']};
  text-decoration: none;
  font-weight: 700;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    color: ${cyan['cyan-vivid-500']};
  }

  &:focus {
    color: ${cyan['cyan-vivid-500']};
  }
`;

export default StyledNavLink;
