const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
e.preventDefault();

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'Please give a valid height';
}else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please give a valid weight';
}else {
   const bmi = (weight/((height*height)/10000)).toFixed(2)
//    show the result 
results.innerHTML=`<span>${bmi}</span>`
const showResult = document.querySelector('.showResult')
showResult.style.color = '#fff'

if(bmi < 18.6){
    showResult.innerHTML = `<h2><span>You are under weight</span></h2>`
}else if(bmi > 18.6 && bmi < 24.9){
    showResult.innerHTML = `<h2><span>Your weight is Normal</span></h2>`
}else if(bmi > 24.9){
    showResult.innerHTML = `<h2><span>You are Overweight</span></h2>`
}

}


  })