// src/components/Contact.js

import React, { useState } from "react";
import styled from "styled-components";
import Comp from "./Comp";

const Container = () => {
  const [a, setA] = useState(5);

  return (
    <div>
      {a} -> Parent
      <Comp a={a} setA={setA} /> -> Child1
      <Comp a={a} setA={setA} /> -> Child2
      <Comp a={a} setA={setA} /> -> Child3
    </div>
  );
};

export default Container;
