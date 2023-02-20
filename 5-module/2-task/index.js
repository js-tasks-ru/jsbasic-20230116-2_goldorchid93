function toggleText() {
  let button = document.querySelector('.toggle-text-button')
  let text = document.querySelector('#text')

  button.addEventListener('click', function() {
    text.hidden = !text.hidden
  })
 
}
/*   const textButton = document.querySelector('.toggle-text-button')
  textButton.oncklick = () => {
    innerText.hidden = true
    innerText.hidden = false
  }
} */

/* function handler() {
    
} 
document.addEventListener('click', handler) {
  let id = handler.target.dataset.toggleId
  if (!id) return

  let elem = document.getElementById(id)

  elem.hidden = !elem.hidden
  }) */


