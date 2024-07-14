import { useState } from "react";
import axios from "axios";
import { SIGNUP } from "../utils/API";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SIGNUP, formData);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form
        onSubmit={onSubmit}
        className="max-w-lg mx-auto bg-white p-4 shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            className="w-full p-2 border"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Signup;
