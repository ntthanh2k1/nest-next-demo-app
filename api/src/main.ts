import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // https://docs.nestjs.com/techniques/configuration#using-in-the-maints
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  // https://docs.nestjs.com/techniques/validation#auto-validation
  app.useGlobalPipes(
    new ValidationPipe({
      // https://docs.nestjs.com/techniques/validation#stripping-properties
      whitelist: true,

      // https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe
      forbidNonWhitelisted: true,
    }),
  );

  // https://docs.nestjs.com/faq/global-prefix
  app.setGlobalPrefix('api/v1', { exclude: [''] });

  await app.listen(port);
}
bootstrap();
