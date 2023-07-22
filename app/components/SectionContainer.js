"use client"

import { useContext } from "react";
import { Context } from "../../context/Context";

const SectionContainer = ({ name, children }) => {
  const { nav, animation } = useContext(Context);
  return (
    <div
      id={name}
      className={`tokyo_tm_section ${
        name == nav ? `animated active ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
