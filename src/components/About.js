// src/components/About.js

import React from "react";
import styled from "styled-components";
import { personalInfo } from "../data/data";

const AboutSection = styled.section`
  max-width: 1100px;
  margin: 100px auto 0;
  padding: 0 20px;

  .content-wrapper {
    display: flex;
    gap: 50px;
    align-items: center;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .profile-picture {
      flex: 1;
      position: relative;
      overflow: visible;
      cursor: pointer;
      outline: none;

      img {
        width: 350px;
        height: 350px;
        object-fit: cover;
        border-radius: 50%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

        &:hover,
        &:focus {
          box-shadow: 0 0 50px 15px ${({ theme }) => theme.colors.profileGlow};
          transform: translateY(-5px);
        }
      }
    }

    .text-content {
      flex: 2;

      h1 {
        font-size: 48px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.text};
      }

      h2 {
        font-size: 32px;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.text};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 20px;

        a {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <div className="content-wrapper">
        <div className="profile-picture">
          <img
            tabIndex="0"
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt={personalInfo.name}
          />
        </div>
        <div className="text-content" tabIndex="0">
          <h1>Hi 👋, I'm {personalInfo.shortName}.</h1>
          <h2>{personalInfo.description}</h2>
          {personalInfo.about.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
