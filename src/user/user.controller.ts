import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { User } from './user.entity';
import { BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { UserInterface } from './user.interface';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() user: UserInterface): Observable<UserInterface>{
        return this.userService.create(user);
    
    }

    @Get(':id')
    findOne(@Param()params: any): Observable<User> {
        return this.userService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAll();

    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<User> {
        return this.userService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
        return this.userService.updateOne(Number(id), user);
    }

}