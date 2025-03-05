import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  text-align: center;
  padding: 1rem 0;
  font-family: 'Poppins';
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
        <SocialIcon href="https://github.com/mgcinindlovu" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com/mgcini.ndlovu.10004" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
      </SocialIcons>
      <p>© 2025 My Portfolio</p>
    </FooterContainer>
  )
}

export default Footer