// src/components/Footer.js

import React from "react";
import styled from "styled-components";
import { personalInfo, socialLinks } from "../data/data";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 20px;

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ panelWidth }) => {
        if (panelWidth >= 400) return "30px";
        if (panelWidth >= 300) return "25px";
        return "24px";
      }};
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.2);
      }
    }
  }

  .footer-text {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ panelWidth }) => {
      if (panelWidth >= 400) return "12px";
      if (panelWidth >= 300) return "11px";
      return "10px";
    }};
    line-height: 1.4;

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .credits {
    margin-top: 20px;
    font-size: ${({ panelWidth }) => {
      if (panelWidth >= 400) return "10px";
      if (panelWidth >= 300) return "9px";
      return "8px";
    }};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
  }
`;

const Footer = ({ panelWidth = 280 }) => (
  <FooterContainer panelWidth={panelWidth}>
    <div className="social-icons">
      {socialLinks.map(({ id, name, url }) => {
        let Icon;
        switch (name) {
          case "LinkedIn":
            Icon = FaLinkedin;
            break;
          case "Email":
            Icon = FaEnvelope;
            break;
          default:
            Icon = FaEnvelope;
        }
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
    <div className="footer-text">
      <p>
        Designed & Built by{" "}
        <a
          href="https://uk.linkedin.com/in/shanaya-lakhani-87bb6420a"
          target="_blank"
          rel="noopener noreferrer"
        >
          {personalInfo.name}
        </a>
      </p>
    </div>
    <div className="credits">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
      </p>
    </div>
  </FooterContainer>
);

export default Footer;
