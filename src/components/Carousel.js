import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import CloseButton from './CloseButton';

const Carousel = ({
  toggleModal,
  setToggleModal,
  images = [],
  currentImage,
  setCurrentImage,
}) => {
  console.log(currentImage);
  return (
    <React.Fragment>
      {images.length > 0 && toggleModal ? (
        <Modal>
          <BackDrop>
            <Container>
              <CloseButton handleClick={() => setToggleModal(false)} />
              {currentImage && <BigImage src={currentImage.src} />}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                }}
              >
                <SmallImageContainer>
                  {images.map(
                    (image, index) => (
                      <SmallImage
                        key={index}
                        src={image.src}
                        onClick={() => setCurrentImage({ src: image.src })}
                      />
                    )
                    // console.log(image.src)
                  )}
                </SmallImageContainer>
              </div>
            </Container>
          </BackDrop>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SmallImage = styled.img`
  width: auto;
  height: 100px;
  margin: 10px;
  border: 2px solid white;
`;

const BigImage = styled.img`
  width: auto;
  height: 100vh;
`;

const SmallImageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  max-width: 1280px;
`;

export default Carousel;
