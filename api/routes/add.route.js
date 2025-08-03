import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteAdd, getAdds, updateAdd } from '../controllers/add.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getAdds', getAdds);
router.delete('/deleteAdd/:addId/:userId', verifyToken, deleteAdd);
router.put('/updateAdd/:addId/:userId', verifyToken, updateAdd);

export default router;