import React from "react";

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand href">Navbar</a>
        <form className="form-inline">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
export default Header;
