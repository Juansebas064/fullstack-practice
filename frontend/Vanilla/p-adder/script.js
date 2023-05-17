const btn = document.getElementById('b1')

function addParagraph() {
    const randomNumber = Math.floor(Math.random() * 100)
    const pElement = document.createElement('p')
    pElement.textContent = `The random number is ${randomNumber}`
    document.body.appendChild(pElement)
}

btn.onclick = addParagraph