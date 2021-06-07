import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface CourseUnitId {
    id?: string;
}

class GetCourseUnitService {
   
    public async execute({id}:CourseUnitId) {
        
        const courseUnitRepository = getRepository(CourseUnit)

        const courseUnit = courseUnitRepository.find();

        if(!courseUnit) {
            return {
                message:'course unit not found'
            }
        }

        return courseUnit;
    }
}

export {GetCourseUnitService}