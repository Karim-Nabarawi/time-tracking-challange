import React from "react";

import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

import Card from "./components/Card";
import data from "./data.json";
import Profile from "./components/Profile";

function App() {
  console.log(data);
  return (
    <MainContainer>
      <GlobalStyles />
      <CardContainer>
        <div className="profile">
          <Profile />
        </div>
        {data && data.map((dat, index) => <Card key={index} {...dat} />)}
      </CardContainer>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-gap: 30px;

  .profile {
    grid-row: 1 / 4;
    display: flex;
    width: 100%;
    margin-bottom: 30px;
  }
`;
