import { MailTrapProvider } from "../../providers/implementations/MailTrapProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailTrapProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase( postgresUserRepository, mailTrapProvider )

const createUserController = new CreateUserController( createUserUseCase )

export { createUserUseCase, createUserController }