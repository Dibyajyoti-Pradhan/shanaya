// src/components/Contact.js

import React from "react";
import styled from "styled-components";
import { personalInfo, socialLinks } from "../data/data";
import { FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

const ContactSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 40px;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;

    a {
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 1rem 1.75rem;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: ${({ theme }) => theme.transition};

      &:hover {
        background-color: ${({ theme }) => theme.colors.greenTint};
      }

      svg {
        font-size: 20px;
      }
    }
  }

  .email-link {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1rem 1.75rem;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.mono};
    text-decoration: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenTint};
    }
  }

  .social-link-row2 {
    display: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenTint};
    }

    svg {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      display: inline-flex;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 1rem 1.75rem;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      cursor: pointer;
      transition: ${({ theme }) => theme.transition};
      margin-top: 20px;
      align-items: center;
      gap: 10px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>{personalInfo.contact.heading}</h2>
      <p>{personalInfo.contact.message}</p>
      <div className="contact-links">
        {socialLinks.map(({ id, name, url }) => {
          let icon;
          switch (name) {
            case "LinkedIn":
              icon = <FaLinkedin />;
              break;
            case "Email":
              icon = <FaEnvelope />;
              break;
            default:
              icon = <FaEnvelope />;
          }

          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} Link`}
            >
              {icon}
              {name}
            </a>
          );
        })}
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume Link"
        >
          <FaFileDownload />
          Resume
        </a>
      </div>
      <a
        href={`mailto:${personalInfo.contact.email}`}
        className="email-link"
        aria-label="Email Link"
      >
        <FaEnvelope />
        {personalInfo.contact.email}
      </a>
    </ContactSection>
  );
};

export default Contact;
