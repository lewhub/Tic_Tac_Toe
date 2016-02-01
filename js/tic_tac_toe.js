var board = document.getElementById('board')
var reset = document.querySelector('button')
var heading = document.querySelector('h1')
var oMove = false
var total = 0;
var winner;
var gameOver = 0;
for (var i = 0; i < 9; i += 1) {
  board.innerHTML += '<div></div>'
}
var boxes = document.querySelectorAll('div')
for (var j = 0; j < boxes.length; j += 1) {
  boxes[j].addEventListener("click", boxesFn)
}

function boxesFn() {
  if (this.className === '') {
    if (oMove) {
      this.innerHTML += 'O'
      this.className = 'blue-color'
      oMove = false
    } else {
      this.innerHTML += 'X'
      this.className = 'green-color'
      oMove = true
    }
    this.className += ' marked'
    total += 1
    showWinner()
    if (reset.className === '') {
      reset.className = 'reset-appear'
      reset.addEventListener("click", function(){
        reset.className = ''
        for (z = 0; z < boxes.length; z += 1) {
          boxes[z].innerHTML = ''
          boxes[z].className = ''
          oMove = false
          total = 0
          heading.innerHTML = 'Let\'s Play Tic Tac Toe!!!'
          if (gameOver === 1) {
            for (var j = 0; j < boxes.length; j += 1) {
              boxes[j].addEventListener("click", boxesFn)
            }
          }
        }
      })
    }
  } else {
      console.log('already marked!')
    }
}

function showWinner() {
  if (total >= 5) {
    checkForWinner()
    if (winner === 'x') {
      heading.innerHTML = 'X Wins!!!'
      for (var y = 0; y < boxes.length; y += 1) {
        boxes[y].removeEventListener('click', boxesFn)
      }
      gameOver = 1
    } else if (winner === 'o') {
      heading.innerHTML = 'O Wins!!!'
      for (var y = 0; y < boxes.length; y += 1) {
        boxes[y].removeEventListener('click', boxesFn)
      }
      gameOver = 1
    } else if (winner === 'tie') {
      heading.innerHTML = 'It\'s a Tie!!!'
      for (var y = 0; y < boxes.length; y += 1) {
        boxes[y].removeEventListener('click', boxesFn)
      }
      gameOver = 1
    }
  }
}
function checkForWinner() {
  if ((boxes[0].className === 'green-color marked' && boxes[3].className === 'green-color marked' && boxes[6].className === 'green-color marked') ||
     (boxes[1].className === 'green-color marked' && boxes[4].className === 'green-color marked' && boxes[7].className === 'green-color marked') ||
     (boxes[2].className === 'green-color marked' && boxes[5].className === 'green-color marked' && boxes[8].className === 'green-color marked') ||
     (boxes[0].className === 'green-color marked' && boxes[1].className === 'green-color marked' && boxes[2].className === 'green-color marked') ||
     (boxes[3].className === 'green-color marked' && boxes[4].className === 'green-color marked' && boxes[5].className === 'green-color marked') ||
     (boxes[6].className === 'green-color marked' && boxes[7].className === 'green-color marked' && boxes[8].className === 'green-color marked') ||
     (boxes[0].className === 'green-color marked' && boxes[4].className === 'green-color marked' && boxes[8].className === 'green-color marked') ||
     (boxes[2].className === 'green-color marked' && boxes[4].className === 'green-color marked'&& boxes[6].className === 'green-color marked')){
       winner = 'x'
  } else if ((boxes[0].className === 'blue-color marked' && boxes[3].className === 'blue-color marked' && boxes[6].className === 'blue-color marked') ||
            (boxes[1].className === 'blue-color marked' && boxes[4].className === 'blue-color marked' && boxes[7].className === 'blue-color marked') ||
            (boxes[2].className === 'blue-color marked' && boxes[5].className === 'blue-color marked' && boxes[8].className === 'blue-color marked') ||
            (boxes[0].className === 'blue-color marked' && boxes[1].className === 'blue-color marked' && boxes[2].className === 'blue-color marked') ||
            (boxes[3].className === 'blue-color marked' && boxes[4].className === 'blue-color marked' && boxes[5].className === 'blue-color marked') ||
            (boxes[6].className === 'blue-color marked' && boxes[7].className === 'blue-color marked' && boxes[8].className === 'blue-color marked') ||
            (boxes[0].className === 'blue-color marked' && boxes[4].className === 'blue-color marked' && boxes[8].className === 'blue-color marked') ||
            (boxes[2].className === 'blue-color marked' && boxes[4].className === 'blue-color marked' && boxes[6].className === 'blue-color marked')) {
              winner = 'o'
            } else if (total === 9) {
               winner = 'tie'
            } else {
              winner = 'inpr'
            }
}
