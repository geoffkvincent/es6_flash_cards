$(document).ready( function() {
  
  
});

const q1 = document.getElementById('q1')
var q_create = document.getElementById('q_create')
var a_create = document.getElementById('a_create')
var q_button = document.getElementById('q_button')
var a_button = document.getElementById('a_button')
var q_result = document.getElementById('q_result')
var a_result = document.getElementById('a_result')    
var question = ''
var answer = '' 


q_button.addEventListener('click', function () {
  question = q_create.value
   q_result.innerHTML = question 
   q_create.value = ''
})

a_button.addEventListener('click', function () {
  answer = a_create.value
   
   a_create.value = ''
})

card.addEventListener('click', function () {
  q_result.innerHtml = answer
})




// q1.addEventListener('click', function() {
//   q1.innerHTML = 'answer 1'
// })