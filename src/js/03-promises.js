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
  const amount = form.amount.value
  const step = form.step.value
  const delay = form.delay.value
  
  for (let i = 1; i <= amount; i++) {      
    createPromise(i, delay )
      .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`)
  })
   
  }  
 
})