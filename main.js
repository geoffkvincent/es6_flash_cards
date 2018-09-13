$(document).ready( function() {
  
  
});


const q_create = document.getElementById('q_create')
const a_create = document.getElementById('a_create')
const create_button = document.getElementById('create_button')
const q_result = document.getElementById('q_result')
const a_result = document.getElementById('a_result') 
const show_answer_button = document.getElementById('show_answer_button')   
let question = ''
let answer = '' 
let card =[]

create_button.addEventListener('click',function () {
  question = q_create.value
  answer = a_create.value
  q_result.innerHTML = question
  q_create.value = ''
  a_create.value = ''
})

show_answer_button.addEventListener('click', function() {
  a_result.innerHTML = answer
})


// q_button.addEventListener('click', function () {
//   question = q_create.value
//    q_result.innerHTML = question 
//    q_create.value = ''
// })

// a_button.addEventListener('click', function () {
//   answer = a_create.value
   
//    a_create.value = ''
// })

// card.addEventListener('click', function () {
//   q_result.innerHtml = answer
// })




