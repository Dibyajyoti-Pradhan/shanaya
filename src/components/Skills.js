// src/components/Skills.js

import React from "react";
import styled from "styled-components";
import { skills } from "../data/data";

const SkillsSection = styled.section`
  max-width: 1100px;
  margin: 100px auto 0;
  padding: 0 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  .skills {
    .skill-category {
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;

      h3 {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
        flex: 0.2;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
          flex: 0.3;
        }
      }

      .skill-items {
        display: flex;
        flex-direction: row;
        flex: 0.8;
        flex-wrap: wrap;
        gap: 15px;

        @media (max-width: 768px) {
          flex: 0.7;
        }

        span {
          background-color: ${({ theme }) => theme.colors.accent};
          color: ${({ theme }) => theme.colors.white};
          padding: 10px 15px;
          border-radius: ${({ theme }) => theme.borderRadius};
          font-size: 14px;
          font-family: ${({ theme }) => theme.fonts.mono};
          position: relative;
          transition: ${({ theme }) => theme.transition};
          overflow: hidden;
          cursor: pointer;
          outline: none;
          tabindex: 0;
          border: 1px solid ${({ theme }) => theme.colors.primary};

          &:hover,
          &:focus {
            box-shadow: 0px 0px 15px 5px ${({ theme }) => theme.colors.primary};
            transform: scale(1.05);
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skillGroup, idx) => (
          <div className="skill-category" key={idx}>
            <h3>{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, skillIdx) => (
                <span key={skillIdx} tabIndex="0">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
