import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Auth_Package } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, "../auth.proto"),
        package: Auth_Package
      }
    }
  )
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  await app.listen();
}
bootstrap();
