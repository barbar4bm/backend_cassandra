import { Router } from 'express';
import { getContainers, getTemperatureById } from '../controller/containers';

const router = Router();

// GET
router.get('/', getContainers);
router.get('/:id', getTemperatureById);

export default router;
