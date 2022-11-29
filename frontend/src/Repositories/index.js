import { useEffect, useState } from "react"
import { getCurrentUser, getFavs, getRepositories } from "../Main/Helpers"
import { StarFill } from 'react-bootstrap-icons'

export default function Repositories() {
    const [repositories, setRepositories] = useState(getRepositories())
    const [favs, setFavs] = useState(getFavs())
    const [noRepositories, setNoRepositories] = useState(false)

    useEffect(() => {
        async function getRepositories () {
            let currentUser = getCurrentUser()
    
            let url = `http://127.0.0.1:5500/user/${currentUser.githubUser}/repositories`
    
            let result = await fetch(url, {
                method: 'GET',
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
    
            let response = await result.json()

            response = response.map(element => ( {...element, fav: 0}))

            setRepositories(response)
            localStorage.setItem('repositories', JSON.stringify(response))
        }

        if (!repositories.length && !favs.length) {
            getRepositories()
        }

        setNoRepositories((repositories.length === 0 && favs.length === 0))

      }, [repositories, favs]);

    const clickFav = (event) => {
        event.preventDefault()
        let collection = eval(event.currentTarget.dataset.collection)

        collection[event.currentTarget.dataset.key].fav = !collection[event.currentTarget.dataset.key].fav

        if (collection[event.currentTarget.dataset.key].fav) {
            let repo = repositories.splice(event.currentTarget.dataset.key, 1)[0]
            favs.push(repo)
        } else if (!collection[event.currentTarget.dataset.key].fav) {
            let repo = favs.splice(event.currentTarget.dataset.key, 1)[0]
            repositories.push(repo)
        }

        setRepositories([...repositories])
        setFavs([...favs])
        localStorage.setItem('repositories', JSON.stringify(repositories))
        localStorage.setItem('favs', JSON.stringify(favs))
    }

    return noRepositories ? (
        <div className="noReps">
            <h3>There is no repositories to show</h3>
        </div>
    ) :
    (
        <div>
            <div className="repository_titles">
                <h3>Repositories</h3>
                <h3>Favorite Repositories</h3>
            </div>
            <div className="repositories_section">
                <div className="repositories">
                {   
                    repositories.map((element, key) => (
                        <div key={"repo-" + element.name} className='repository'>
                            <a href={element.url} target="_blank" rel="noreferrer"><p>{element.name}</p></a>
                            <StarFill data-key={key} data-collection='repositories' onClick={clickFav}/>
                        </div>
                    ))
                    
                }
                </div>
                <div className="favs">
                {   
                    favs.map((element, key) => (
                        <div key={"fav-" + element.name} className='fav'>
                            <a href={element.url} target="_blank" rel="noreferrer"><p>{element.name}</p></a>
                            <StarFill data-key={key} data-collection='favs' onClick={clickFav}/>
                        </div>
                    ))
                    
                }
                </div>
            </div>
        </div>
        
    )
}