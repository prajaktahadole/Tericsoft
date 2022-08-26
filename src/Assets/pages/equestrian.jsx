import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../redux/Action";
import { DisplaySection} from "../components/Display/display";
import "./pages.css";

export const Equestriane = () => {
  const [display, setDisplay] = useState("Show-jumping");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchAllData(dispatch, "equestrian", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="Show-jumping" onClick={() => setDisplay(() => "Show-jumping")}>
        Three-day eventing 
        </p>
        <p id="dressage" onClick={() => setDisplay(() => "dressage")}>
          Dressage
        </p>
      </div>
      <DisplaySection  />
    </div>
  );
};
