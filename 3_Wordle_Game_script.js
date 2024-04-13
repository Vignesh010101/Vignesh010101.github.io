const wordLists = {
    english: ['HELLO', 'WORLD', 'APPLE', 'BANANA', 'CODING', 'SOPHIA', 'ARTIFICIAL', 'LANGUAGE'],
    spanish: ['HOLA', 'MUNDO', 'MANZANA', 'PLATANO']
};

let currentLanguage = 'english';
let targetWord = getRandomWord();
let guessedWord = Array(targetWord.length).fill('_');

function getRandomWord() {
    const languageWords = wordLists[currentLanguage];
    const randomIndex = Math.floor(Math.random() * languageWords.length);
    return languageWords[randomIndex];
}

function updateDisplay() {
    document.getElementById('word-display').textContent = guessedWord.join(' ');
}

function appendToGuess(letter) {
    const inputField = document.getElementById('guess-input');
    inputField.value += letter;
}

function checkGuess() {
    const inputField = document.getElementById('guess-input');
    const guess = inputField.value.toUpperCase();

    if (guess.length === targetWord.length && /^[A-Z]+$/.test(guess)) {
        for (let i = 0; i < targetWord.length; i++) {
            if (targetWord[i] === guess[i]) {
                guessedWord[i] = guess[i];
            }
        }

        updateDisplay();

        if (guessedWord.join('') === targetWord) {
            alert('Congratulations! You guessed the word.');
            resetGame();
        }
    } else {
        alert('Invalid guess. Please enter a valid word.');
    }

    inputField.value = '';
}

function switchLanguage(language) {
    currentLanguage = language;
    resetGame();
}

function resetGame() {
    targetWord = getRandomWord();
    guessedWord = Array(targetWord.length).fill('_');
    updateDisplay();
}

updateDisplay();

document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
