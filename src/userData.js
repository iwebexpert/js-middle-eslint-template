import axios from 'axios'
import { getRandomInt } from './random'

function updateUser() {
  // fetch(`https://jsonplaceholder.typicode.com/users/${getRandomInt(1, 10)}`)
  // .then((result) => res.json())
  // .then((result) => {
  //   document.querySelector('.user-name').textContent = result.name
  //   document.querySelector('.user-amount').innerHTML = getRandomInt(1000, 10000) + ' &#8381;'
  //   document.querySelector('.user-email').textContent = result.email
  // })

  axios
    .get(`https://jsonplaceholder.typicode.com/users/${getRandomInt(1, 10)}`)
    .then((result) => {
      document.querySelector('.user-name').textContent = result.data.name
      document.querySelector('.user-amount').innerHTML =
        getRandomInt(1000, 10_000) + ' &#8381;'
      document.querySelector('.user-email').textContent = result.data.email
    })
}

export default updateUser
