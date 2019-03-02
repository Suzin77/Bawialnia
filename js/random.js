
function random (min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

$(".document").ready(function(){
    $("#randomRoll").on("click", function(){        
        let randomImgList = document.querySelectorAll(".randomImg");
        for(let i = 0; i<randomImgList.length; i++){
            randomImgList[i].setAttribute("src", "img/"+random(1,20)+".png");
        }        
    });
});





