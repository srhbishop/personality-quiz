// Get the radio buttons by class
const answerAs = document.querySelectorAll('.answer-a');
const answerBs = document.querySelectorAll('.answer-b');
const answerCs = document.querySelectorAll('.answer-c');
// get the rest of the necessary DOM elements
const submitBtn = document.querySelector('.submit-btn');
const printResults = document.querySelector('.print-results');
const printImg = document.querySelector('.print-img');
const resultsWrapper = document.querySelector('.results-wrapper');
const repeatBtn = document.querySelector('.repeat-btn');
// Set variables that will be incremented according to user answers.
let tallyA = 0;
let tallyB = 0;
let tallyC = 0;


submitBtn.addEventListener('click', resultsFunction);

// for clearing results and taking the quiz again
repeatBtn.addEventListener('click', function() {
    resultsWrapper.classList.add('inactive');
})

function resultsFunction() {
    // Increment the score according to user responses. (A is always 0 value according to the very advanced Cosmo quiz algorithm, so we're just leaving that out).
    for(const answerB of answerBs) {
        if(answerB.checked) {
        tallyB++;
        }
    }
    for(const answerC of answerCs) {
        if(answerC.checked) {
        tallyC+=2;
        }
    }
    // Adds up the final tally
    let finalScore = tallyA+tallyB+tallyC;

    // makes results visible
    resultsWrapper.classList.remove('inactive');

    // suggests results based on the final tally
    if(finalScore <= 3) {
        printImg.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg" alt="The scream of nature painting">`
        printResults.textContent = `You are "The Scream of Nature" by Norwegian painter, Edvard Munch. You're a little high-strung, but, hey, life is STRESSFUL. Keep on keeping on; you can do it!`;
    } else if (finalScore <= 6) {
        printImg.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Ducreux1.jpg" alt="Smiling dude">`;
        printResults.textContent = `You are "Portrait de l'artiste sous les traits d'un moqueur" by French painter, Joseph Ducreux. You are confident in yourself and are also a popular internet meme. Take that for what you will.`;
    } else {
        printImg.innerHTML = `<img src="https://miro.medium.com/max/1400/0*uFu5uij7bvI54j2D.jpg" alt="Medieval cat painting">`
        printResults.textContent = `You are...a medieval cat? How did that happen? You might be a little odd and difficult to pin down, but, hey, you do you!`;
    }
}