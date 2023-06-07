// game constants and variables
let inputDir={x:0,y:0};
const foodSound=new Audio('music/food.mp3')
const gameoverSound=new Audio('music/gameover.mp3')
const moveSound=new Audio('music/move.mp3')
const musicSound=new Audio('music/music.mp3')
let speed=1;
let score=0
let hiscoreval=0
let LastPaintTime=0;

let snakeArr=[
    {x:13,y:15}
]
let food={x:5,y:10}
// game function
function main(ctime){
    window.requestAnimationFrame(main);
 
  if((ctime-LastPaintTime)/1000<1/speed){
    return;
  }
  LastPaintTime=ctime;
  gameEngine();
}
function isCollide(e ){
  // if snake bump into itself
 for(let i=1;i<snakeArr.length;i++){
if(snakeArr[i].x===snakeArr[0].x&&snakeArr[i].y===snakeArr[0].y){
// snake ka head kisi bhi body element me ghus gaya h
return true
}
 }
 console.log(snakeArr[0].x+","+snakeArr[0].y)
// if snake bump into wall
if(snakeArr[0].x>=18 || snakeArr[0].x<=0 ||snakeArr[0].y>=18 || snakeArr[0].y<=0){
return true
}
  return false
}


function gameEngine(){
  musicSound.play()
    // /updating the snake variable
if(isCollide(snakeArr)){
  gameoverSound.play()
  musicSound.pause()
  inputDir={x:0,y:0};
  alert('Game Over . Press any key to play again!!')
  snakeArr = [{x: 1, y: 1}];
  musicSound.play()
  score=0
  scoreBox.innerHTML='Score :'+score
  hiscoreBox.innerHTML="Hi Score :"+hiscoreval
}
//if you have eaten the food,increment the score and place the food 
if(snakeArr[0].y==food.y&&snakeArr[0].x==food.x){
  foodSound.play()
  score+=1
  scoreBox.innerHTML='Score :'+score
  // speed will increase on basis of score
  if (score % 5 == 0) {
    speed++; // increase the speed by 1 after every 5 points
  }

 hiscore=score
 if(score>hiscoreval){
  hiscoreval=score
  localStorage.setItem("hiscore",JSON.stringify(hiscoreval))

 }
  // snakeArr[0] is the head of the snake
  snakeArr.unshift({x: snakeArr[0].x+inputDir.x ,y: snakeArr[0].y+inputDir.y})
  let a=2
  b=16
  // our grid is 1 to 18 food will regenerate between 2 to 16
  food={x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
}

// moving the snake
for(let i=snakeArr.length-2;i>=0;i--){
 
snakeArr[i+1]={...snakeArr[i]}
// snakeArr[i+1] is the last element
}
snakeArr[0].x+=inputDir.x
snakeArr[0].y+=inputDir.y
// snakeArr.length-2 is second last body element of snake
    // display the snake  
    // board=document.getElementById('board')
board.innerHTML=''
 snakeArr.forEach((e,index)=>{
  snakeElement=document.createElement('div');
  snakeElement.style.gridRowStart=e.y;//y is row
  snakeElement.style.gridColumnStart=e.x;

  if(index==0){
    snakeElement.classList.add('head')
  }
  else{
    snakeElement.classList.add('snake')
  }
  board.appendChild(snakeElement)
 })
    // display the food
  
      foodElement=document.createElement('div');
      foodElement.style.gridRowStart=food.y;//y is row
      foodElement.style.gridColumnStart=food.x;
      foodElement.classList.add('food')
      board.appendChild(foodElement)

}
// main logic stands here
let hiscore=localStorage.getItem("hiscore")
if(hiscore==null){

  localStorage.setItem('hiscore',JSON.stringify(hiscoreval))
}
else{
  hiscoreval=JSON.parse(hiscore)
  hiscoreBox.innerHTML="Hi Score :"+hiscoreval
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
  inputDir={x:0,y:1}//start the game
  moveSound.play()

  switch(e.key){
    case 'ArrowDown':
      console.log(e.key)
      inputDir.x= 0
      inputDir.y=1
      break;
    case 'ArrowUp':
      console.log(e.key)
      inputDir.x=0
      inputDir.y=-1
      break;

        case 'ArrowLeft':
          console.log(e.key)
          inputDir.x=-1
          inputDir.y=0
          break;
          case 'ArrowRight':
            console.log(e.key)
            inputDir.x=1
            inputDir.y=0
            break;
            default :
            break;
  }

})