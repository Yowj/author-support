import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const BankSignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if fields are empty and return early
    if (!name || !email || !password) {
      enqueueSnackbar("Please fill in all the fields.", { variant: "error" });
      return; // Stop further execution
    }

    try {
      // Send the POST request using axios
      const response = await axios.post(import.meta.env.VITE_BACKEND_URLU, {
        name,
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      // Handle successful response
      console.log(response);
      enqueueSnackbar("Account created successfully!", { variant: "success" });

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");

      // Redirect the user
      navigate("/home");
    } catch (error) {
      // Handle errors gracefully
      console.error(error);
      enqueueSnackbar(
        error.response?.data?.message || "Failed to create an account.",
        { variant: "error" }
      );
    }
  };

//Main Page

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="relative flex flex-1 items-center justify-center px-4 sm:px-0">
        {/* Sign-Up Card */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-10 flex flex-col">
          <div className="w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-8" />

          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Join RoyalTrust Bank to manage your finances securely
            </p>
          </div>
          {/* Sign-Up form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Kupal"
                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="you@example.com"
                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="********"
                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold rounded-md transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="http://localhost:5173/"
              className="text-yellow-600 hover:text-yellow-500 font-medium"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankSignUpPage;
