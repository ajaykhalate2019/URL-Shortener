// import express from 'express';
// import QRCode from 'qrcode';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import { nanoid } from 'nanoid';
// import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken';
// import bodyParser from 'body-parser';
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error("Failed to connect database",err));



//  const urlSchema = new mongoose.Schema({
//     originalUrl: String,
//     shortUrl: String,
//     clicks: {
//         type: Number,
//         default: 0
//     },
// });
// const Url = mongoose.model('Url', urlSchema);


// app.post('/short', async (req, res) => {
// try {
//     const { originalUrl } = req.body;
//     if(!originalUrl) {
//         return res.status(400).json({error: 'URL is required'});
//     }
//     const shortUrl = nanoid(5);
//     const url = new Url({originalUrl, shortUrl,});
//     const myUrl = `http://localhost:3000/${shortUrl}`;
//     const qrCodeImg = await QRCode.toDataURL(myUrl);
//     await url.save();
//     return res.status(200).json({message:"URL Generated", shortUrl: myUrl ,qrCodeImg});
// } catch (error) {
//     console.log(error); 
//     return res.status(500).json({error: 'Internal Server Error'});
// }
// });

// app.get('/:shortUrl', async (req, res) => {
//     try {
//         const { shortUrl } = req.params;
//         const url = await Url.findOne({ shortUrl });
//         if(url) {
//             url.clicks++;
//             await url.save();
//             return res.redirect(url.originalUrl);
//         } else {
//             return res.status(404).json({error: 'URL not found'});
//         }
        
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({error: 'Internal Server Error'});
//     }
// });


// app.listen(3000, () => {
//     console.log('Server is runnning on 3000');
//  });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import urlRoutes from './Routes/urlRoutes.js';


dotenv.config();
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/', urlRoutes);

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});