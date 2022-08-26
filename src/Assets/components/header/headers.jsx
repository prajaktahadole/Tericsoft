import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./headers.css";

export const Header = () => {
  const [active, setActive] = useState("feature");
  const navigate = useNavigate();

  const url = window.location.pathname;

  useEffect(() => {
    const pathURL = url.split("/");

    if (pathURL[pathURL.length - 1] != 0) {
      setActive(() => pathURL[pathURL.length - 1]);
    } else {
      setActive(() => "feature");
    }
  }, [url]);

  useEffect(() => {
    if (active != "none") {
      [
        "feature",
        "armoury",
        "lake",
        "aquatic",
        "cycle",
        "equestrian",
        "extreme",
        "golf-sport",
        "gymnast",
      ].forEach((elem) => {
        document.getElementById(elem).style.backgroundColor = "#343a40";
        document.getElementById(elem).style.boxShadow =
          "rgba(0, 0, 0, 0.16) 0px 1px 4px";
      });
      document.getElementById(active).style.backgroundColor = "#adb5bd";
      document.getElementById(active).style.boxShadow =
        "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    }
  }, [active]);
  return (
    <div className="header">
      <div
        className="animate__animated animate__fadeInDown"
        onClick={() => {
          setActive(() => "feature");
          navigate("/");
        }}
        id="feature"
      >
        <div className="features">
          <i className="fa-solid fa-star"></i>
        </div>
        <h4>Featured</h4>
      </div>
      <div
        className="animate__animated animate__fadeInDown"
        onClick={() => {
          setActive(() => "armoury");
          navigate("/armoury");
        }}
        id="armoury"
      >
        <div className="armoury">
          <i className="fa-solid fa-bullseye"></i>
        </div>
        <h4>Armoury</h4>
      </div>
      <div
        className="animate__animated animate__fadeInDown"
        onClick={() => {
          setActive(() => "aquatic");
          navigate("/aquatic");
        }}
        id="aquatic"
      >
        <div className="aquatics">
          <i className="fa-solid fa-person-swimming"></i>
        </div>
        <h4>Aquatics</h4>
      </div>
      <div
        className="animate__animated animate__fadeInDown"
        onClick={() => {
          setActive(() => "cycle");
          navigate("/cycle");
        }}
        id="cycle"
      >
        <div className="cycling">
          <i className="fa-solid fa-person-biking"></i>
        </div>
        <h4>Cycling</h4>
      </div>
      <div
        className="animate__animated animate__fadeInDown"
        onClick={() => {
          setActive(() => "equestrian");
          navigate("/equestrian");
        }}
        id="equestrian"
      >
        <div className="equestrian">
          <i className="fa-solid fa-horse"></i>
        </div>
        <h4>Equestrian</h4>
      </div>
      <div
        onClick={() => {
          setActive(() => "extreme");
          navigate("/extreme");
        }}
        className="animate__animated animate__fadeInDown"
        id="extreme"
      >
        <div className="extreme">
          <i className="fa-solid fa-person-snowboarding"></i>
        </div>
        <h4>Extreme</h4>
      </div>
      <div
        onClick={() => {
          setActive(() => "golf-sport");
          navigate("/golf");
        }}
        className="animate__animated animate__fadeInDown"
        id="golf-sport"
      >
        <div className="golf-div">
          <i className="fa-solid fa-golf-ball-tee"></i>
        </div>
        <h4>Golf</h4>
      </div>
      <div
        onClick={() => {
          setActive(() => "gymnast");
          navigate("/gymnast");
        }}
        className="animate__animated animate__fadeInDown"
        id="gymnast"
      >
        <div className="gymnastics">
          <img
            src="https://www.svgrepo.com/show/172691/gymnast.svg"
            width="30px"
          />
        </div>
        <h4>Gymnastics</h4>
      </div>
      <div
        className="animate__animated animate__fadeInDown"
        onClick={() => {
          setActive(() => "lake");
          navigate("/lake");
        }}
        id="lake"
      >
        <div className="lake-seas">
          <i className="fa-solid fa-sailboat"></i>
        </div>
        <h4>Lake & Seas</h4>
      </div>
    </div>
  );
};
