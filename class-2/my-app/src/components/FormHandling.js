import React, { useState } from "react";

const FormHandling = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleEmailChange = (event) => {
    console.log(event);
  };

  const handlePasswordChange = (event) => {
    console.log(event);
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
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      {/*  writing throudh callback or without callback {handleFormSubmit} */}
      <p>
        Email :
        <input type="text" onChange={(e) => handleEmailChange(e)} />
      </p>
      <p>
        Password :
        <input type="text" onChange={(e) => handlePasswordChange(e)} />
      </p>
      <button type="submit">Login</button>
    </form>
  );
};

export default FormHandling;
