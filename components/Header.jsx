import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  // let { isLoggin, setIsLoggin } = useState(null);

  const navigate = useNavigate();
  function fakeLogOut(request) {
    localStorage.removeItem("loggedin");
    const pathname = window.location.pathname;

    navigate(`/login?redirectTo=${pathname}`);
  }
  const isLoggin = localStorage.getItem("loggedin");
  console.log(isLoggin);
  return (
    <header>
      <Link to="/">#VANLIFE</Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
        {/* <Link to="login" className="login-link">
          <img src="../assets/images/avatar-icon.png" className="login-icon" />
        </Link> */}
        <button
          className={isLoggin === null ? "hidden" : ""}
          onClick={fakeLogOut}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};
export default Header;
