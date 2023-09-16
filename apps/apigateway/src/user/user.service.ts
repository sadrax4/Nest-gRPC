import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersServiceClient } from '@app/common';
import { AuthService } from './constans';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { USERS_SERVICE_NAME } from 'proto/auth';
@Injectable()
export class UserService implements OnModuleInit {
  private userService: UsersServiceClient;
  constructor(
    @Inject(AuthService)
    private client: ClientGrpc
  ) { }
  onModuleInit() {
    this.userService = this.client.getService<UsersServiceClient>(USERS_SERVICE_NAME)
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
