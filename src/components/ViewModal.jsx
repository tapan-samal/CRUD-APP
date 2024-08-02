import React from "react";
import "../App.css";
import { useSelector } from "react-redux";

const ViewModal = ({ id, setIsViewModal }) => {
  const allUser = useSelector((state) => state.User.users);
  const clickedUser = allUser.find((user) => user.id === id);

  if (!clickedUser) {
    return null;
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h4 style={{ textDecoration: "underline" }}>View User</h4>
        <h5>{clickedUser.name}</h5>
        <h6>{clickedUser.phone}</h6>
        <h6>{clickedUser.email}</h6>
        <h6>{clickedUser.age}</h6>
        <h6>{clickedUser.gender}</h6>
        <button className="btn btn-primary btn-sm my-3 fs-6" onClick={() => setIsViewModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
