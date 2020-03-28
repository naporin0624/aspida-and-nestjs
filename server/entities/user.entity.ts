import { ApiProperty } from "@nestjs/swagger";
import { Home } from "./home.entity";

export class User {
  @ApiProperty()
  readonly id!: number;
  @ApiProperty()
  readonly name!: string;
  @ApiProperty({ type: Home, isArray: true, required: false })
  readonly homes?: Home[];
}

export class CreateUserDto {
  @ApiProperty()
  readonly name!: string;
  @ApiProperty({ type: Home, isArray: true, required: false })
  readonly homes?: Home[];
}
