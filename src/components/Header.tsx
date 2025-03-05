import React, { useState } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #0000007f;
  color: #fff;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  gap: 50rem;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }
`

const Logo = styled.h1`
  margin: 0;
`

// Define the type for isOpen in the HamburgerIcon component
interface HamburgerIconProps {
  isOpen: boolean;
}

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    width: 100%;
    text-align: center;
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    background-color: #0000007f;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    transition: transform 0.3s ease-in-out;
  }
`

const Li = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

// HamburgerIcon component, with the correct typing
const HamburgerIcon = styled.div<HamburgerIconProps>`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 5px;

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      transform: ${(props) => (props.isOpen ? 'rotate(45deg)' : 'none')};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.isOpen ? 'rotate(-45deg)' : 'none')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <HeaderContainer>
      <Logo>MGee</Logo>
      <HamburgerIcon isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
      <Nav isOpen={isOpen}>
        <Ul>
          <Li><a href="#">Home</a></Li>
          <Li><a href="#about">About</a></Li>
          <Li><a href="#projects">Projects</a></Li>
          <Li><a href="#contact">Contact</a></Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
