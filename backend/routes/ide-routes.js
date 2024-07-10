import express from 'express';
export const ideRoutes = express.Router();
import { ideController } from '../controllers/ide-controller.js';
ideRoutes.post('/uploadquestions',ideController.uploadquestions);
ideRoutes.post('/submits',ideController.submit);
ideRoutes.get('/questions',ideController.questions);
ideRoutes.get('/questions/:id',ideController.question);


