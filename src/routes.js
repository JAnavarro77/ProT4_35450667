import { Router} from 'express';
import {persona} from './controller.js';

export const router = Router()

router.get('/personas', persona.getAll);
router.post('/personas', persona.add);
router.delete('/personas', persona.delete);
router.put('/personas', persona.update);
