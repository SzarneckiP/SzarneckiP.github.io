document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar')
    const burger = document.querySelector('.navbar-toggler')
    const navbarLinks = document.querySelector('.navbar-collapse')
    const currentDate = document.querySelector('.current-date')

    const cards = document.querySelector('.cards')

    const removeShowClass = () => {
        if (navbarLinks.classList.contains('show')) {
            navbarLinks.classList.remove('show')
        }
    }

    const addShadow = () => {
        if (window.innerWidth > 992) {
            if (window.scrollY >= 100) {
                navbar.classList.add('shadow-bg')
            } else {
                navbar.classList.remove('shadow-bg')
            }
        } else {
            if (window.screenY >= 0) {
                navbar.classList.add('shadow-bg')
            }
        }
    }

    const currentYear = () => {
        const date = new Date().getFullYear()
        currentDate.textContent = date
    }


    navbarLinks.addEventListener('click', removeShowClass)
    burger.addEventListener('click', () => {
        if (!navbar.classList.contains('shadow-bg'))
            navbar.classList.add('shadow-bg')
    })
    window.addEventListener('scroll', addShadow)

    const delAnimationsInSmallScreens = () => {
        const projectCard = document.querySelectorAll('.project-card')
        if (window.innerWidth < 768) {
            projectCard.forEach(delay => {
                delay.removeAttribute('data-aos-delay')
            })
        }
    }

    currentYear()
    delAnimationsInSmallScreens()

    window.addEventListener('load', () => {
        cards.classList.remove('d-none', 'invisible')
    })
})





