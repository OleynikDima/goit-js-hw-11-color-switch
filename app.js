// const refs ={
//     startBtn:document.querySelector('button[data-action="star-timer"]'),
//     stopBtn:document.querySelector('button[data-action="stop-timer"]'),
//     clockFace:document.querySelector('.js-clockface'),
// }


// const timer = {
//     isActive: false,
//     start(){
//         if(this.isActive){
//             return;
//         }
//         this.isActive = true;
//         const startTime = Date.now();

//         this.timerId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;

//             updateClockface(deltaTime);
//         }, 1000);
    
//     },
//     stop(){
//         clearInterval(this.timerId)
//         this.isActive = false;
//         updateClockface(0);
//     },
// };

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));



// function  updateClockface(time){
//     const date = new Date(time);
//     const hours = pad(date.getUTCHours());
//     const mins = pad(date.getMinutes());
//     const secs = pad(date.getSeconds());
//     refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
// }

// function pad (value){
//     return String(value).padStart(2, '0');
// }

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       /*
//        * Если какое-то условие выполняется, то есть все хорошо,
//        * вызываем resolve и получает данные. Условие зависит от задачи.
//        */
//       resolve('Data passed into resolve function :)');
  
//       // Если что-то не так, вызваем reject и передаем ошибку
//       // reject("Error passed into reject function :(")
//     }, 2000);
//   });
  
//   // Выполнится мгновенно
//   console.log('BEFORE promise.then');
  
//   const onResolve = data => {
//     console.log('INSIDE promise.then - onResolve');
//     console.log(data); // "Data passed into resolve function :)"
//   };
  
//   const onReject = error => {
//     console.log('INSIDE promise.then - onReject');
//     console.log(error); // "Error passed into reject function :("
//   };
  
//   promise.then(
//     // будет вызвана через 2 секунды, если обещание выполнится успешно
//     onResolve,
//     // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//     onReject,
//   );
  
//   // Выполнится мгновенно
//   console.log('AFTER promise.then');
  


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('success!');
      
//     }, 2000);
//   });
  
  


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Если все ок, то вызывается resolve и передаем данные
//       resolve('Data passed into resolve function :)');
  
//       // Если что-то не так, вызваем reject и передаем ошибку
//       reject("Error passed into reject function :(")
//     }, 2000);
//   });
  
//   // Выполнится мгновенно
//   console.log('BEFORE promise.then');
  
//   promise.then(
//     // Будет вызвана через 2 секунды, если обещание выполнится успешно
//     data => {
//       console.log('INSIDE promise.then - onResolve');
//       console.log(data); // "Data passed into resolve function :)"
//     },
//     // Будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//     error => {
//       console.log('INSIDE promise.then - onReject');
//       console.log(error); // "Error passed into reject function :("
//     },
//   );
  
//   // Выполнится мгновенно
//   console.log('AFTER promise.then');
  
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(15);
//     }, 2000);
//   });
  
//   promise
//     .then(value => {
//             console.log(value); // 5
//             return value * 2;
//     })
//     .then(value => {
//       console.log(value); // 10
//       return value * 3;
//     })
//     .then(value => {
//       console.log(value); // 30
//     })
//     .catch(error => {
//       console.log(error);
//     });
  

// const getMessage = function() {
//     const input = prompt('Введите сообщение');
  
//     return Promise.resolve(input);
//   };
  
//   const logger = message => console.log(message);
  
//   getMessage().then(message => logger(message));
  
//   // Или еще короче
//   getMessage().then(logger);
  


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

const maxNum = colors.length;
let minNum;
let timerId = null;

// Если есть хотябы один цвет - значит min = 1, а max = длине массива
if (maxNum === 0){
  console.log('Массив фон-цвета пуст');
}else{
  minNum = 1;
}


btnStart.addEventListener('click',  runColor);
btnStop.addEventListener('click', stopColor)

function changeRandomColor(){
  // Рандом index
  const randomIndxColor = randomIntegerFromInterval(minNum,maxNum);

  function  randomIntegerFromInterval(min, max){  
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const indColor = colors[randomIndxColor - 1]
  document.body.style.backgroundColor = `${indColor}`;
  console.log(indColor);
  
}

function runColor(){
  btnStart.disabled = true;
  timerId = setInterval(changeRandomColor,1000); 
  console.log('run'); 
}

function stopColor(){
  btnStart.disabled = false;
  clearInterval(timerId);
  console.log('stop');
}
