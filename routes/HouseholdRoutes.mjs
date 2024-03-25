import Router from 'express';
import getHouseholds from '../controllers/HouseholdController.mjs';

const router = Router();

router.get('/households', getHouseholds);

export default router;