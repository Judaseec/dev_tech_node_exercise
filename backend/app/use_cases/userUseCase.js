import env from "../config.js"
import fetch from "node-fetch"

const userUseCase = {
    fetchRepositories: async (username) => {
        let result = await fetch(env.GITHUB_GRAPHQL_URL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.GITHUB_TOKEN}`
            },
            body: JSON.stringify({
                query: `{ 
                    user (login: "${username}") {
                      repositories (last:50, orderBy: {field:NAME, direction: ASC}) {
                        nodes{
                          name
                          url
                        }
                      }
                    }
                  }`
            })
        })

        let response = await result.json()

        return response.data.user.repositories.nodes
    }
}

export default userUseCase;