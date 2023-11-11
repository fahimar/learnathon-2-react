// import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Users = () => {
  const userList = [
    {
      id: 1,
      name: "Fahim",
    },
    {
      id: 2,
      name: "Fardin",
    },
    {
      id: 3,
      name: "Forhad",
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      This is a User Page
      <div>
        {userList.map((user) => (
          <div
            key={user.id}
            style={{ margin: "10px", padding: "10px", background: "yellow" }}
          >
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </div>
        ))}
        {/*<button
          onClick={() => navigate("/user/1", { state: { name: "Fahim" } })}
        >
          TO User
        </button>*/}
      </div>
    </div>
  );
};

export default Users;
