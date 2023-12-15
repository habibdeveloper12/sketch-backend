import express from 'express';
import { drawController } from './draw.controller';

const router = express.Router();

router.post('/draw', drawController.createDraw);
router.get('/draw', drawController.getDraw);
router.get('/draw/:id', drawController.getADraw);

export const drawRoutes = router;
