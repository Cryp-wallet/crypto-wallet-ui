import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePassword.css";

const CreatePassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/seed-phrase");
  };

  return (
    <div className="create-password">
      <h2>Create Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="Enter password" required />
        <input type="password" placeholder="Confirm password" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePassword;
