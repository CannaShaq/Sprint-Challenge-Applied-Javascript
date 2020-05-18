// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    Object.keys(response.data.articles).forEach(subject => {
        response.data.articles[subject].forEach(attribute => {
            document.querySelector('.cards-container').append(cardMaker(attribute))
            //console.log(attribute);
        })
    })
})

.catch(error => {
    console.log(error);
})

function cardMaker(stuff){
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imagesDiv = document.createElement('div');
    const images = document.createElement('img');
    const authorName = document.createElement('span');

    card.append(headLine, author);
    author.append(imagesDiv, authorName);
    imagesDiv.append(images);

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imagesDiv.classList.add('img-container');
    
    headLine.textContent = stuff.headline;
    images.src = stuff.authorPhoto;
    authorName.textContent = stuff.authorName;


    return card;
}
