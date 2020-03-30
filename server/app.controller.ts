import { Controller, Get, Post, Body } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiTags, ApiCreatedResponse, ApiBody } from "@nestjs/swagger";
import { User, CreateUserDto } from "./entities/user.entity";

@ApiTags("AppController")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiCreatedResponse({ type: String })
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiCreatedResponse({ type: User })
  @Get("user")
  getUser() {
    return this.appService.getUser();
  }

  @ApiCreatedResponse({ type: User })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ type: User })
  @Post("user")
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.creteUser(createUserDto);
  }
}
