const questions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
const form = document.querySelector('form')
const resultDiv = document.querySelector('.result')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

form.addEventListener('submit', async event => {
  event.preventDefault()
  window.scrollTo(0, 0)

  form.classList.add('hidden')
  resultDiv.classList.remove('hidden')

  for (const letter of questions) {
    const value = document.querySelector(`input[name="${letter}"]:checked`).value
    for (let i = 1; i <= value; i++) {
      const shape = document.querySelector(`.${letter} .l${i}`)
      console.log(shape)
      shape.style.fillOpacity = 100
      await sleep(50)
    }

    await sleep(100)
  }
})