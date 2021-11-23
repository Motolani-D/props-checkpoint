import React from "react";
import myProfile from "./profile";

export default function HandleName() {
  const nameHandler = () => {
    alert(myProfile.fullname);
  };
  return (
    <div>
      <button onClick={nameHandler}>Start Here</button>
    </div>
  );
}
