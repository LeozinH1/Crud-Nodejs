import AppDataSource from "../database";
import AppError from "../errors/AppError";
import User from "../models/Users";

interface Request {
  name: string;
  email: string;
  phone: string;
}

class CreateUserService {
  public async execute({ name, email, phone }: Request): Promise<User> {
    const usersRepository = AppDataSource.getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError("Email address already used.");
    }

    const user = usersRepository.create({
      name,
      email,
      phone,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
