import React, { useState } from "react";

const ControlledUncontrolled = () => {
  const [email, setEmail] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setUserInfo({
      //...userInfo,
      email: event.target.value,
      password: userInfo.password,
    });
  };

  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setUserInfo({
      //...userInfo, // destructuring
      email: userInfo.email,
      password: event.target.value,
    });
  };
  //   //   const handleFormSubmit = () => {
  //   //     alert("Form Submitted");

  //   //     //console.log("Form Submitted");
  //   //   };
  // prevent default hadler
  const handleFormSubmit = (event) => {
    //alert("Form Submitted");
    event.preventDefault();
    console.log("Form Submitted");
    console.log("User Info:", userInfo);
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      {/*  writing throudh callback or without callback {handleFormSubmit} */}
      <p>
        Email :
        <input
          type="text"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        {/* {conytrolled by react} */}
      </p>
      <p>
        Password :
        <input type="text" onChange={(e) => handlePasswordChange(e)} />
        {/* {conytrolled by DOM} */}
      </p>
      <button type="submit">Login</button>
    </form>
  );
};

export default ControlledUncontrolled;
