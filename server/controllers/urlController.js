import Url from '../Model/urlModel.js';
import QRCode from 'qrcode';
import { nanoid } from 'nanoid';

// URL Shortener
export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const shortUrl = nanoid(5);
    const myUrl = `http://localhost:3000/${shortUrl}`;
    const qrCodeImg = await QRCode.toDataURL(myUrl);

    const url = new Url({ originalUrl, shortUrl }); 
    await url.save();

    return res.status(201).json({
      message: 'URL Generated Successfully',
      shortUrl: myUrl,
      qrCodeImg,
    });
  } catch (error) {
    console.error('Error generating short URL:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Redirect URL
export const redirectToOriginal = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });

    if (url) {
      url.clicks += 1;
      await url.save();
      return res.redirect(url.originalUrl);
    }

    return res.status(404).json({ error: 'URL not found' });
  } catch (error) {
    console.error('Error redirecting:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
