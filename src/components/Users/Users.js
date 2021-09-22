import React, { useEffect, useState } from "react";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("./users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} person={user}></User>
      ))}
    </div>
  );
};

export default Users;
