import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity('user')
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column({unique: true})
    username: string;

    constructor(user?: Partial<User>) {
        Object.assign(this, user);
    }
}
