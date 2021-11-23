import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <img src="" alt="" />
        <p>Report for</p>
        <h1>Jermey Robson</h1>
      </ProfileInfo>
      <ProfileOptions>
        <h3>Daily</h3>
        <h3>Daily</h3>
        <h3>Daily</h3>
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
`;

const ProfileInfo = styled.div`
  height: 70%;
  background-color: hsl(246, 80%, 60%);
  border-radius: 10px;
`;

const ProfileOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
