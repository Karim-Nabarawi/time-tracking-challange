import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <CardContainer>
        <div class="profile">
          <Card />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
