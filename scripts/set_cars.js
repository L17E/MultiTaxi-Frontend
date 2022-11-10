function updatePrice(class_name, price) {
  const card = document.querySelector("." + class_name + "-price");
  card.textContent = price + "₽";
}

function updateTime(class_name, minutes) {
  const card = document.querySelector("." + class_name + "-time");
  card.textContent = "~" + minutes + " минут";
}

function setBetaCars() {
  updatePrice("economy", 390);
  updateTime("economy", 2);

  updatePrice("comfort", 520);
  updateTime("comfort", 1.5);

  updatePrice("business", 792);
  updateTime("business", 2);
}

setBetaCars();

const economy = document.getElementById("economy-select");
const comfort = document.getElementById("comfort-select");
const business = document.getElementById("business-select");

function selectCar(button) {
  button.innerHTML = "Выбрано";
  button.style.setProperty("background-color", "none");
}

function unselectCar(button) {}

function onCarSelect(e) {
  const button = e.target;
  selectCar(button);
  /* TODO */
}

economy.addEventListener("click", onCarSelect);
comfort.addEventListener("click", onCarSelect);
business.addEventListener("click", onCarSelect);