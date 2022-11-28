function getCurrentUser () {
    return JSON.parse(localStorage.getItem('current_user'))
}

function isLoggedUser() {
    return !!localStorage.getItem('current_user')
}

function getRepositories() {
    return localStorage.getItem('repositories') ? JSON.parse(localStorage.getItem('repositories')) : []
}

function getFavs() {
    return localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : []
}

export {
    getCurrentUser,
    isLoggedUser,
    getRepositories,
    getFavs,
}    
