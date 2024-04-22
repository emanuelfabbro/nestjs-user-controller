import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';

@Controller('user')
export class UserController {
    private users = []; // Simulated database storage for users

  @Post("/createUser")
  createUser(@Body() userDto: any): { status: number, message: string } {
    this.users.push(userDto);
    return { status: HttpStatus.CREATED, message: 'User created successfully' };
  }

  @Get("/getUsers")
  getAllUsers(): { status: number, data: any } {
    // Simulated user data for demonstration
    const user = {
      userName: 'john_doe',
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      creationDate: new Date().toISOString(),
    };

    return { status: HttpStatus.OK, data: user };
  }
}
