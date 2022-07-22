document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelector('.navbar-collapse')
    // const currentDate = document.querySelector('.current-date')

    const removeShowClass = () => {
        if (navbarLinks.classList.contains('show')) {
            navbarLinks.classList.remove('show')
        }
    }

    // const currentYear = () => {
    //     const date = new Date().getFullYear()
    //     currentDate.textContent = date
    // }

    // currentYear()

    navbarLinks.addEventListener('click', removeShowClass)
})