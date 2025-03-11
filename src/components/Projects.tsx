import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/dairy.png';
import image2 from '../assets/restuarent.png';
import image3 from '../assets/Fintech.png';
import image4 from '../assets/jameson (1).png';
import image5 from '../assets/jameson (2).png';
import image6 from '../assets/Facebook post - 2.jpg';
import image9 from '../assets/1.jpg';
import image8 from '../assets/Instagram post (2).jpg';
import image7 from '../assets/Red and Blue Marketing Services Instagram Post.jpg';

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #000000;
  text-align: center;
  color: white;
  font-family: 'Poppins';
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
  background-color: transparent;
  color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #0056b3;
  width: 300px;
  text-align: left;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

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
  { id: 4, category: 'Graphic Design', title: 'Business Cards', image: image7,  live: 'https://www.canva.com/design/DAGddgIOR5w/3KhMQ59f-g8hqJ0vka-YMg/edit?utm_content=DAGddgIOR5w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
  { id: 5, category: 'Graphic Design', title: 'Branding', image: image8,  live: 'https://www.figma.com/proto/ZBHiGvUcROmrKfeghUUhR7/Social-media-posters?node-id=47-102&p=f&t=qGK8BOatJVy6elfp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1' },
  { id: 6, category: 'Graphic Design', title: 'Company business card', image: image9,  live: 'https://www.figma.com/proto/ZBHiGvUcROmrKfeghUUhR7/Social-media-posters?node-id=40-25&p=f&t=qGK8BOatJVy6elfp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1' },
  { id: 7, category: 'UI/UX', title: 'Jameson Website', image: image4, live: 'https://www.figma.com/proto/z1nBO1jZRnYCdVxt1OE9sV/Untitled?node-id=16-7&p=f&t=ATQqAvsO3m1gisyJ-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1' },
  { id: 8, category: 'UI/UX', title: 'Watch website', image: image5, live: 'https://www.figma.com/proto/z1nBO1jZRnYCdVxt1OE9sV/Untitled?node-id=178-17&p=f&t=PS7KtgfzFU3WPS5O-1&scaling=scale-down-width&content-scaling=fixed&page-id=160%3A2' },
  { id: 9, category: 'UI/UX', title: 'Real Estate website', image: image6, live: 'https://www.figma.com/proto/z1nBO1jZRnYCdVxt1OE9sV/Untitled?node-id=134-3401&p=f&t=fFFSTZRcur91qH3Q-1&scaling=min-zoom&content-scaling=fixed&page-id=16%3A243' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredProjects = projectsData.filter(project => project.category === activeCategory);

  return (
    <ProjectsSection id="projects">
      <CategoryButtons>
        {['Frontend', 'Graphic Design', 'UI/UX'].map(category => (
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
