function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
     if (shouldResolve) {
    resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
  } else {
    Reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`))
  }
  })
  
 
}
const form = document.querySelector(".form")
form.addEventListener("submit", () => {
  form.submit.preventDefault()
  const amount = form.amount.value
  const step = form.step.value
  const delay = form.delay.value
  let i =1
  while (i <= amount) {
    i++
    createPromise(i,delay)
  }
})