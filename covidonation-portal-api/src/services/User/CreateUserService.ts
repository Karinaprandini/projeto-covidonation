import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import AppError from "../../errors/AppError";
import User from "../../models/User";

interface Request {
  name: string;
  email: string;
  password: string;
  active: boolean;
}
class CreateUserService {
  async execute({ name, email, password, active}: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError("Email already exists");
    }
    
    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      active
    });

    await userRepository.save(user);
    console.log(user);
    return user;
  }
}

export default CreateUserService;