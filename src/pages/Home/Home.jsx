import React from "react";
import { Hero } from "../../components/Home/Hero";
import { Data_Summary } from "../../components/Home/Data_Summary";
import { Second_section } from "../../components/Home/Second_section";
import { Third_section } from "../../components/Home/Third_section";

export const Home = () => {
  return <div className="flex flex-col justify-between items-center px-5 lg:px-20 ">
    <Hero/>
    <Data_Summary/>
    <Second_section/>
    <Third_section/>
  </div>;
};
