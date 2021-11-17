import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <CardContainer>
        <Card className="profile" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
      </CardContainer>
    </div>
  );
}

export default App;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 30px;
  grid-auto-flow: column;
  grid-template-areas:
    "profile card card card"
    "profile card card card";
  .card {
    grid-area: card;
  }
  .profile {
    grid-area: profile;
    grid-row: 1 / 2;
  }
`;
