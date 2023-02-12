import updateUser from './userData'

import './style/main.scss'
import noteImg from './img/note.svg'

const mainImg = document.querySelector('.main-img')
mainImg.src = noteImg

const mainButton = document.querySelector('.main-btn')
mainButton.addEventListener('click', updateUser)
updateUser()
