import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  const options = new DocumentBuilder()
    .setTitle("API description")
    .setVersion("1.0")
    .addServer("http://localhost:3000/")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}
bootstrap();
