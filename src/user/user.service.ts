import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInterface } from './user.interface';
import { Observable, from } from 'rxjs';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>
    ) {}

    create(user: UserInterface): Observable<UserInterface> {
        return from(this.userRepository.save(user));
    }

    findOne(id: number): Observable<any> {
        return from(this.userRepository.findOne(id));
    }

    findAll(): Observable<User[]> {
        return from(this.userRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.userRepository.delete(id));
    }

    updateOne(id: number, user: User): Observable<any> {
        return from(this.userRepository.update(id, user));
    }

}