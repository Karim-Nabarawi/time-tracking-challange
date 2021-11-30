import React from "react";
import profilePic from "../images/image-jeremy.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changePeriod } from "../actions/periodAction";

const Profile = () => {
  const dispatch = useDispatch();
  const { period } = useSelector((state) => state.period);
  return (
    <ProfileContainer>
      <ProfileInfo>
        <img src={profilePic} alt="" />
        <div className="text">
          <p>Report for</p>
          <h1>Jermey Robson</h1>
        </div>
      </ProfileInfo>
      <ProfileOptions>
        <PeriodOptions
          period={period == "daily" ? "white" : "hsl(236, 100%, 87%)"}
          onClick={() => dispatch(changePeriod("daily"))}
        >
          Daily
        </PeriodOptions>
        <PeriodOptions
          period={period == "weekly" ? "white" : "hsl(236, 100%, 87%)"}
          onClick={() => dispatch(changePeriod("weekly"))}
        >
          Weekly
        </PeriodOptions>
        <PeriodOptions
          period={period == "monthly" ? "white" : "hsl(236, 100%, 87%)"}
          onClick={() => dispatch(changePeriod("monthly"))}
        >
          Monthly
        </PeriodOptions>
      </ProfileOptions>
    </ProfileContainer>
  );
};
export default Profile;

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsl(235, 46%, 20%);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 40px;
    font-weight: 300;
  }
  p {
    color: hsl(236, 100%, 87%);
  }
  img {
    width: 80px;
    border: 3px solid white;
    border-radius: 200px;
  }
`;

const PeriodOptions = styled.h3`
  font-weight: 300;
  color: ${(props) => props.period};
  cursor: pointer;
  display: inline;
  &:hover {
    color: white;
  }
`;

const ProfileInfo = styled.div`
  flex: 5;
  height: 70%;
  background-color: hsl(246, 80%, 60%);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProfileOptions = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
