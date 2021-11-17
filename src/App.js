import React from "react";

import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

import Card from "./components/Card";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <GlobalStyles />
      <CardContainer>
        <div className="profile">
          <Card />
        </div>
        {data && data.map((dat, index) => <Card key={index} {...dat} />)}
      </CardContainer>
    </div>
  );
}

export default App;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;

  .profile {
    grid-row: 1 / 4;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
`;
