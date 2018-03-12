//Variables//
//This grabs the id of the first modal and setis it equal to modal
var modal = document.getElementById("modal");
//This grabs the button with the id "change"
//This allows us to call a funtion with a click later
var changeBtn = document.getElementById("change");
//This grabs the preview
var preveiw = document.getElementById("preview");

//Funcitons//

//Function to set Preveiw Boxes//

//This sets the Preveiw Box color in the modal to the currently selected color
function preveiw() {
    //This get the currently selected color's value and sets it equal to color
    color = document.querySelector('input[name="colors"]:checked').value;
    //Log what color
    console.log("The color is " + color);
    //Change preview color
    preveiw.style.background = color;
}

//Funciton to change Color//

//Change the Color
function changeColor() {
    //Log what the color was changed to 
    conole.log("The color is: " + color);
    //Change the background color
    document.body.style.background = color;
}

//Function to open modal//

//Open color changing modal
changeBtn.onclick = function() {
    modal.style.display = "grid";
}

//Funciton to close modal//

//When the user clicks on the close button in modal it close it
function Close() {
    //Close modal
    modal.style.display = "none";
    //Reset Preview
    preveiw.style.background = "#1a1a1a";
    //Unles any currently selected color
    document.querySelector('input[name="colors"]:checked').checked = false;
}

//Close modal on window click
windo.onclick = function(event) {
    if (event.target == modal) {
        //Close modal
        modal.style.display = "none";
        //Reset Preview 
        preview.style.background = "#1a1a1a";
        //Unselect any currently selected color
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
}