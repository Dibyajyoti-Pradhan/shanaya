// src/components/Contact.js

import React from "react";
import Button from "./common/Button";

const Comp = (props) => {
  const { a, setA } = props;
  return (
    <div>
      <div></div>
      <Button
        onClick={() => {
          setA(a + 1);
        }}
      >
        {a}
      </Button>
    </div>
  );
};

export default Comp;
