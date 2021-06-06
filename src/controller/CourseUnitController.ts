import { Request, Response } from "express";
import { CreateCourseUnitService } from "../services/CreateCourseUnitService";
import { GetCourseUnitsService } from "../services/GetCourseUnitsService";

class CourseUnitController {
    async create( request:Request, response:Response){
        const courseUnitData = request.body

        const createCourseUnit = new CreateCourseUnitService()

        const courseUnit = await createCourseUnit.execute(courseUnitData);

        return response.json(courseUnit);
    }

    async show(request:Request, response:Response) {
        const userId = request.body.user;

        const getCourseUnits = new GetCourseUnitsService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits);
    }
}

export {CourseUnitController};