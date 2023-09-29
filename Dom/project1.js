let btn = document.querySelector('#new-quote');
console.log(btn);
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

let quotes = [
    {
        quote: "First they ignore you, then they laugh at you, then they fight you, then you win",
        person: "mahatma gandhi"
    },
    {
        quote: "The most beautiful experience we can have is the mysterious",
        person: "Albert Einstein"
    },
    {
        quote: "Love is composed of a single soul inhabiting two bodies.",
        person: "Aristotle"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        person: "steve jobs"
    },
    {
        quote: "Success comes to those who wait",
        person: "Nicola tesla"
    },
    {
        quote: "I think people can choose to be not ordinary.",
        person: "Elon Musk"
    },
    {
        quote: "That's one small step for a man, a giant leap for mankind.",
        person: "Neil Armstrong"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        person: "Franklin D. Roosevelt"
    }
];
console.log(quotes);
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}
)