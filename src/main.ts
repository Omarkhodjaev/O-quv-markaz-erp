import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //server port
  const PORT = process.env.PORT ?? 3000;

  //swagger setup
  const config = new DocumentBuilder()
    .setTitle(`O'quv markaz`)
    .setDescription(`O'quv markaz ERP api`)
    .setVersion('1.0')
    .addServer(`http://localhost:${PORT}`, 'Local Server')
    .addTag('Users', 'User management')
    .build();

  const documentOrFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, documentOrFactory);

  //validation pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/api-doc`);
  });
}
bootstrap();
