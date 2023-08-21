const questions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
const form = document.querySelector('form')
const resultDiv = document.querySelector('.result')

const googleFormInputNames = [
  'entry.96032565',
  'entry.1252316316',
  'entry.1419377580',
  'entry.849838440',
  'entry.1537126508',
  'entry.2010273851',
  'entry.974284879',
  'entry.2056191003',
  'entry.2102395374',
  'entry.1481036503',
  'entry.1805010505',
  'entry.1137325388',
  'entry.2036797411',
  'entry.1344740969',
  'entry.1253277510',
]


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

form.addEventListener('submit', async event => {
  event.preventDefault()
  window.scrollTo(0, 0)

  form.classList.add('hidden')
  resultDiv.classList.remove('hidden')

  for (let index in questions) {
    const letter = questions[index]
    const name = googleFormInputNames[index]

    const input = document.querySelector(`input[name="${letter}"]:checked`)
    input.name = name
    const value = input.value

    for (let i = 1; i <= value; i++) {
      const shape = document.querySelector(`.${letter} .l${i}`)
      shape.style.fillOpacity = 100
      await sleep(25)
    }

    if (value > 0) await sleep(50)
  }

  event.target.submit()
})