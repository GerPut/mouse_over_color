//Variables
const theDot = document.querySelector('.circle')
const colorChange = document.getElementById('body')
const theSquare = document.querySelector('.maincontain')

//EventListners
theDot.addEventListener('mouseenter', changeColor)
theDot.addEventListener('mouseout', changeAgain)
theSquare.addEventListener('mouseenter', changetheSquare)
theSquare.addEventListener('mouseout', changetheSquareAgain)

//Functions
function changeColor() {
    colorChange.style.backgroundColor = "yellow";
}

function changeAgain() {
    colorChange.style.backgroundColor = "hotpink";
}


function changetheSquare(){
    theSquare.style.backgroundColor = "orange"
}

function changetheSquareAgain(){
    theSquare.style.backgroundColor = "lawngreen"
}