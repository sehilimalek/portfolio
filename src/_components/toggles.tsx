import React from "react";
import { ModeToggle } from "./displayMode-toggle";
import { LangToggle } from "./lang-toggle";

const Toggles = () => {
  return (
    <div className=" flex justify-between items-center rounded-xl p-4 shadow border bg-background ">
      <LangToggle />
      <ModeToggle />
    </div>
  );
};

export default Toggles;
