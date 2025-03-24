// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:5000/login", { email, password });
//             localStorage.setItem("token", res.data.token);
//             alert("Login Successful");
//         } catch (error) {
//             alert(error.response.data.error);
//         }
//     };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Login</h2>
        
//         <div className="mb-4">
//             <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
//             <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//         </div>

//         <div className="mb-4">
//             <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
//             <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//         </div>

//         <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//             Login
//         </button>
//     </form>
// </div>
//   )
// }

// export default Login


import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            localStorage.setItem("token", res.data.token);
            alert("Login Successful");
        } catch (error) {
            alert(error.response?.data?.error || "Login failed");
        }
    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;
