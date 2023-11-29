import React, { useState } from "react";
import styled from "styled-components";

import Education from "./components/Education";
//Dichiarazione Styled Components:
const Div = styled.div`
  margin: 30px auto;
  padding: 50px;
  background-color: brown;
  border: 2px solid #2e4057;
  max-width: 700px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  color: white;
  margin; auto;
  text-align: center;
  font-size: 70px;
`;

const App = () => {
  return (
    <Div>
      <H1>Benvenuti</H1>
      <H1></H1>
      <Education />
    </Div>
  );
};

export default App;
