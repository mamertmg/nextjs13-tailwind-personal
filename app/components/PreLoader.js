"use client"

import { useEffect } from "react";
import { utils } from "../../utils/utils";

const PreLoader = () => {
  useEffect(() => {
    utils.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};
export default PreLoader;
