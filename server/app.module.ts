import { Module } from "@nestjs/common";
import { SPAClientModule } from "nest-spa-serve";
import { join } from "path";
import config from "../webpack.config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    SPAClientModule.forRoot({
      renderPath: "/",
      rootPath: join(process.cwd(), "public"),
      webpackConfig: config,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
