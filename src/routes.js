import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/controllers/models/User.js';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Lucas',
    email: 'lucasriosdev.com.br',
    password_hash: '123456',
  });
  return response.status(201).json(user);
});

export default routes;
