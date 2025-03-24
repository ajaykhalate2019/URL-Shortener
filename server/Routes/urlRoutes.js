import express from 'express';
import { createShortUrl, redirectToOriginal } from '../controllers/urlController.js';

const router = express.Router();

router.post('/short', createShortUrl);
router.get('/:shortUrl', redirectToOriginal);

export default router; 