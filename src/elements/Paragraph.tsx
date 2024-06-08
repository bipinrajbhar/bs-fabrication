import React from 'react';
import styled from 'styled-components';

import { typeScale } from '../utils/type-scale';

const Paragraph = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeScale[fontSize]};
  text-align: ${({ textAlign }) => textAlign};
`;

export default Paragraph;
