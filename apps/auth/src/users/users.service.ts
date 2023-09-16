import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'proto/auth';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_MODEL")
    private userModel: Model<User>
  ) { }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(createUserDto);
    if (!user) throw new InternalServerErrorException("user not created");
    return user;
  }
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find({});
    if (users.length == 0) throw new NotFoundException("user not found");
    return users;
  }
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({ id });
    if (!user) throw new NotFoundException("User with this ID was not found");
    return user;
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<{ msg: string }> {
    const updateResult = await this.userModel.updateOne({ id }, { $set: { UpdateUserDto } });
    if (updateResult.modifiedCount == 0) throw new InternalServerErrorException(" user update failed");
    return { msg: "user updated successfully" };
  }
  async remove(id: string): Promise<{ msg: string }> {
    const removeResult = await this.userModel.deleteOne({ id });
    if (removeResult.deletedCount == 0) throw new InternalServerErrorException("failed to remove user");
    return { msg: "user deleted successfully" };
  }
}
