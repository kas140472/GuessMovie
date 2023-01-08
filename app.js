const movies = [
    'CHERRY MAGIC',
    'SEMANTIC ERROR',
    'OLD FASHIONED CUPCAKE',
    'ETERNAL YESTERDAY',
    "MY BEST FRIEND'S WEDDING",
    "LIFE - LOVE ON THE LINE",
    "OSSAN'S LOVE",
    "YURI ON ICE",
  "WHERE YOUR EYES LINGER"
  ]

const hints = [
    '30',
    '2-week trial',
    'Jiang Jiang panda',
    'zombie boyfriend',
    'George!!',
    "Normal, normal, normal! What the hell is normal!?",
    "Maki",
    "Katsudon",
    "blurry blurry blurry"
]

const reviews = [
    'Cherry Magic was really mushy and cheesy but still pretty good. I really liked that they had an asexual character.',
    'Semantic Error was quite engaging from beginning to end, with good, sharp writing.',
    'Old fashioned cupcake is one of my favourites. I liked that it had older characters with whom I could relate. I also liked the commentary on ambition and fear of change.',
    'Eternal Yesterday was very well-made. Felt really sad by the end of it.',
    'I loved 3 things about this one: Julia Roberts, unpredictable plot (spoiler: the protagonist didn\'t get the love interest!), and George:)',
    'I loved the protagonist\'s sister and the whole family drama scene. I had read the manga before watching the show and it\'s a really great read.',
    'Ossan\'s Love was just hilarious :D',
    'I began following figure-skating after watching this.',
  'So good! Couldn\'t stop watching!'
]

let random = Math.floor(Math.random()*movies.length);

var userGuess = document.getElementById('guess');

hint.textContent = hints[random];

function checkGuess() 
{
    //random = Math.floor(Math.random()*movies.length);

    let myGuess = userGuess.value
    if (myGuess.toUpperCase() === movies[random]) 
    {
        feedback.textContent = "You got it right!" 
        review.textContent = reviews[random];  
    } 
    else  
    {
        feedback.textContent = "Your guess was " + myGuess + ". That's wrong. Try Again!"
        review.textContent = '';
    }
}
   
submitGuess.addEventListener('click', checkGuess)