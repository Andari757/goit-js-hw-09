
function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
   });
  // randomPromise
  //   .then(result => console.log('resolved', result))
  //   .catch(error => console.log('rejected', error));
}


const form = document.querySelector(".form");
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const delay = parseInt(form.delay.value);
//   const step = parseInt(form.step.value);
//   for (let i = 1; i <= form.amount.value; i++) {
//     createPromise(i, delay + (i - 1) * step) 
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// });

form.addEventListener('submit', async e => {
  e.preventDefault();
  const delay = parseInt(form.delay.value);
  const step = parseInt(form.step.value);
  for (let i = 1; i <= form.amount.value; i++) {
    try {
      const res = await createPromise(i, delay + (i - 1) * step);
      console.log(`✅ Fulfilled promise ${res.position} in ${res.delay}ms`);
    } catch (err) {
      console.log(`❌ Rejected promise ${err.position} in ${err.delay}ms`);
    }
  }
});


// class ProtoPromise {
//   constructor(promiseBody) {
//     this.state = 'rabotaem';
//     this.result = undefined;
//     this.thenHandler = undefined;
//     this.catchHandler = undefined;
//     promiseBody(
//       this.resolve.bind(this),
//       this.reject.bind(this)
//     );
//   }

//   resolve(result) {
//     this.result = result;
//     this.state = 'zaebis';
//     if (this.thenHandler) {
//       this.thenHandler(this.result);
//     }
//   }

//   reject(result) {
//     this.result = result;
//     this.state = 'huita';
//     if (this.catchHandler) {
//       this.catchHandler(this.result);
//     }
//   }

//   then(thenHandler) {
//     this.thenHandler = thenHandler;
//     return this;
//   }

//   catch(catchHandler) {
//     this.catchHandler = catchHandler;
//     return this;
//   }
// }

// const p1 = new ProtoPromise((resolve, reject) => setTimeout(() => resolve(1), 1500));
// const p2 = new ProtoPromise((resolve, reject) => setTimeout(() => resolve(2), 500));
// const p3 = new ProtoPromise((resolve, reject) => setTimeout(() => resolve(3), 3000));

// console.log(p1);
// console.log(p2);
// console.log(p3);

// new ProtoPromise((resolve, reject) => setTimeout(() => reject(1), 1500))
//   .then(result => console.log('zaebis', result))
//   .catch(result => console.log('huita', result));