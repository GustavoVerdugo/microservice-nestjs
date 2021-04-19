import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

const microservicesOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8887,
  },
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions)
  app.listen(() => {
    logger.log('service running on port 3020');
  });
}
bootstrap();
