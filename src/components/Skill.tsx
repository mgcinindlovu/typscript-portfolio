import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import image from '../assets/image.jpg';

const fillAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const SkillsSection = styled.section`
  padding: 2rem;
  background-color: #000000;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillCard = styled.div`
  background: black;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
`;

const SkillName = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div`
  width: 100%;
  background-color: #000000;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const SkillProgress = styled.div<{ level: number; animate: boolean }>`
  width: ${props => (props.animate ? `${props.level}%` : '0')};
  background-color: #007bff;
  height: 10px;
  border-radius: 5px;
  transition: width 1s ease-in-out;
`;

const Percentage = styled.span`
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #007bff;
`;

// Animated counter section
const CounterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const CounterBox = styled.div`
  text-align: center;
`;

const CounterNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
`;

const CounterLabel = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: white;
`;

const AnimatedCounter = ({ targetValue, label }: { targetValue: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    const duration = 2; // 2 seconds for the animation
    const increment = end / (duration * 100);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        start = end;
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <CounterBox>
      <CounterNumber>{count}</CounterNumber>
      <CounterLabel>{label}</CounterLabel>
    </CounterBox>
  );
};

const Skill = () => {
  const skillCategories = [
    {
      title: 'Frontend Skills',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML & CSS', level: 100 },
      ],
    },
    {
      title: 'Backend Skills',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 70 },
      ],
    },
    {
      title: 'UI/UX Design Skills',
      skills: [
        { name: 'Wireframing', level: 85 },
        { name: 'Prototyping', level: 80 },
        { name: 'User Research', level: 75 },
      ],
    },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SkillsSection ref={sectionRef}>
     
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsContainer>
        {skillCategories.map((category, index) => (
          <SkillCard key={index}>
            <SkillCategoryTitle>{category.title}</SkillCategoryTitle>
            <SkillList>
              {category.skills.map((skill, i) => (
                <SkillItem key={i}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>
                    <SkillProgress level={skill.level} animate={animate} />
                    <Percentage>{skill.level}%</Percentage>
                  </SkillLevel>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsContainer>
       <CounterSection>
     <AnimatedCounter targetValue={5} label="Years of Experience" />
     <AnimatedCounter targetValue={50} label="Projects Completed" />
     <AnimatedCounter targetValue={200} label="Happy Clients" />
   </CounterSection>
    </SkillsSection>
    
  );
};

export default Skill;
