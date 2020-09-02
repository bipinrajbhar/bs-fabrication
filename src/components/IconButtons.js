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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 16px;

  border: none;

  font-family: 'Roboto';
  font-size: ${typeScale['text-base']};
  font-weight: 700;

  border-radius: 4px;

  cursor: pointer;

  ${applyStyleModifiers(MODIFIER_CONFIG)};

  .icon {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }
`;

export const PrimaryIconButton = styled(Button)`
  background-color: ${cyan['cyan-vivid-500']};
  color: white;

  &:hover {
    background-color: ${cyan['cyan-vivid-600']};
  }
`;
