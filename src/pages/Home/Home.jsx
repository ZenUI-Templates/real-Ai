import React from "react";
import { Hero } from "../../components/Home/Hero";
import { Data_Summary } from "../../components/Home/Data_Summary";

export const Home = () => {
  return <div className="flex flex-col justify-between items-center px-5 lg:px-20 ">
    <Hero/>
    <Data_Summary/>
  </div>;
};
