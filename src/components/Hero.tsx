import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { ReactTyped } from 'react-typed'
import image from '../assets/hero.jpg'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: url(${image}) no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 0 4rem;

  div {
    display: flex;
  
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 0 1rem;
  }
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-top: 9rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-top: 4rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  min-height: 40px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const HeroButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(90deg, #68b1ff, #4fa4ff);
  border-radius: 5px;
  text-decoration: none;
  margin: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background: linear-gradient(90deg, #0056b3, #004494);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 0 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`

const SocialIcon = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    color: #007bff;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroSubtitle>
        <ReactTyped
          strings={[
            "I'm Mgcini Ndlovu, a passionate software developer.",
            "I build responsive and interactive web applications.",
            "Let's create something amazing together!"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </HeroSubtitle>
      <div>
        <HeroButton href="#about">Download CV</HeroButton>
        <HeroButton href="#contact">Contact Me</HeroButton>
      </div>
      <SocialIcons>
        <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
      </SocialIcons>
    </HeroSection>
  )
}

export default Hero
