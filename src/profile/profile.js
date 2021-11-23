import React from "react";
import { children } from "react";

const myProfile = {
  fullname: "Motolani Akindele",
  bio: "Lorem20",
  profession: "Fintech Product Manager",
};

export default function Profile() {
  function HandleName() {
    const nameHandler = (fullname) => {
      alert(myProfile.fullname);
    };
    return (
      <div>
        <button onClick={nameHandler}>Start Here</button>
      </div>
    );
  }
  return (
    <div>
      <UserProfile
        fullname={myProfile.fullname}
        bio={myProfile.bio}
        profession={myProfile.profession}
      >
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/871336/1.jpg?6407"
          alt="me"
        ></img>
        <HandleName />
      </UserProfile>
    </div>
  );
}

const UserProfile = ({ fullname, bio, profession, children, HandleName }) => {
  console.log(children);
  return (
    <div>
      <h2>{fullname}</h2>
      <p>{bio}</p>
      <h5>{profession}</h5>
      {children}
      {HandleName}
    </div>
  );
};

UserProfile.defaultProps = {
  fullname: "yy",
  bio: "Lorem20",
  profession: "Fintech Product Manager",
};
