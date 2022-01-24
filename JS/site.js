
//pull user entered value from the page------------------------------------------------------------------------------------
function getValues(){
    let userString = document.getElementById("revString").value;

    //calling reverse function
    let revString = reverseAString(userString);

    //calling display function(Displaying it on the screen)
    displayData(revString);
}


//This is our generate data function---------------------------------------------------------------------------------------
function reverseAString(userString){
    
    let revString = "";
    for (let index = userString.length -1 ; index >= 0 ; index--) {
        revString += userString[index];
    }

    return revString;
}


//This is our Display Data function----------------------------------------------------------------------------------------
function displayData(revString){

    document.getElementById("msg").innerHTML = `Your String Reversed is: ${revString}`;
    document.getElementById("alert").classList.remove('d-none');
}