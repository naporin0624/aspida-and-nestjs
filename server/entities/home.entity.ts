import { ApiProperty } from "@nestjs/swagger";

export class Home {
  @ApiProperty()
  readonly address!: string;
  @ApiProperty()
  readonly size!: string;
}
