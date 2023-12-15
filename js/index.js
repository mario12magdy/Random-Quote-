var quotes = [
    {
     'quote': 'Be yourself; everyone else is already taken.',
     'author': 'Oscar Wilde', 
    },
    { 
     'quote': 'A room without books is like a body without a soul.',
     'author': 'Marcus Tullius Cicero',
    },
    {
     'quote': 'So many books, so little time.',
     'author': 'Frank Zappa', 
    },
    { 
     'quote': 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
     'author': 'Dr. Seuss',
    },
    { 
     'quote': 'Be the change that you wish to see in the world.',
     'author': 'Mahatma Gandhi',
    },
    { 
     'quote': 'A friend is someone who knows all about you and still loves you.',
     'author': 'Elbert Hubbard',
    },
    { 
        'quote': 'We are all in the gutter, but some of us are looking at the stars.',
        'author': 'Oscar Wilde, Lady Windermere\'s Fan',
    },
    { 
        'quote': 'Life is what happens to us while we are making other plans.',
        'author': 'Allen Saunders',
    },

];

var lastQuote ='';
function printRandom(){
   
    var random ;
    do{
        random = Math.floor(Math.random()*quotes.length)
    }while(quotes[random] == lastQuote)

    lastQuote = quotes[random]
    var quote = quotes[random]
    var author = quotes[random]
   
    document.getElementById('randomOutput').innerHTML = `${quote.quote}`;
    document.getElementById('author').innerHTML = `--${author.author}`;
    console.log(lastQuote);
}
