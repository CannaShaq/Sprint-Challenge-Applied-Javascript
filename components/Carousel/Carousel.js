/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function Carousel(){
  const carousel = document.createElement('div');
  const leftBttn = document.createElement('div');
  const img0 = document.createElement('img');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const rightBttn = document.createElement('div');

  carousel.append(leftBttn, img0, img1, img2, img3, rightBttn);
  carousel.classList.add('carousel');
  leftBttn.classList.add('left-button');
  rightBttn.classList.add('right-button');

  img0.src = "/assets/carousel/mountains.jpeg"
  img1.src = "/assets/carousel/computer.jpeg"
  img2.src = "/assets/carousel/trees.jpeg"
  img3.src = "/assets/carousel/turntable.jpeg"


  return carousel;
}

const carContainer = document.querySelector('.carousel-container');
carContainer.appendChild(Carousel());