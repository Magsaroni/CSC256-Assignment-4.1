document.addEventListener('DOMContentLoaded', initLinks);
var arrPictures = ["./images/Miles2.jpg" , "./images/SM3.jpg" , "./images/SM4.jpg"];
var thePic = 0;

function initLinks(){
    document.getElementById("aPrevLink").addEventListener("click", processPrevious);
    document.getElementById("aNextLink").addEventListener("click", processNext);

}
function processPrevious(event){
    event.preventDefault();

    if (thePic == 0){
        arrPictures.length - 1
    }
    else{
        thePic = thePic - 1;
    }

    document.getElementById("imgPicture").src = arrPictures[thePic];

    thePic = thePic - 1;
}


function processNext(event){
    event.preventDefault();

    if (thePic == arrPictures.length - 1){
        thePic = 0
    }
    else{
    thePic = thePic + 1;
    }

    document.getElementById("imgPicture").src = arrPictures[thePic];

}