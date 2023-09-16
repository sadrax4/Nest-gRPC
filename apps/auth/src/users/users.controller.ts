import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  Empty,
  FindOneUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  Users,
  UsersServiceController,
  UsersServiceControllerMethods
} from 'proto/auth';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private usersService: UsersService) { }

  createUser(request: CreateUserDto): User | Promise<User> | Observable<User> {
    return this.usersService.create(request)
  }
  findAllUsers(request: Empty): Users | Observable<Users> | Promise<Users> {
    return;

  }
  findOneUser(request: FindOneUserDto): User | Promise<User> | Observable<User> {
    return;

  }
  updateUser(request: UpdateUserDto): User | Promise<User> | Observable<User> {
    return;

  }
  removeUser(request: FindOneUserDto): User | Promise<User> | Observable<User> {
    return;

  }
  queryUsers(request: Observable<PaginationDto>): Observable<Users> {
    return;

  }

}
