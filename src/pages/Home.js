// src/pages/Home.js

import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Contact from "../components/Contact";

const MainContainer = styled.main`
  padding: 100px 20px;
  position: relative;
`;

const Home = () => (
  <MainContainer>
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Achievements />
    <Education />
    <Contact />
  </MainContainer>
);

export default Home;
