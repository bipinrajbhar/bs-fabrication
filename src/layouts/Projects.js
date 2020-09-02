import React, { useState } from 'react';
import styled from 'styled-components';

import { neutrals } from '../utils/colors';
import Title from '../elements/Title';
import Card from '../components/Card';
import ProjectsData from '../data/projects';
import media from '../utils/media';
import Carousel from '../components/Carousel';

const Projects = ({ className }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <section id="projects" className={className}>
      <Title fontSize="text-3xl" color={neutrals['blue-grey-900']}>
        Projects
      </Title>
      <section className="projects">
        {ProjectsData.map((p, index) => (
          <Card
            key={index}
            title={p.title}
            location={p.location}
            img={p.img}
            images={p.images}
            setImages={setImages}
            setCurrentImage={setCurrentImage}
            setToggleModal={setToggleModal}
          />
        ))}
      </section>

      <Carousel
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        images={images}
      />
    </section>
  );
};

console.log(media);

const StyledProjects = styled(Projects)`
  margin: 0 auto;
  padding: 50px 24px;
  max-width: 1280px;

  .projects {
    display: grid;

    ${media.sm`
    grid-template-columns: repeat(2, 1fr);

    `}

    ${media.md`
    grid-template-columns: repeat(2, 1fr);

    `}


    ${media.lg`
    grid-template-columns: repeat(3, 1fr);

    `}

    ${media.xl`
    grid-template-columns: repeat(3, 1fr);

    `}
  }
`;

export default StyledProjects;
