import { Router } from 'express';

const routes = new Router();

routes.get('/health', (req, res) => res.json({ message: 'Ok' }));

export default routes;
