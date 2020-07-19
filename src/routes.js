import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/health', (req, res) => res.json({ message: 'Ok' }));

routes.get('/users', async (req, res) => {
  const user = await User.create({
    name: 'Guilherme Augusto',
    email: 'guilherme@email.com',
    password_hash: 'password123',
  });

  return res.json(user);
});

export default routes;
