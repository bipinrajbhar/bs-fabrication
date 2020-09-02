import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background-color: rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }
`;

const CloseButton = ({ handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <svg viewBox="0 0 20 20" fill="white" width={24} height={24}>
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
};

export default CloseButton;
