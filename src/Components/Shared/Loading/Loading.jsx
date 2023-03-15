import React from "react";
import { Puff, ThreeDots, ColorRing } from "react-loader-spinner";
import loaderGif from "./Loader/loader.gif"

const PageLoading = () => {
  return (
    <div className="flex justify-center items-center p-20 bg-white">
      <img className="z-50" src={loaderGif} alt="Loader"/>
    </div>
  );
};

export default PageLoading;
