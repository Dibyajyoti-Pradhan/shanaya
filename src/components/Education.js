// src/components/Education.js

import React, { useState } from "react";
import styled from "styled-components";
import { education } from "../data/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import Card from "./common/Card";
import Button from "./common/Button";

const EducationSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
  padding: 0 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const EducationItem = styled(Card)`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 20px;

  .left-column {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-weight: bold;
  }

  .right-column {
    .title-school {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      .degree {
        font-size: 22px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
      }

      .school {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: center;

        a {
          color: inherit;
          text-decoration: none;

          &:hover,
          &:focus {
            text-decoration: underline;
          }
        }
      }
    }

    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      margin-bottom: 10px;

      svg {
        font-size: 18px;
      }
    }

    .details {
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
        max-width: 800px;
      }
    }
  }
`;

const Education = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const educationToShow = showMore ? education : education.slice(0, 2);

  return (
    <EducationSection id="education">
      <h2>Education</h2>
      <EducationList>
        {educationToShow.map(
          ({ id, school, url, degree, duration, location, major, details }) => (
            <EducationItem key={id} tabIndex="0">
              <div className="left-column">{duration}</div>
              <div className="right-column">
                <div className="title-school">
                  <div
                    className="school"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex="0"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          window.open(url, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      {school}
                    </a>
                  </div>
                  <div className="degree">{degree}</div>
                </div>
                <div className="location">
                  <FaMapMarkerAlt />
                  <span>{location}</span>
                </div>
                <div className="details">
                  <p>{major}</p>
                  {details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            </EducationItem>
          )
        )}
      </EducationList>
      {education.length > 2 && (
        <Button onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </EducationSection>
  );
};

export default Education;
