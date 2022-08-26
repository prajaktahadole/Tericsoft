import React from "react";
import { useSelector } from "react-redux";
import Cards from "../cards/card";
import "./display.css";

export const DisplaySection = () => {

  let { data} = useSelector((state) => state);

  return (
    <div className="main">
      <h1 >Highlight</h1>
      {
        <div className="cards">
          {data.map((elem, index) => (
            <Cards key={index} data={elem} />
          ))}
        </div>
      }
    </div>
  );
};
