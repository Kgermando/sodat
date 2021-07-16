import { Exclude } from "class-transformer";
import { Role } from "src/role/role.entity";

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column({ unique: true })
    matricule: number;

    @Column()
    @Exclude()
    password: string;

    // @ManyToOne(() => Role)
    // @JoinColumn({ name: 'roleId' })
    // role: Role;

    @Column()
    created: Date;
}
