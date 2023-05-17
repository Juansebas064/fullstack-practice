// Generate a random index between 0 and 4
function generateIndex() {
    return Math.floor(Math.random() * 5)
}


let lastUsedDiv

function cleanDiv() {
    if (lastUsedDiv) {
        const lastDiv = document.querySelector(lastUsedDiv)
        lastDiv.innerHTML = ''
    }
}


function showMeme() {
    cleanDiv()
    const memeDiv = document.querySelector('.meme')
    if (memeDiv.children[0]) {
        memeDiv.children[0].setAttribute('src', memes[generateIndex()])
    }
    else {
        const meme = document.createElement('img')
        meme.src = memes[generateIndex()]
        meme.width = 500
        memeDiv.appendChild(meme)
    }
    lastUsedDiv = '.meme'
}


function showJoke() {
    cleanDiv()
    const jokeDiv = document.querySelector('.joke')
    if (jokeDiv.children[0]) {
        jokeDiv.children[0].textContent = jokes[generateIndex()]
    }
    else {
        const joke = document.createElement('p')
        joke.textContent = jokes[generateIndex()]
        jokeDiv.appendChild(joke)
    }
    lastUsedDiv = '.joke'
}


function showQuote() {
    cleanDiv()
    const quoteDiv = document.querySelector('.quote')
    if (quoteDiv.children[0]) {
        quoteDiv.children[0].textContent = quotes[generateIndex()]
    }
    else {
        const quote = document.createElement('p')
        quote.textContent = quotes[generateIndex()]
        quoteDiv.appendChild(quote)
    }
    lastUsedDiv = '.quote'
}


function showRiddle() {
    cleanDiv()
    let randomIndex = generateIndex()
    const riddleDiv = document.querySelector('.riddle')
    if (riddleDiv.children[0]) {
        riddleDiv.children[0].textContent = riddles[randomIndex].riddle
        riddleDiv.children[1].textContent = riddles[randomIndex].answer
    }
    else {
        const newRiddleArr = [
            document.createElement('p'),
            document.createElement('p')
        ]
        newRiddleArr[0].textContent = riddles[randomIndex].riddle
        newRiddleArr[1].textContent = riddles[randomIndex].answer
        newRiddleArr[1].hidden = true
        riddleDiv.appendChild(newRiddleArr[0])
        riddleDiv.appendChild(newRiddleArr[1])
    }
    lastUsedDiv = '.riddle'
}


function revealAnswer() {
    const answer = document.querySelector('.riddle').children[1]
    if (answer) {
        if (answer.hidden == false) {
            alert('The answer is already revealed')
        }
        else {
            answer.hidden = false
        }
    } 
    else {
        alert('There\'s no riddle!!')
    }
}



/**
 * Data
 */

// Array of memes by url
const memes = [
    'https://global.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png',

    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be780ae86778720e367_Zoa5paPhsRtqzIki0flgfk3q7FGEh2VUa5DLxKQTC0KN4WIPvB_qPkMKAIWlsnXDU5ZVupBa4GuMskrt68jRC3aUuNECLsJFLxD_-FevEqq9yPvWpkX1wOJMSmg0J9QuMCdNgJ1L.png',

    'https://miro.medium.com/v2/resize:fit:700/1*bOASH2rdFfCZ8x_Jd4FFmg.png',

    'https://i.pinimg.com/736x/8c/36/50/8c3650e5343c3289b353125155640fcd.jpg',

    'https://images7.memedroid.com/images/UPLOADED789/640ac5f6f396f.jpeg'
]


// Array of jokes
const jokes = [
    'How many programmers does it take to change a light bulb? None - It\'s a hardware problem',

    'Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.',

    'There are only 10 kinds of people in this world: those who know binary and those who don\'t.',

    'Have you heard about the new Cray super computer?  It\'s so fast, it executes an infinite loop in 6 seconds.',

    'Programming is 10% writing code and 90% understanding why it\'s not working'
]


// Array of advices
const quotes = [
    'Do what you love, not what you\'re told to love.',

    'The way to get started is to quit talking and begin doing. -Walt Disney',

    'Life is what happens when you\'re busy making other plans. - John Lennon',

    'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',

    'It is during our darkest moments that we must focus to see the light. -Aristotle'
]


// Array of riddles
const riddles = [
    {
        riddle: 'What has to be broken before you can use it?',
        answer: 'An egg'
    },
    {
        riddle: 'I\'m tall when I\'m young, and I\'m short when I\'m old. What am I?',
        answer: 'A candle'
    },
    {
        riddle: 'What month of the year has 28 days?',
        answer: 'All of them'
    },
    {
        riddle: 'What question can you never answer yes to?',
        answer: 'Are you asleep yet?'
    },
    {
        riddle: 'What can you break, even if you never pick it up or touch it?',
        answer: 'A promise'
    }
]