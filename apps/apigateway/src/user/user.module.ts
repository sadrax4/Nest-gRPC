import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './constans';
import { AUTH_PACKAGE_NAME } from '@app/common';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([{
      name: AuthService,
      transport: Transport.GRPC,
      options: {
        package: AUTH_PACKAGE_NAME,
        protoPath: join(__dirname, "../auth.proto")
      }
    }])
  ],
  controllers: [],
  providers: [UserService],
})
export class UserModule { }
