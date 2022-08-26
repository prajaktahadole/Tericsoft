import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../redux/Action";
import { DisplaySection} from "../components/Display/display";
import "./pages.css";

export const Cycling = () => {
  const [display, setDisplay] = useState("BMX");
  const dispatch = useDispatch();

  useEffect(() => {
    ["BMX", "Mountain", "Road", "Track"].forEach((elem) => {
      document.getElementById(elem).style.color = "#c9c7c7";
      document.getElementById(elem).style.fontWeight = "normal";
    });
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchAllData(dispatch, "cycling", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="BMX" onClick={() => setDisplay(() => "BMX")}>
          BMX
        </p>
        <p id="Mountain" onClick={() => setDisplay(() => "Mountain")}>
          Mountain
        </p>
        <p id="Road" onClick={() => setDisplay(() => "Road")}>
          Road
        </p>
        <p id="Track" onClick={() => setDisplay(() => "Track")}>
          Track
        </p>
      </div>
      <DisplaySection  />
    </div>
  );
};
