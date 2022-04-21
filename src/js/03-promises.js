function createPromise(position, delay) {
  console.log(delay)
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
  } else {
    reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`))
  }  
    }, delay)})
  
}
const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const amount = form.amount.value
  const step = form.step.value
  const delay = form.delay.value
  let i = 1
  while (i <= amount) {    
    createPromise(i, delay)
    i++
  }
})