import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export default function BankLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate(); // Fix: Define navigate


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home"); // Redirect to the home page if the user is already logged in
    }
  }, []);



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URLU}/login`,
        { email, password }
      );

      // Fix: Check if token exists instead of "success"
      if (response.status !== 200 || !response.data.token) {
        enqueueSnackbar("Invalid email or password", { variant: "error" });
        return;
      }

      enqueueSnackbar("Login successful!", { variant: "success" });
      console.log("Login response:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      // Redirect user after successful login
      navigate("/home");
    } catch (error) {
      enqueueSnackbar("Login failed. Please try again.", { variant: "error" });
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 to-gray-800">
      <div className="flex flex-1 items-center justify-center px-4 sm:px-0 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-subtle-pattern" />
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-10 flex flex-col">
          <div className="w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-8" />
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              WN AST-NIGHT
            </h2>
            <p className="text-sm text-gray-500 mt-2">Sign in to continue</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                value={password}
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold rounded-md transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
