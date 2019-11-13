import React from 'react';
import styled from "styled-components";

import Form from './component/Form';
import NasaData from './component/NasaData';

const StylH1 = styled.h1`
  width:fit-content;
  margin: 10px auto;
`;

function App() {
  return (
    <div className="App">
      <StylH1>Nasa's Astronomy Picture of the day</StylH1>
      <Form/>
      <NasaData/>
    </div>
  );
}

export default App;
