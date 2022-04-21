import Notiflix from 'notiflix';
function createPromise(position, delay) {    
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve({position,delay})
  } else {
    reject({position, delay})
  }  
    }, delay)})
  
}
const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const amount = parseInt(form.amount.value)
  const step = parseInt(form.step.value)
  const delay = parseInt(form.delay.value)
  
  for (let i = 1; i <= amount; i++) {    
    createPromise(i, delay+step*(i-1) )
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  })
   
  }  
 
})