import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/health', (req, res) => res.json({ message: 'Ok' }));

routes.post('/users', UserController.create);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.create);

export default routes;
