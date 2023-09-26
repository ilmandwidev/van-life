import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-container" style={{ maxHeight: "100vh" }}>
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
    </>
  );
}
