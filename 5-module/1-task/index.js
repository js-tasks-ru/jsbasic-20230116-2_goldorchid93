/* function hideSelf() {
  const button = document.querySelector('.hide-self-button')
  const hideButton = document.querySelector('.hide-self-button:active')
  button.onclick = () => {
    hideButton = true
  }
} */

function hideSelf() {
  const button = document.querySelector('.hide-self-button')
  button.onclick = () => {
    button.hidden = true
  }
}