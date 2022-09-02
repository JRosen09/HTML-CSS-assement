console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Yahoo, its been Submitted!");
}

let form = document.querySelector("#contact");
form.addEventListener("submit", handleSubmit);

//Part 2:
//document.getElementsByTagName("img").mouseover = function () {
//   mouseover(evt);
// };

// function mouseover(evt) {
//   document.getElementsByTagName("img");
//   Text("Duck thinks your GREAT");
//}
//function triggerText() {
//  document.getElementById("image") = "Duck Thinks Your Great";
//}

//addEventListener("mouseover", "");


const picHover = document.getElementById("img")

function hoverTxt = ("Duck thinks your great") 

picHover.addEventListener(`mouseover`, hoverTxt)