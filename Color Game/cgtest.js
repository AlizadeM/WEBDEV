var numSquares = 6;
var colors = generateRandomColors(numSquares);
var header = document.querySelector("h1");
var rgbBar = document.getElementById("rgbB");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message"); 
var NewColors = document.querySelector("#newC");
var mode = document.querySelectorAll(".mode");
var pickedColor = pickColor();


rgbBar.textContent = pickedColor;

            //Mode Buttons (NEW)

        for(var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent == "Easy"){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
           
            reset();
         });
    

        }
            //Reset button 
function reset(){
      colors = generateRandomColors(numSquares);
            pickedColor = pickColor();
            rgbBar.textContent = pickedColor;

            for(var i = 0; i < squares.length; i++){
                
                if(colors[i]){
                    squares[i].style.display = "block";
                    squares[i].style.backgroundColor = colors[i];
                }
                else{
                    squares[i].style.display = "none";
                }
            }
            messageDisplay.textContent = null;
            header.style.backgroundColor = "steelblue";
            NewColors.textContent = "New Colors"

}
            // BUTTON (OLD CODES)
    
// easyBtn.addEventListener("click", function(){
//     messageDisplay.textContent = null;
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgbBar,textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++ ){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// })


// hardBtn.addEventListener("click", function(){
//     messageDisplay.textContent = null;
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgbBar,textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++ ){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })




// Creating the Squares
for(var i=0; i<squares.length; i++){
    //For giving colors//
    squares[i].style.backgroundColor = colors[i];

        
    // For determining winner or not//
    squares[i].addEventListener("click", function(){
        var clickedColor =  this.style.backgroundColor;
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            header.style.backgroundColor = clickedColor;
            NewColors.textContent = "Play Again";
           
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            
        
            
        }
            
        
    });

    

}

 
            //  Reset Button
        NewColors.addEventListener("click", function(){
            
           reset();
            
        })

        // Color changer
function changeColor (color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;

    }
}
        //selects a random winner color
function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
} 

        //creates array of colors
function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num ; i++){
       arr.push(randomColor());

    }

    return arr;

}

    

        //creates the rgb values in the array
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
    // return "rgb(" +r + "," +g + "," + b + ")";
}