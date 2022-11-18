import { Router } from "express";
import CreateUserService from "../services/CreateUser.service";

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

export default usersRoute;
