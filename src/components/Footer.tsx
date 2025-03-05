import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  text-align: center;
  padding: 1rem 0;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIcon href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
      </SocialIcons>
      <p>© 2025 My Portfolio</p>
    </FooterContainer>
  )
}

export default Footer