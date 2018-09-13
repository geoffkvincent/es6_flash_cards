$(document).ready( function() {
  
  
});

const q1 = document.getElementById('q1')
var q_create = document.getElementById('q_create')
var a_create = document.getElementById('a_create')
var q_button = document.getElementById('q_button')
var a_button = document.getElementById('a_button') 
var question = ''
var answer = '' 


q_button.addEventListener('click', function () {
  question = a_create.value
  
  console.log(question)
})

a_button.addEventListener('click', function() {
  answer = a_create.textbox.value
})

// q1.addEventListener('click', function() {
//   q1.innerHTML = 'answer 1'
// })