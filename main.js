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

function load_card (cards) {
  debugger
  cards.map(function(c) {
    return c.question
  })
}

prev.addEventListener('click', function() {
  
})

next.addEventListener('click', function() {
  debugger
  load_card()
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
