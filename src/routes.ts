import { Router } from "express"

const routes = Router()

routes.post("/user", (request, response) => {
	const { name, email, password } = request.body
	const user = {
		name,
		email,
		password,
	}
	return response.json({user})
})

export default routes
