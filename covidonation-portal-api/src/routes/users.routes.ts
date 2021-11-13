import { Router } from 'express';
import CreateUserService from '../services/User/CreateUserService';
import UpdateUserService from '../services/User/UpdateUserService';

const usersRouter = Router();

interface User {
  name: string;
  email: string;
  password?: string;
}

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'Users' });
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();
  const user: User = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.put('/', async (request, response) => {
  const { id, name, email, password } = request.body;

  const updateUser = new UpdateUserService();
  const user: User = await updateUser.execute({
    id,
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.delete('/', (request, response) => {
  return response.json({ message: 'Delete User' });
});

export default usersRouter;
