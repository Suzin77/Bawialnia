
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

const itemAttack = {
  '1': 20,
  '11' : 10,
  '14': 5
}

const startConfig = {
  cutTime : 1,
  digTime : 4,
  forgeTime: 30,
  enemyHP:100
}

function move(time) {
    let parentElement = $(this)[0].parentElement;
    var elem = parentElement.querySelector("#myBar");
    let procentValue  = parentElement.querySelector(".actualProgrssValue");
    let actualScoreElement = parentElement.querySelector(".totalScore");
    let actualScore = actualScoreElement.textContent;
    var width = 1;
    let actualContext = this;
    
    actualContext.disabled = true;
    var id = setInterval(frame, time*1000/100);
    function frame() {
      if (width >= 100) {
        actualScoreElement.textContent = actualScore*1 + 1;
        actualContext.disabled = false;
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%';
        procentValue.innerHTML = width*1 + ' %'; 
      }
     
    }
  }

function collectFunction(){
  let resourceName = this.id;
  resourceName = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);
  let parentElement = $(this)[0].parentElement;
  console.log(parentElement.className);
  let actualScoreElement = parentElement.querySelector(".totalScore");
  let actualScore = actualScoreElement.textContent;
  let actualInventory = document.querySelector("#inventory"+resourceName).textContent;
  document.querySelector("#inventory"+resourceName).textContent = actualScore*1 + actualInventory*1;
  actualScoreElement.textContent = 0;
  //document.querySelector(".inventoryWood").innerHTML = `<p>Wood <span>${actualScore}</span></p>`;
}

function attack(){
  let imageName = $(this).attr("src");
  let imageNumber = imageName.replace(/\D/g,'');
  //console.log(itemAttack[13]);
  let actualHP = document.querySelector("#monsterBar").textContent;
  if(itemAttack[imageNumber] && actualHP !== "Dead"){
    document.querySelector("#monsterBar").textContent = actualHP - itemAttack[imageNumber];
    actualHP = document.querySelector("#monsterBar").textContent;
    if(actualHP<=0){
      document.querySelector("#monsterBar").textContent = "Dead";
    }
  }      
  let randomImgList = document.querySelectorAll(".randomImg");
    for(let i = 0; i<randomImgList.length; i++){
        randomImgList[i].setAttribute("src", "img/"+random(1,20)+".png");
    }        
}
$(document).on("click", ".collect", collectFunction);
$(document).on("click", ".randomImg", attack);
//$(document).on("click", ".work",function (){move.call(this, startConfig.cutTime)});

document.getElementById("reset").addEventListener("click", function(){
  document.querySelector("#monsterBar").textContent = startConfig.enemyHP;
}); 

document.querySelector("#cut").addEventListener("click", function (){move.call(this, startConfig.cutTime)}, false);
document.querySelector("#dig").addEventListener("click", function (){move.call(this, startConfig.digTime)}, false);
document.querySelector("#forge").addEventListener("click", function (){move.call(this, startConfig.forgeTime)}, false);

//document.querySelector(".collect").addEventListener("click", collectFunction, false);

//$("#progressbar").progressbar({value: 57});






