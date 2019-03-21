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

const gameState = {
  session_id: 0,
  player_name: "Suzin",
  wood_amount: 0,
  coal_amount: 0,
  sword_amount: 0
}

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

    $("#loadGameState").click(function(){
      $.ajax({
        type: 'POST',
        url: "app/ajax/loadgame.php",
        data:{
          player_name: gameState.player_name
        },
        success: function(result){
          //console.log(result);
          gameState.wood_amount = result[0].wood_amount;
          gameState.coal_amount = result[0].coal_amount;
          gameState.sword_amount = result[0].sword_amount;
          document.querySelector("#inventoryWood").textContent = gameState.wood_amount;
          document.querySelector("#inventoryCoal").textContent = gameState.coal_amount;
          document.querySelector("#inventorySword").textContent = gameState.sword_amount;
      }});
    });

    $("#saveGameState").click(function(){
      $.ajax({
        type: 'POST',
        url: 'app/ajax/savegame.php',
        data: { 
            player_name: gameState.player_name,
            wood: gameState.wood_amount,
            coal: gameState.coal_amount,
            sword: gameState.sword_amount 
        },
        success: function(msg){
            //console.log(msg);
        }
      });
        
    });
});

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
  //console.log(parentElement.className);
  let actualScoreElement = parentElement.querySelector(".totalScore");
  let actualScore = actualScoreElement.textContent;
  let actualInventory = document.querySelector("#inventory"+resourceName).textContent;
  document.querySelector("#inventory"+resourceName).textContent = actualScore*1 + actualInventory*1;
  gameState[this.id+'_amount'] = actualScore*1 + actualInventory*1;
  actualScoreElement.textContent = 0;
}

function attack(){
  let imageName = $(this).attr("src");
  let imageNumber = imageName.replace(/\D/g,'');
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
document.querySelector("#dig").addEventListener("click", function (){move.call(this, startConfig.digTime)}, false);
document.querySelector("#forge").addEventListener("click", function (){move.call(this, startConfig.forgeTime)}, false);
document.querySelector("#cut").addEventListener("click", function () { move.call(this, startConfig.cutTime); }, false);
//document.querySelector(".collect").addEventListener("click", collectFunction, false);