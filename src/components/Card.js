import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { cartData } from "../cartData";

const Card = ({ title, timeframes }) => {
  const { period } = useSelector((state) => state.period);
  const time = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last month",
  };
  return (
    <CardContainer color={cartData[title] && cartData[title].color}>
      <div className="imageContainer">
        <img src={cartData[title] && cartData[title].logo} alt="icon" />
      </div>
      <DataContainer>
        <h3>{title}</h3>
        <h1>{timeframes && timeframes[period].current}hrs</h1>
        <p>
          {time[period]} - {timeframes && timeframes[period].previous}hrs
        </p>
      </DataContainer>
    </CardContainer>
  );
};
export default Card;

const CardContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  .imageContainer {
    background-color: ${(props) => (props.color ? props.color : "hsl(195, 74%, 62%)")};
    overflow: hidden;
    padding-right: 10px;
    position: relative;
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
  height: 80%;
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
