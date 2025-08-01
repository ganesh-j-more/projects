let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true // playerX, playerO

const winPattern= [
  [0,1,2],
  [0,5,8],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () =>{
  turnO = true;
  enableBoxes();
}


boxes.forEach((box) => {
  box.addEventListener("click",() =>{
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O"
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;

    }
    box.disabled = true;

    checkWinner();

});
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  };
};

  const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  };

};
  
 const showWinner = (Winner) =>{
  msg.innerText = `Congratulation,Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val === pos2val && pos2val === pos3val){
        console.log("Winner",pos1val);
        showWinner(pos1val);
      }
    }
  }
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

