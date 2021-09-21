import React from "react";
import { add as addition, mulitply, subtrac } from "../../uitilies/func";

const Modules = () => {
  const sum = addition(5, 6);
  const multi = mulitply(4, 5);
  const subs = subtrac(10, 5);
  return <div>{console.log(sum, multi, subs)}</div>;
};

export default Modules;
