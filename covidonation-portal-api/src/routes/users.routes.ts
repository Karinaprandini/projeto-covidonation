import { getRepository } from 'typeorm';
import { response, Router } from 'express';
import CreateUserService from '../services/User/CreateUserService';
import UpdateUserService from '../services/User/UpdateUserService';
import User from '../models/User';

const usersRouter = Router();

interface IUser {
  name: string;
  email: string;
  password?: string;
}

usersRouter.get('/', (request, response) => {
  const usersRepository = getRepository(User);
  usersRepository
    .find()
    .then((users) => response.json(users))
    .catch((err) => response.status(400).json({ error: err.message }));
});

usersRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const userRepository = getRepository(User);

  userRepository
    .findOne(id)
    .then((user) => {
      return response.json(user);
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const createUser = new CreateUserService();
  const user: IUser = await createUser.execute({
    name,
    email,
    password,
    active: true,
  });
  delete user.password;

  return response.json(user);
});

usersRouter.put('/', async (request, response) => {
  const { id, name, email, password, active } = request.body;

  const updateUser = new UpdateUserService();
  const user: IUser = await updateUser.execute({
    id,
    name,
    email,
    password,
    active,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const userRepository = getRepository(User);

  userRepository
    .findOne(id)
    .then((user) => {
      userRepository.remove(user!);
      return response.status(204).json({ msg: 'Usuário removido com sucesso' });
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

export default usersRouter;
