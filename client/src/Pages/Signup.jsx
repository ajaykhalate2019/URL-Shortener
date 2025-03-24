import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/signup", { name, email, password });
            alert(res.data.message);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Signup</h2>
        
        <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">Name</label>
            <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>

        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
            Signup
        </button>
    </form>
</div>
  )
}

export default Signup