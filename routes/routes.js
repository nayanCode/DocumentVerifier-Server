import express from  'express';
import {studentRequestcontroller, userLogIn} from '../controller/studentcontroller.js';

const router = express.Router();

router.post('/login', userLogIn);
router.post('/sentRequest', studentRequestcontroller);


export default router;