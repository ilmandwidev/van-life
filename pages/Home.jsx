import React from "react";
import { Link } from "react-router-dom";
import { browserName, CustomView, isMobile } from "react-device-detect";
import chrome from "../src/images/chrome.png";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find your van</Link>
      </div>
      <div
        className="about-page-cta mobile"
        style={{ marginTop: "12pt", paddingBottom: 0 }}
      >
        <h2>
          <center>
            Rekomendasi untuk buka website ini dengan smartphone 📱
          </center>
        </h2>
      </div>
      {isMobile ? (
        <div
          className="about-page-cta mobile"
          style={{ marginTop: "12pt", paddingBottom: 0 }}
        >
          <h2>
            <center>
              Rekomendasi dibuka di Chrome{" "}
              <img src={chrome} style={{ width: "24px" }} />
            </center>
          </h2>
        </div>
      ) : null}
    </>
  );
}
