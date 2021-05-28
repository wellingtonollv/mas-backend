import { Request, Response, Router } from "express"
import { UserController } from "./controller/UserController"
import { ActivyController } from "./controller/ActivyController"
import { CourseUnitController } from "./controller/CourseUnityController"
import { AuthenticateController } from "./controller/AuthenticateController"
import authenticated from "./middlewares/authenticated"

const userController = new UserController()
const activyController = new ActivyController()
const courseUnitController = new CourseUnitController()
const authenticateController = new AuthenticateController()

const routes = Router()

routes.post("/user", authenticated, userController.create)

routes.post('/user', (request: Request, response: Response) => {
    const {name, email, password} = request.body
    const user = {
    name,
    email,
    password
    }
    return response.json(user);
    })
routes.get('/user/', (req: Request, resp: Response) => {
    return resp.json({ 
        message: 'erro'
    })
})
routes.post("/auth", authenticateController.create)
routes.post("/activy", authenticated, activyController.create)
routes.post("/courseunit", authenticated, courseUnitController.create)

export default routes
