import {
  Controller,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-user-put.dto';
import { UpdatePatchUserDTO } from './dto/update-user-patch.dto';
import { UserService } from './users.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { ParanmId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard, RoleGuard)
@Roles(Role.Admin)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() { name, email, password, birthAt, role }: CreateUserDTO,
  ) {
    return this.userService.create({ email, name, password, birthAt, role });
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@ParanmId() id: number) {
    return this.userService.show(id);
  }

  @Put(':id')
  async update(
    @Body() { name, email, password, birthAt, role }: UpdatePutUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return this.userService.update(id, {
      name,
      email,
      password,
      birthAt,
      role,
    });
  }

  @Patch(':id')
  async updatePartial(
    @Body() { name, email, password, birthAt, role }: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return this.userService.update(id, {
      name,
      email,
      password,
      birthAt,
      role,
    });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.userService.delete(id);
  }
}
