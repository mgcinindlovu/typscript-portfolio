import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/dairy.png';
import image2 from '../assets/restuarent.png';
import image3 from '../assets/Fintech.png';

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #000000;
  text-align: center;
  color: white;
`;

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#0056b3' : '#35353528')};
  color: white;
  border:1px solid #0056b3 ;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ProjectsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  width: 300px;
  text-align: left;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const projectsData = [
  { id: 1, category: 'Frontend', title: 'DairyBoard Website Project', image: image, github: 'https://github.com/mgcinindlovu/dairybord', live: 'https://dairybord.vercel.app/' },
  { id: 2, category: 'Frontend', title: 'Restuarent Website Project', image: image2, github: 'https://github.com/mgcinindlovu/Restuarent', live: 'https://restuarent-virid.vercel.app/' },
  { id: 3, category: 'Frontend', title: 'Financial Dashboard Project', image: image3, github: 'https://github.com/mgcinindlovu/Fintrack', live: 'https://fintrack-one-blush.vercel.app/' },
  { id: 4, category: 'Backend', title: 'Backend Project 1', image: image, github: '#', live: '#' },
  { id: 5, category: 'Backend', title: 'Backend Project 2', image: image2, github: '#', live: '#' },
  { id: 6, category: 'Backend', title: 'Backend Project 3', image: image3, github: '#', live: '#' },
  { id: 7, category: 'UI/UX', title: 'UI/UX Project 1', image: image, live: '#' },
  { id: 8, category: 'UI/UX', title: 'UI/UX Project 2', image: image2, live: '#' },
  { id: 9, category: 'UI/UX', title: 'UI/UX Project 3', image: image3, live: '#' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredProjects = projectsData.filter(project => project.category === activeCategory);

  return (
    <ProjectsSection>
      <CategoryButtons>
        {['Frontend', 'Backend', 'UI/UX'].map(category => (
          <CategoryButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category} Projects
          </CategoryButton>
        ))}
      </CategoryButtons>
      <ProjectsContent>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <div>
              {/* Conditionally render GitHub icon based on category */}
              {project.category !== 'UI/UX' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} fontSize="30px" color="blue" />
                </a>
              )}
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEye} fontSize="30px" color="blue" />
              </a>
            </div>
          </ProjectCard>
        ))}
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;
