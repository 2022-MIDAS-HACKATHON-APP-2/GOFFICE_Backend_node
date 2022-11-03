import { Injectable } from '@decorators/di';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
    OneToMany,
} from 'typeorm';
import { AdminEntity } from './Admin';
import { CompanyEntity } from './Company';
import { UserEntity } from './User';

@Entity('department')
@Injectable()
export class DepartmentEntity {
    
    @PrimaryGeneratedColumn()
    @OneToMany(
        (type) => UserEntity,
        (user) => user.department
    )
    @OneToMany(
        (type) => AdminEntity,
        (admin) => admin.department
    )
    id: number;

    @ManyToOne(
        (type) => CompanyEntity,
        (company) => company.id
    )
    company: number;

    @Column({ nullable: false })
    department: string;

}