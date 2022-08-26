import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../redux/Action";
import { DisplaySection} from "../components/Display/display";
import "./pages.css";

export const Gymnast = () => {
  const [display, setDisplay] = useState("rhythmic");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchAllData(dispatch, "gymnast", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="rhythmic" onClick={() => setDisplay(() => "rhythmic")}>
          Rhythmic
        </p>
        <p id="Trampoline" onClick={() => setDisplay(() => "Trampoline")}>
          Trampoline
        </p>
      </div>
      <DisplaySection  />
    </div>
  );
};
