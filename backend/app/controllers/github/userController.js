import userUseCase from "../../use_cases/userUseCase.js";

const userController = {
    getRepositories: async (req, res) => {
        let repositories = await userUseCase.fetchRepositories(req.params.username)

        res.send(repositories)
    }
}

export default userController;

