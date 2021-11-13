import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../../errors/AppError';
import User from '../../models/User';

interface Request {
  id: string;
  name: string;
  email: string;
  password: string;
}
class UpdateUserService {
  async execute({ id, name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found');
    }

    if (email !== user.email) {
      const checkUserExists = await userRepository.findOne({
        where: { email },
      });
      if (checkUserExists) {
        throw new AppError('Email already exists');
      }
    }

    const hashedPassword = await hash(password, 8);
    user.password = hashedPassword;
    user.name = name;
    user.email = email;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
