import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import {v4 as uuid, v4} from 'uuid';
import { CourseUnit } from './CourseUnit';
class Activy {
    
    constructor() {
        if(!this.id){
            this.id=uuid()
        }
    }

    readonly id: string

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)

    course_unit: CourseUnit
}

export {Activy}