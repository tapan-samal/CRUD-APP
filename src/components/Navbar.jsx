import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/clientDetailSlice";

const Navbar = () => {
  const [searchData, setSearchData] = useState("");
  const countUsers = useSelector((state) => state.User.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Redux Toolkit
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/create" className="nav-link active">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  All Users ({" "}
                  <span className="fw-bold">{countUsers.length}</span> )
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                onChange={(e) => setSearchData(e.target.value)}
                value={searchData}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "22rem" }}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
