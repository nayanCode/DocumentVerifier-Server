import express from  'express';
import { userSignUp } from '../controller/user-controller.js';




const router = express.Router();


router.post('/http://localhost:8000/sentRequest', userSignUp);


export default router;