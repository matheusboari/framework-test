import { Router } from 'express';

import factorsController from './controllers/factors.controller';

const router = Router();

router.get('/factors/:number', factorsController.findFactors);

export default router;
