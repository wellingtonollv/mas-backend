import {Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';
import { CourseUnit } from './CourseUnit';

@Entity("activities")
class Activy {

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    activity_date:Date;

    @Column()
    course_unit_id:string;

    @CreateDateColumn()
    created_at:Date;

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activities)
    course_unit: CourseUnit
}

export {Activy}