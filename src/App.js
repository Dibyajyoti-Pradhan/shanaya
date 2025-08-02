// src/App.js

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  width: ${({ width }) => width}px;
  padding: 20px;
  position: fixed;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  resize: horizontal;
  overflow: auto;
  min-width: 200px;
  max-width: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ResizeHandle = styled.div`
  position: absolute;
  right: -2px;
  top: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 40%,
    ${({ theme }) => theme.colors.primary} 40%,
    ${({ theme }) => theme.colors.primary} 60%,
    transparent 60%,
    transparent 100%
  );
  cursor: ew-resize;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
    width: 8px;
  }

  &::before {
    content: "⋮";
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const RightColumn = styled.div`
  margin-left: ${({ leftWidth }) => leftWidth}px;
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;

// (GradientBackground removed, now using CSS variable on body)

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [leftPanelWidth, setLeftPanelWidth] = useState(280);
  const [isResizing, setIsResizing] = useState(false);
  const [gradientAngle, setGradientAngle] = useState(135);
  const leftPanelRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gradient tilt effect for desktop (mousemove), fixed angle for mobile
  useEffect(() => {
    if (isMobile) {
      // Set a smoother gradient for mobile (adjust color stops)
      const gradient = `linear-gradient(
        180deg,
        #0f1419 0%,
        #6b8faf 70%,
        #0f1419 100%
      )`;
      document.body.style.setProperty("--dynamic-gradient", gradient);
      setGradientAngle(180);
      return;
    }
    const handleMouseMove = (e) => {
      if (isResizing) return;
      // Calculate angle based on mouse position
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      // Angle from 90deg (top) to 180deg (right) to 270deg (bottom) to 360deg (left)
      const angle = 90 + (x - 0.5) * 180 + (y - 0.5) * 90;
      setGradientAngle(angle);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, isResizing]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;

      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 500) {
        setLeftPanelWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const handleResizeStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  return (
    <ThemeProvider>
      {(themeStyles) => (
        <StyledThemeProvider theme={themeStyles}>
          <Router>
            <GlobalStyle />
            <AppContainer>
              {!isMobile && (
                <LeftColumn ref={leftPanelRef} width={leftPanelWidth}>
                  <Header panelWidth={leftPanelWidth} />
                  <Footer panelWidth={leftPanelWidth} />
                  <ResizeHandle onMouseDown={handleResizeStart} />
                </LeftColumn>
              )}
              <RightColumn leftWidth={leftPanelWidth}>
                <Home />
              </RightColumn>
            </AppContainer>
          </Router>
        </StyledThemeProvider>
      )}
    </ThemeProvider>
  );
}

export default App;
