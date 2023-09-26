import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useParams, Link, NavLink, useLoaderData } from "react-router-dom";
import { getVan } from "../../utility/api";
import { requireAuth } from "../../utility/require-auth";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getVan(params.id);
}
export default function HostVanDetail() {
  // const { id } = useParams();
  // const [currentVan, setCurrentVan] = useState(null);
  const currentVan = useLoaderData();
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans));
  // }, []);

  return (
    <section>
      <Link to="./.." className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
