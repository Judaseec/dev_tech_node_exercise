import env from "../config.js"
import fetch from "node-fetch"

const userUseCase = {
    fetchRepositories: async (username) => {
      try {
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

        if (result.status >= 400) {
          return { error: response.message, status: result.status }
        }

        if (!response.data || !response.data.user ){
          return { data: [], status: 200 }
        }
        
        return { data: response.data.user.repositories.nodes, status: 200 }
      } catch (error) {
        return {error: error.message, status: 500}
      } 

    }
}

export default userUseCase;