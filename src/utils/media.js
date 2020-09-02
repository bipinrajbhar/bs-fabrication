import { css } from 'styled-components';

const sizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const media = Object.keys(sizes).reduce((acc, curr) => {
  acc[curr] = (...args) => css`
    @media (min-width: ${sizes[curr]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
