// src/styles/GlobalStyle.js

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cormorant:wght@300;400;500;600&display=swap');
  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  strong {
    text-decoration: underline;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
      135deg,
      #0f1419 0%,
      #6b8faf 50%,
      #0f1419 100%
    );
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.5;
    overflow-x: hidden;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      margin-left: 0;
      background: linear-gradient(
        135deg,
        #0f1419 0%,
        #6b8faf 50%,
        #0f1419 100%
      );
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.linkHover};
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.1;
    font-family: ${({ theme }) => theme.fonts.main};
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 70%;
    }
  }

  p {
    margin: 0 0 15px 0;
    max-width: 600px;
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};
    font-family: ${({ theme }) => theme.fonts.main};

    &:focus,
    &:active {
      outline: none;
    }

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  section {
    min-height: 300px;
  }

  header {
    background-color: ${({ theme }) => theme.colors.headerBackground};
  }
`;

export default GlobalStyle;
