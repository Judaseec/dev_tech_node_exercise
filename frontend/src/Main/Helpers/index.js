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

function validateEmail(email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return 'Invalid email address'
    }
  
    return ''
  }

export {
    getCurrentUser,
    isLoggedUser,
    getRepositories,
    getFavs,
    validateEmail
}    
