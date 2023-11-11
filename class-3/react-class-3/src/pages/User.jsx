import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();

  return (
    <div>
      This is a User Page{params.id} username: {params.id}{" "}
    </div>
  );
};

export default User;
