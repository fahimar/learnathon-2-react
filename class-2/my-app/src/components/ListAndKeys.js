// rafce

import React from "react";

const ListAndKeys = () => {
  const data = [
    {
      id: 80,
      name: "Akil",
    },
    { id: 81, name: "Abir" },
    { id: 82, name: "Chondro" },
    { id: 83, name: "Arritro" },
  ];
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}

        {/* <li>{data[0].name}</li>
        <li>{data[1].name}</li>
        <li>{data[2].name}</li>
        li>{data[3].name}</li> // <Ctrl+C Ctrl+V */}
      </ul>
    </div>
  );
};

export default ListAndKeys;
