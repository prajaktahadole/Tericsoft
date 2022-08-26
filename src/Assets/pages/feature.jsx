import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../redux/Action";
import { DisplaySection} from "../components/Display/display";
import "./pages.css";

export const Feature = () => {
  const [display, setDisplay] = useState("new");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchAllData(dispatch, "feature", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="new" onClick={() => setDisplay(() => "new")}>
          New
        </p>
      </div>
      <DisplaySection  />
    </div>
  );
};
