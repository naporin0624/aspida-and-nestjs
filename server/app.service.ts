import { Injectable } from "@nestjs/common";
import { User, CreateUserDto } from "./entities/user.entity";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getUser(): User {
    return { id: 1, name: "naporitan" };
  }

  creteUser(createUserDto: CreateUserDto): User {
    return { ...createUserDto, id: Math.random() };
  }
}
