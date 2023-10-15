import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserFirebaseDto } from './dto/createUserFirebase.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/createFirebaseUser')
  async createUserFirebase(@Body() createUserFirebase: CreateUserFirebaseDto) {
    return this.usersService.createUserFirebaseAuth(createUserFirebase);
  }

  @Get()
  @ApiOperation({ summary: 'List all users' })
  @ApiResponse({ status: 200, description: 'Successful operation.' })
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('uid/:uid')
  @ApiOperation({ summary: 'List a user by Uid' })
  @ApiResponse({ status: 200, description: 'Sucessful operation' })
  @ApiParam({
    name: 'uid',
    required: true,
    description: 'Uid of user in firebase',
  })
  async findByUid(@Param('uid') uid: string) {
    return this.usersService.findByUid(uid);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({ status: 200, description: 'Successful operation.' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the user' })
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user by id' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the user' })
  @ApiBody({ type: UpdateUserDto })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id/:uid')
  @ApiOperation({ summary: 'Delete a user by id' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the user' })
  async delete(@Param('id') id: string, @Param('uid') uid: string) {
    return this.usersService.deleteUserFirebaseAuth({ id: id, uid: uid });
  }
}
