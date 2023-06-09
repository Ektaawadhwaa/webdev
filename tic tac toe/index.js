console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    
    return turn === "X"? "0": "X"
  
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let x=window.matchMedia('(max-width:900px)')
    f(x)
  // Add a listener for the resize event to execute the function again
//   (if window getting resizing without being refreshed then)
  window.addEventListener('resize', ()=>{
    x=window.matchMedia('(max-width:900px)')
    f(x)
})
    function f(x){
        if(x.matches){

            let wins = [
                [0, 1, 2, 12, 9, 0],
                [3, 4, 5, 13, 29, 0],
                [6, 7, 8, 13, 50, 0],
                [0, 3, 6, -11, 30, 90],
                [1, 4, 7, 12, 29, 90],
                [2, 5, 8, 36, 29, 90],
                [0, 4, 8, 12, 29, 45],
                [2, 4, 6, 13, 29, 135],
            ]
            wins.forEach(function(e){
                if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
                    document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                    isgameover = true
                    
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px'
                
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width='44vw'
                console.log('if part')
                }
            })
             
               
        }
        else{
     
            let wins = [
                [0, 1, 2, 2, 5, 0],
                [3, 4, 5, 3, 15, 0],
                [6, 7, 8, 3, 25, 0],
                [0, 3, 6, -8, 15, 90],
                [1, 4, 7, 3, 15, 90],
                [2, 5, 8, 13, 15, 90],
                [0, 4, 8, 3, 15, 45],
                [2, 4, 6, 2, 15, 135],
            ]
            wins.forEach(e =>{
                if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
                    document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                    isgameover = true
                    music.pause()
                    gameover.play()
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='348px'
                    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                    document.querySelector(".line").style.width='25vw'
                
                       
                }
                              
    })
console.log("else part")

    }

    
 

}
}
if(isgameover){
    gameover.play()
    music.pause()
    console.log("game over "+ isgameover)
}
// Game Logic
 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            music.pause()
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
                music.play()
            }
          
        }
    })
})
music.pause()
let Reset=document.getElementById('reset')
Reset.addEventListener('click',function(){
Array.from(boxes).forEach(function(e){
let boxtext=e.querySelector('.boxtext')
boxtext.innerText=''
})
turn="X"
isgameover=false
document.getElementsByClassName('info')[0].innerText="Turn for "+ turn
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px'
document.querySelector(".line").style.width='0px'
 music.play()
 
 

    })
 


   