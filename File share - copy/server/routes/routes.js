
import express from 'express';
import upload from '../utils/upload.js';
//  import { uploadImage, getImage } from '../controller/image-controller.js';
import { uploadImage } from '../controller/image-controller.js';

const router = express.Router();

router.post('/upload',upload.single('file'),uploadImage);

export default router;
