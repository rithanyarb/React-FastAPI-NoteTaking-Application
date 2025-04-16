import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Register = ({ setToken }) => {
  const [data, setData] = useState({
    user_name: "",
    email: "",
    password: "",
    is_active: true,
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/", data);
      const params = new URLSearchParams({
        username: data.user_name,
        password: data.password,
      });
      const res = await api.post("/auth/token/", params);
      localStorage.setItem("token", res.data.access_token);
      setToken(res.data.access_token);
      navigate("/");
    } catch (error) {
      alert("Registration failed. Try different username or email.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-2"
          onChange={(e) => setData({ ...data, user_name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
        <p className="text-center mt-2">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
