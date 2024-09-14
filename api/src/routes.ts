import express from 'express';
import { runCode, stepSimulator, getState, getMemory } from './simulatorController';

const router = express.Router();

router.post('/run', runCode);
router.post('/step', stepSimulator);
router.get('/state', getState);
router.get('/memory', getMemory);

export default router;
