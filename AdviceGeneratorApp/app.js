// Variables
const quote = document.querySelector('.advice');
const dice = document.querySelector('.img-container');
const adviceId = document.querySelector('h3');


// Create an async function to Gather data from API
async function getQuote() {
    // Handle Errors through the try & catch
    try {
        // Call the fetch API method
        const response = await fetch('https://api.adviceslip.com/advice');
        // Call the json() method
        const data = await response.json();
        // Store the quote into a varioble
        const advice = data.slip.advice;
        const id = data.slip.id;
        // Add a new Quote to the paragraph
        quote.textContent = `"${advice}"`;
        adviceId.textContent = `Advice #${id}`;
    } catch (e) {
        console.log(e);
    }
}

// Create function that displays the quote
function displayQuote() {
    // Every time the button is clicked 
    dice.addEventListener('click', () => {
        // Call the Function
        getQuote();
    })
}

getQuote();
displayQuote();
