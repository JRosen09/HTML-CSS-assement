//create event listeners that check for a click on each of these buttons

const colorBtn = document.getElementById("color");
const placeBtn = document.getElementById("place");
const ritualBtn = document.getElementById(`ritual`);

const displayClr = () => {
  alert("Purple");
};
const dispplayPlace = () => {
  alert("NewZealand");
};
const displayRitual = () => {
  alert("Eating");
};

colorBtn.addEventListener(`click`, displayClr);
placeBtn.addEventListener(`click`, dispplayPlace);
ritualBtn.addEventListener(`click`, displayRitual);
