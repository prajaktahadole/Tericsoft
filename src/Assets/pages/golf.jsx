import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../redux/Action";
import { DisplaySection} from "../components/Display/display";
import "./pages.css";

export const Golf = () => {
  const [display, setDisplay] = useState("golf");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchAllData(dispatch, "golf", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="golf" onClick={() => setDisplay(() => "golf")}>
          Golf
        </p>
      </div>
      <DisplaySection  />
    </div>
  );
};
