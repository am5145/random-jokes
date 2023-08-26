
var jokesArray = [];

// Fetch jokes from the API and populate the jokesArray
fetchJokes();

// Function to fetch jokes from the API
function fetchJokes() {
  fetch('https://official-joke-api.appspot.com/jokes/ten')
    .then(response => response.json())
    .then(data => {
      jokesArray = data;
      displayRandomJoke();
    })
    .catch(error => console.log(error));
}

// Function to display a random joke from the jokesArray
function displayRandomJoke() {
  var jokeContainer = document.getElementById('joke-container');
  var randomIndex = Math.floor(Math.random() * jokesArray.length);
  var randomJoke = jokesArray[randomIndex];
  jokeContainer.innerHTML = randomJoke.setup + "<br>" + randomJoke.punchline;
}


