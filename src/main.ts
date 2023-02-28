import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9090, '0.0.0.0');

  console.log(`Application is running at: ${await app.getUrl()}`);
}
bootstrap();
