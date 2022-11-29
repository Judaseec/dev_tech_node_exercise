import userUseCase from "../../use_cases/userUseCase.js";

const userController = {
    getRepositories: async (req, res) => {
        let {data, error, status} = await userUseCase.fetchRepositories(req.params.username)

        if (status >= 400 ) {
            return res.status(status).send(error)
        }

        return res.status(status).send(data)
    }
}

export default userController;

