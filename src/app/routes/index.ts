import express from 'express';
import { drawRoutes } from '../modules/sector/draw.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: drawRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
