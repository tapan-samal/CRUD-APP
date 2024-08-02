import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, displayUser } from "../features/clientDetailSlice";
import { Link } from "react-router-dom";
import ViewModal from "./ViewModal";

const Display = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData = "" } = useSelector((state) => state.User);
  const [isViewModal, setIsViewModal] = useState(false);
  const [id, setId] = useState(null);
  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(displayUser());
  }, [dispatch]);

  const handleRadioChange = (e) => {
    setRadioData(e.target.value);
  };

  if (loading) {
    return <h2 className="text-center my-5">Loading...</h2>;
  }

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchData.toLowerCase())
    )
    .filter((user) => {
      if (radioData === "") return true;
      return user.gender === radioData;
    });

  return (
    <>
      {isViewModal ? (
        <ViewModal id={id} setIsViewModal={setIsViewModal} />
      ) : (
        <>
          <h2 className="text-center my-3">List of All Users</h2>
          <div className="text-center mb-3">
            <label className="form-check-label mx-2">All</label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value=""
              checked={radioData === ""}
              onChange={handleRadioChange}
            />
            <label className="form-check-label mx-2">Male</label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              checked={radioData === "male"}
              onChange={handleRadioChange}
            />
            <label className="form-check-label mx-2">Female</label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              checked={radioData === "female"}
              onChange={handleRadioChange}
            />
          </div>
          {filteredUsers.map((element) => (
            <div
              className="card text-center mx-auto w-50 my-2"
              key={element.id}
            >
              <div className="card-body">
                <h4 className="card-title">{element.name}</h4>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {element.phone}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {element.email}
                </h6>
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  onClick={() => [setId(element.id), setIsViewModal(true)]}
                >
                  View
                </button>
                <Link to={`/update/${element.id}`}>
                  <button
                    type="button"
                    className="btn btn-success btn-sm m-3"
                  >
                    Update
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteUser(element.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Display;
