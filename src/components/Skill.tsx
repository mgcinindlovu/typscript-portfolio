import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import image from '../assets/image.jpg'

const SkillsSection = styled.section`
  padding: 2rem;
  background-color: #000000;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const SkillCard = styled.li`
  background: black;
  color: #333;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover .tooltip {
    visibility: visible;
    transform: translateY(20px);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
  }
`

const SkillName = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const SkillLevel = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
`

const SkillProgress = styled.div<{ level: number }>`
  width: ${props => props.level}%;
  background-color: #007bff;
  height: 10px;
`

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.875rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
`

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: url(${image});
  background-size: cover;
  background-position: center;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const CounterSection = styled.div`
  text-align: center;
`

const CounterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const CounterValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
`

const Skill = () => {
  const [projectsCount, setProjectsCount] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)
  const [clientsCount, setClientsCount] = useState(0)

  useEffect(() => {
    const animateCounter = (start: number, end: number, duration: number, setCount: React.Dispatch<React.SetStateAction<number>>) => {
      const incrementTime = (duration / end) * 2
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) {
          clearInterval(timer)
        }
      }, incrementTime)
      return () => clearInterval(timer)
    }

    animateCounter(0, 50, 2000, setProjectsCount)
    animateCounter(0, 10, 2000, setExperienceCount)
    animateCounter(0, 100, 2000, setClientsCount)
  }, [])

  return (
    <>
      <CounterContainer>
        <CounterSection>
          <CounterTitle>Projects Completed</CounterTitle>
          <CounterValue>{projectsCount}+</CounterValue>
        </CounterSection>
        <CounterSection>
          <CounterTitle>Years of Experience</CounterTitle>
          <CounterValue>{experienceCount}+</CounterValue>
        </CounterSection>
        <CounterSection>
          <CounterTitle>Happy Clients</CounterTitle>
          <CounterValue>{clientsCount}+</CounterValue>
        </CounterSection>
      </CounterContainer>
      <SkillsSection>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsContainer>
          <div className="card">
            <SkillsTitle>Frontend Skills</SkillsTitle>
            <SkillsList>
              <SkillCard>
                <SkillName>JavaScript</SkillName>
                <SkillLevel>
                  <SkillProgress level={90} />
                  <Tooltip className="tooltip">90%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>React</SkillName>
                <SkillLevel>
                  <SkillProgress level={85} />
                  <Tooltip className="tooltip">85%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>HTML & CSS</SkillName>
                <SkillLevel>
                  <SkillProgress level={100} />
                  <Tooltip className="tooltip">90%</Tooltip>
                </SkillLevel>
              </SkillCard>
            </SkillsList>
          </div>
          <div className="card">
            <SkillsTitle>Backend Skills</SkillsTitle>
            <SkillsList>
              <SkillCard>
                <SkillName>Node.js</SkillName>
                <SkillLevel>
                  <SkillProgress level={80} />
                  <Tooltip className="tooltip">80%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>Python</SkillName>
                <SkillLevel>
                  <SkillProgress level={75} />
                  <Tooltip className="tooltip">75%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>Git</SkillName>
                <SkillLevel>
                  <SkillProgress level={70} />
                  <Tooltip className="tooltip">70%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>SQL</SkillName>
                <SkillLevel>
                  <SkillProgress level={65} />
                  <Tooltip className="tooltip">65%</Tooltip>
                </SkillLevel>
              </SkillCard>
            </SkillsList>
          </div>
          <div className="card">
            <SkillsTitle>UI/UX Design Skills</SkillsTitle>
            <SkillsList>
              <SkillCard>
                <SkillName>Wireframing</SkillName>
                <SkillLevel>
                  <SkillProgress level={85} />
                  <Tooltip className="tooltip">85%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>Prototyping</SkillName>
                <SkillLevel>
                  <SkillProgress level={80} />
                  <Tooltip className="tooltip">80%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>User Research</SkillName>
                <SkillLevel>
                  <SkillProgress level={75} />
                  <Tooltip className="tooltip">75%</Tooltip>
                </SkillLevel>
              </SkillCard>
              <SkillCard>
                <SkillName>Visual Design</SkillName>
                <SkillLevel>
                  <SkillProgress level={70} />
                  <Tooltip className="tooltip">70%</Tooltip>
                </SkillLevel>
              </SkillCard>
            </SkillsList>
          </div>
        </SkillsContainer>
      </SkillsSection>
    </>
  )
}

export default Skill
