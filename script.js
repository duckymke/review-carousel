const reviews = [
    {
        id: 1,
        author: 'mei',
        title: 'best daughter ever',
        // img: '',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quidem vero sed cum ullam reiciendis temporibus odio illum veritatis maxime. Exercitationem eveniet molestias quae, iusto velit tenetur fugiat veritatis laudantium?',
    },
    {
        id: 2,
        author: 'hiro',
        title: 'best son ever',
        // img: '',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quidem vero sed cum ullam reiciendis temporibus odio illum veritatis maxime. Exercitationem eveniet molestias quae, iusto velit tenetur fugiat veritatis laudantium?',
    },
    {
        id: 3,
        author: 'sakura',
        title: 'tied for best daughter ever',
        // img: '',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quidem vero sed cum ullam reiciendis temporibus odio illum veritatis maxime. Exercitationem eveniet molestias quae, iusto velit tenetur fugiat veritatis laudantium?',
    }
];

// const img = document.getElementById('person-img')
const author = document.getElementById('author');
const title = document.getElementById('title');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    author.textContent = item.author;
    title.textContent = item.title;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) { // we create the function showPerson with the parameter of person
    const item = reviews[person]; // here we create the item variable and define it with the reviews data and the person parameter
    author.textContent = item.author;
    title.textContent = item.title;
    info.textContent = item.text;
}

// show next person item
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show previous person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }  
    showPerson(currentItem);
});

// random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});