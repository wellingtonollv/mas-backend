import { Router } from "express"

const routes = Router()

routes.post("/user", (request, response) => {
	const { name, email, password } = request.body
	const user = {
		name: String,
		email: String,
		password: String,
	}
})

routes.post('/user', ()=> console.log('User'))
routes.post('/activy', ()=> console.log('activy'))
routes.post('/courseunit', ()=> console.log('course'))

export default routes
