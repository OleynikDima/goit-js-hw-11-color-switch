

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
