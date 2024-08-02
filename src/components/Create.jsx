import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/clientDetailSlice";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUserData = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-center my-3">Add New User</h2>
      <form className="w-50 mx-auto my-2 " novalidate onSubmit={handleUserData}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text" required
            className="form-control"
            name="name"
            value={userData.name}
            onChange={handleInputData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input required
            type="email"
            className="form-control"
            name="email"
            value={userData.email}
            onChange={handleInputData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input required
            type="tel"
            className="form-control"
            name="phone"
            value={userData.phone}
            onChange={handleInputData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input required
            type="text"
            className="form-control"
            name="age"
            value={userData.age}
            onChange={handleInputData}
          />
        </div>
        <div className="form-check">
          <input required
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={userData.gender === "male"}
            onChange={handleInputData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input required
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={userData.gender === "female"}
            onChange={handleInputData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary my-3 btn-sm">
          Submit
        </button>
        <Link to="/">
          <button type="button" className="btn btn-primary my-3 ms-3 btn-sm">
            Back
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
