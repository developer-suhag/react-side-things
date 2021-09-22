import React from "react";
import { addToDb, deleteFromDb } from "../../uitilies/fakeDb";

const User = (props) => {
  const { first_name, last_name, email, gender, profile_img, price, id } =
    props.person;

  return (
    <div>
      <img src={profile_img} alt="" />
      <h2>Name: {first_name + " " + last_name}</h2>
      <p>Gender: {gender}</p>
      <p>
        <small>Email: {email}</small>
      </p>
      <p>Price: {price}</p>
      <button onClick={() => addToDb(id)}>Buy Now</button>
      <button onClick={() => deleteFromDb(id)}>Remove</button>
    </div>
  );
};

export default User;
