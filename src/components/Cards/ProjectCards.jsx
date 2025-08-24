import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGlobe, FaFigma } from 'react-icons/fa'; // ✅ Import icons

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  max-width: 100%;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.primary + 15};
  color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const ProjectCards = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>

        {/* ✅ Link buttons for GitHub / Website / Figma */}
        <Links>
          {project.github && (
            <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </LinkButton>
          )}
          {project.live && (
            <LinkButton href={project.live} target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </LinkButton>
          )}
          {project.figma && (
            <LinkButton href={project.figma} target="_blank" rel="noopener noreferrer">
              <FaFigma />
            </LinkButton>
          )}
        </Links>
      </Details>
    </Card>
  );
};

export default ProjectCards;
