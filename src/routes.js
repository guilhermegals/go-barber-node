/* eslint-disable comma-dangle */
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/health', (req, res) => res.json({ message: 'Ok' }));

routes.post('/users', UserController.create);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.create);

routes.get('/providers', authMiddleware, ProviderController.getAll);

routes.post(
  '/files',
  authMiddleware,
  upload.single('file'),
  FileController.upload
);

export default routes;
