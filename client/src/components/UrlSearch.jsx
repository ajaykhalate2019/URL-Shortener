// import axios from 'axios';
// import React, { useState } from 'react';

// const UrlSearch = () => {
//     const [originalUrl, setOriginalUrl] = useState('');
//     const [shortUrl, setShortUrl] = useState('');
//     const [qrCodeImg, setQrCodeImg] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//         axios.post('http://localhost:3000/short', { originalUrl })
//             .then((res) => {
//                 setShortUrl(res.data.shortUrl);
//                 setQrCodeImg(res.data.qrCodeImg);
//                 console.log("API response",res.data);
//             })
//             .catch((err) => {
//                 console.error(err);
//             });

//         console.log('URL submitted:', originalUrl);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//                 <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">URL Shortener</h1>
//                 <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//                     <label className="text-gray-700 font-medium">Enter URL to shorten</label>
//                     <input 
//                         type="text" 
//                         placeholder="Enter URL..." 
//                         value={originalUrl} 
//                         onChange={(e) => setOriginalUrl(e.target.value)} 
//                         className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//                     >
//                         Generate Short URL
//                     </button>

//                     {
//                         shortUrl && (
//                             <div className="mt-6 text-center">
//                                 <label className="text-lg font-medium">Shortened URL</label>
//                                 <a 
//                                     href={shortUrl} 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     className="text-blue-600 hover:underline"
//                                 >
//                                     {shortUrl}
//                                 </a>
//                                 {
//                                     qrCodeImg  && 
//                                         <img src={qrCodeImg} alt="QR Code" className="mx-auto mt-4" />
//                                 }
//                             </div>
//                         )
//                     }
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UrlSearch;

import axios from "axios";
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";

const UrlSearch = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [qrCodeImg, setQrCodeImg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        //  axios.post("http://localhost:3000/short", { originalUrl })
        axios.post("https://url-shortener-skj5.onrender.com/short", { originalUrl })
            .then((res) => {
                setShortUrl(res.data.shortUrl);
                setQrCodeImg(res.data.qrCodeImg);
                console.log("API response", res.data);
            })
            .catch((err) => {
                console.error(err);
            });

        console.log("URL submitted:", originalUrl);
    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 400 }}>
                    <Typography variant="h5" textAlign="center" gutterBottom>
                        URL Shortener
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Enter URL to shorten"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Generate Short URL
                        </Button>
                        {shortUrl && (
                            <Box mt={3} textAlign="center">
                                <Typography variant="subtitle1">Shortened URL</Typography>
                                <Typography
                                    component="a"
                                    href={shortUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    sx={{ textDecoration: "none", display: "block", mt: 1 }}
                                >
                                    {shortUrl}
                                </Typography>
                                {qrCodeImg && (
                                    <Box mt={2} display="flex" justifyContent="center">
                                        <img src={qrCodeImg} alt="QR Code" style={{ maxWidth: "100%" }} />
                                    </Box>
                                )}
                            </Box>
                        )}
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default UrlSearch;
