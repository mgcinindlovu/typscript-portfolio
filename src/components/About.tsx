import React from 'react'
import styled, { keyframes } from 'styled-components'
import me from '../assets/me.jpg'

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #000000;
  color: white;
  flex-wrap: wrap;
  font-family: 'Poppins';

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const ProfileImage = styled.img`
  width: 500px;
  height: 400px;
  margin: 0 2rem 0 7rem;
  border-radius: 5%;
  animation: ${slideIn} 1s ease-out;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 400px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 250px;
    margin: 0 1rem 2rem 0;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 200px;
  }
`

const AboutContent = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`

const AboutText = styled.div`
  margin-bottom: 1rem;
`

const Paragraph = styled.p<{ delay: number }>`
  animation: ${slideIn} 1s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`

const About = () => {
  return (
    <AboutSection id="about">
      <ProfileImage src={me} alt="Mgcini Ndlovu" />
      <AboutContent>
        <h2>About Me</h2>
        <AboutText>
          <Paragraph delay={0}>Hello! I'm Mgcini Ndlovu, a passionate software developer with a love for creating innovative solutions. I have experience in various programming languages and frameworks, and I enjoy working on both frontend and backend development.</Paragraph>
          <Paragraph delay={5}>My journey in software development started with a curiosity for how things work and a desire to build something meaningful. Over the years, I have honed my skills and worked on numerous projects that have helped me grow as a developer.</Paragraph>
        </AboutText>
        <AboutText>
          <Paragraph delay={10}>When I'm not coding, I enjoy reading tech blogs, exploring new technologies, and contributing to open-source projects. I'm always eager to learn and take on new challenges.</Paragraph>
          <Paragraph delay={15}>Feel free to explore my portfolio to see some of the projects I've worked on. If you'd like to get in touch, don't hesitate to contact me!</Paragraph>
        </AboutText>
      </AboutContent>
    </AboutSection>
  )
}

export default About
