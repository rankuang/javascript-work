var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green";
boxes[1].style.backgroundColor = "purple";
boxes[2].style.backgroundColor = "#191919";
boxes[3].style.backgroundColor = "blanchedalmond";



var leftMargin = [0,0,0,0,0];
var topMargin = [0,0,0,0,0];
var moveAmount = 5;
var i = 1;

// for (var i = 0; i<=4; i++) {
//   boxes[i].addEventListener("click", boxClicked_ + i);
// }

// function boxClicked_0() {
//   console.log("Hey, box clicked!")

//   leftMargin[0] += moveAmount;

//   boxes[0].style.marginLeft = leftMargin[0] + "px";
// }

function boxClicked_0() {
  console.log("Hey, 1_box clicked!")

  leftMargin[0] += moveAmount;

  boxes[0].style.marginLeft = leftMargin[0] + "px";

}

function boxClicked_1() {
  console.log("Hey, 2_box clicked!")

  leftMargin[1] += moveAmount;

  boxes[1].style.marginLeft = 2*leftMargin[1] + "px";

}

function boxClicked_2() {
  console.log("Hey, 3_box clicked!")

  leftMargin[2] += moveAmount;

  boxes[2].style.marginLeft = 3*leftMargin[2] + "px";

}

function boxClicked_3() {
  console.log("Hey, 4_box clicked!")
  
  leftMargin[3] += moveAmount;
  
  if (i < 2) {
    i += 1;
  } else {
    boxes[3].style.marginLeft = 4*leftMargin[3] + "px";
    i = 1;
  }
}


function boxClicked_4() {
  console.log("Hey, 5_box clicked!")

  topMargin[4] += moveAmount;

  boxes[4].style.marginTop = 5*topMargin[4] + "px";

}

boxes[0].addEventListener("click", boxClicked_0);
boxes[1].addEventListener("click", boxClicked_1);
boxes[2].addEventListener("click", boxClicked_2);
boxes[3].addEventListener("click", boxClicked_3);
boxes[4].addEventListener("click", boxClicked_4);