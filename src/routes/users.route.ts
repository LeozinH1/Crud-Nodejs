import { Router } from "express";
import AppDataSource from "../database";
import CreateUserService from "../services/CreateUser.service";
import User from "../models/Users";

const usersRoute = Router();

usersRoute.post("/", async (request, response) => {
  const { name, email, phone } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    phone,
  });

  return response.json(user);
});

usersRoute.get("/", async (request, response) => {
  const usersRepository = AppDataSource.getRepository(User);

  const users = await usersRepository.find();

  return response.json(users);
});

usersRoute.delete("/:user_id", async (request, response) => {
  const { user_id } = request.params;

  const usersRepository = AppDataSource.getRepository(User);

  await usersRepository.delete(user_id);

  return response.status(200).json({});
});

export default usersRoute;
