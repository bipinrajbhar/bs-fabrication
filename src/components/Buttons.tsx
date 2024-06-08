import styled from 'styled-components';

import { cyan } from '../utils/colors';
import { typeScale } from '../utils/type-scale';

const Button = styled.button`
  padding: 12px 16px;

  border: none;

  font-family: 'Roboto';
  font-size: ${typeScale['text-base']};
  font-weight: 700;

  border-radius: 4px;

  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${cyan['cyan-vivid-500']};
  color: white;

  &:hover {
    background-color: ${cyan['cyan-vivid-600']};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${cyan['cyan-vivid-500']};

  border: 1px solid ${cyan['cyan-vivid-500']};

  &:hover {
    background-color: ${cyan['cyan-vivid-050']};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  color: ${cyan['cyan-vivid-500']};

  &:hover {
    background-color: ${cyan['cyan-vivid-050']};
  }
`;
