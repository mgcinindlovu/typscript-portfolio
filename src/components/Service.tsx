import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const ServiceSection = styled.section`
  padding: 2rem;
  background-color: black;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const ServiceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const ServiceContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;  // Makes the cards stack on smaller screens

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const ServiceCard = styled.div.attrs<{ delay: number }>(({ delay }) => ({
  style: {
    animationDelay: `${delay}s`,
  },
}))<{ delay: number }>`
  background-color: transparent;
  border: 1px solid blue;
  color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  opacity: 0;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #007bff;
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 250px;  // Adjust the card size for smaller screens
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`

const ServiceCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const ServiceCardDescription = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`

const ServiceList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
`

const ServiceListItem = styled.li`
  margin-bottom: 0.5rem;
`

const Service = () => {
  return (
    <ServiceSection>
      <ServiceTitle>My Services</ServiceTitle>
      <ServiceContent>
        <ServiceCard delay={0}>
          <ServiceCardTitle>Web Development</ServiceCardTitle>
          <ServiceCardDescription>
            <ServiceList>
              <ServiceListItem>Responsive web design</ServiceListItem>
              <ServiceListItem>Frontend development with React</ServiceListItem>
              <ServiceListItem>Backend development with Node.js</ServiceListItem>
              <ServiceListItem>API integration</ServiceListItem>
            </ServiceList>
          </ServiceCardDescription>
        </ServiceCard>
       
        <ServiceCard delay={1}>
          <ServiceCardTitle>UI/UX Design</ServiceCardTitle>
          <ServiceCardDescription>
            <ServiceList>
              <ServiceListItem>User interface design</ServiceListItem>
              <ServiceListItem>User experience optimization</ServiceListItem>
              <ServiceListItem>Wireframing and prototyping</ServiceListItem>
              <ServiceListItem>Visual design</ServiceListItem>
            </ServiceList>
          </ServiceCardDescription>
        </ServiceCard>
        <ServiceCard delay={1}>
        <ServiceCardTitle>Graphic Design</ServiceCardTitle>
        <ServiceCardDescription>
          <ServiceList>
            <ServiceListItem>Logos & Branding</ServiceListItem>
            <ServiceListItem>Social Media Graphics</ServiceListItem>
            <ServiceListItem>Print Design</ServiceListItem>
            <ServiceListItem>Motion Graphics & Animation</ServiceListItem>
          </ServiceList>
        </ServiceCardDescription>
      </ServiceCard>
      </ServiceContent>
    </ServiceSection>
  )
}

export default Service
