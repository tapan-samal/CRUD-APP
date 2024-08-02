import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { updateUser } from '../features/clientDetailSlice';

const Update = () => {

  const {id} = useParams();
  const [updatedData, setupdatedData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });
  
  const {users, loading} = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedUser = users.find((user) => user.id === id);
    if(selectedUser) {
      setupdatedData(selectedUser);
    }
  }, [id, users])

  const handleInputData = (e) => {
    setupdatedData({...updatedData, [e.target.name]: e.target.value})
  };

  const handleupdatedData = (e) => {
    e.preventDefault();
    dispatch(updateUser(updatedData));
    navigate("/");
  };

  if(loading) {
    return <h2 className='text-center my-5'>Loading...</h2>
  }

  return (
    <div>
      <h2 className="text-center my-3">Update User</h2>
      <form className="w-50 mx-auto my-2" onSubmit={handleupdatedData}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={updatedData.name} onChange={handleInputData}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={updatedData.email} onChange={handleInputData}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input type="tel" className="form-control" name="phone" value={updatedData.phone} onChange={handleInputData}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input type="text" className="form-control" name="age" value={updatedData.age} onChange={handleInputData}/>
        </div>
        
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" value="male" checked = {updatedData.gender === "male"} onChange={handleInputData}/>
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" value="female" checked={updatedData.gender === "female"} onChange={handleInputData}/>
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary my-3 btn-sm">
          Submit
        </button>
        <Link to="/">
        <button type="submit" className="btn btn-primary my-3 ms-3 btn-sm">Back</button>
        </Link>
      </form>
    </div>
  )
}

export default Update