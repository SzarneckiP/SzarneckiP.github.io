const openModal = (id) => {
    const modalId = document.querySelector(`#${id}`)
    modalId.classList.add('active-modal')
}

const closeModal = () => {
    const openedModal = document.querySelector('.active-modal')
    openedModal.classList.remove('active-modal')
}
    
window.onclick = function(event) {
    const openedModal = document.querySelector('.active-modal')
    if (event.target == openedModal) {
        openedModal.classList.remove('active-modal')
    }
}