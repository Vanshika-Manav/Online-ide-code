import express from 'express';
export const ideRoutes = express.Router();
import { ideController } from '../controllers/ide-controller.js';

ideRoutes.post('/compile');
ideRoutes.post('/execute');
ideRoutes.post('/question');
ideRoutes.post('/questions',ideController.questions);


