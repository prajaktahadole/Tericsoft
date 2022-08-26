import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../redux/Action";
import { DisplaySection} from "../components/Display/display";
import "./pages.css";

export const Extreme = () => {
  const [display, setDisplay] = useState("snowboarding");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchAllData(dispatch, "extreme", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="snowboarding" onClick={() => setDisplay(() => "snowboarding")}>
          Skateboarding
        </p>
        <p
          id="mountain-biking"
          onClick={() => setDisplay(() => "mountain-biking")}
        >
           Freestyle skiing
        </p>
      </div>
      <DisplaySection  />
    </div>
  );
};
