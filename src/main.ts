import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  // app.enableCors({
  //   origin: false,
  // });
  const configSwagger = new DocumentBuilder()
    .setTitle('Order Food')
    .setDescription('')
    .setVersion('1.0')
    .addTag('Order Food')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(8080);
}
bootstrap();
