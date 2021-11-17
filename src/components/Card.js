import React from "react";

import styled from "styled-components";

import logo from "../images/icon-play.svg";

const Card = () => {
  return (
    <CardContainer>
      <div className="imageContainer">
        <img src={logo} alt="icon" />
      </div>
      <DataContainer>
        <h3>Play</h3>
        <h1>10hrs</h1>
        <p>Last Week - 8hrs</p>
      </DataContainer>
    </CardContainer>
  );
};
export default Card;

const CardContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  .imageContainer {
    background-color: hsl(195, 74%, 62%);
    overflow: hidden;
    padding-right: 10px;
    position: absolute;
    width: 100%;
    height: 40%;
    border-radius: 10px;
    img {
      position: absolute;
      right: 5%;
      top: -5%;
    }
  }
`;

const DataContainer = styled.div`
  background-color: hsl(235, 46%, 20%);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 87%;
  position: absolute;
  top: 13%;
`;
