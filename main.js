const q_create = document.getElementById('q_create')
const a_create = document.getElementById('a_create')
const create_button = document.getElementById('create_button')
const q_result = document.getElementById('q_result')
const a_result = document.getElementById('a_result') 
const show_answer_button = document.getElementById('show_answer_button') 
const hide_answer_button = document.getElementById('hide_answer_button')     
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let question = ''
let answer = '' 
let cards =[]
let currentIndex = 0

function increaseIndex() {
  if(currentIndex >= cards.length - 1) {
      currentIndex = 0;
  } else {
      currentIndex++;
  }
  displayCards();
}

function decreaseIndex() {
  if(currentIndex <= 0) {
      currentIndex = cards.length - 1;
  } else {
      currentIndex--;
  }
  displayCards();
}

// const displayCards = () => {
//   console.log(currentIndex);
//   cardContainer.innerHTML = ""; 
//   console.log(cardArray); 
//   let currentCard = cardArray[currentIndex];
//   cardContainer.innerHTML = 
//       `<div class = "card">
//           <div class="card-face card-face-front">
//               <h3>${currentCard.front}</h3>
//               <i class="fas fa-edit edit-card"></i>
//           </div>
//           <div class="card-face card-face-back">
//               <h3>${currentCard.back}</h3>
//           </div>
//       </div>`

prev.addEventListener('click', function() {
  decreaseIndex()
})

next.addEventListener('click', function() {
  increaseIndex()
})

create_button.addEventListener('click',function () {
  question = q_create.value
  answer = a_create.value
  let card = {question: question, answer: answer}
  cards.push(card)
  q_result.innerHTML = question
  q_create.value = ''
  a_create.value = ''
})

show_answer_button.addEventListener('click', function() {
  a_result.innerHTML = answer
})

hide_answer_button.addEventListener('click', function() {
  a_result.innerHTML = ''
})
