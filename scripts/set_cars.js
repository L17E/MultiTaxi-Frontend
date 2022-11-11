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

setBetaCars(); /* TODO remove */

const economy = document.getElementById("economy-select");
const comfort = document.getElementById("comfort-select");
const business = document.getElementById("business-select");

function selectCar(button) {
  button.innerHTML = "Выбрано";
  button.style.background = "none";
  localStorage.setItem("class", button.id.replace("-select", ""));
}

function unselectCar(button) {
  const style = getComputedStyle(document.body);
  button.innerHTML = "Выбрать";
  button.style.background = style.getPropertyValue("--button-color");
  localStorage.removeItem("class");
}

function onCarSelect(e) {
  const button = e.target;
  const class_name = button.id.replace("-select", "");
  const latest_class = localStorage.getItem("class");

  if(class_name === latest_class) return

  const latest_class_button = document.getElementById(latest_class + "-select");
  if(latest_class_button) {
    unselectCar(latest_class_button);
  }

  selectCar(button);
}

function latestCarSelect() {
  const name = localStorage.getItem("class");
  const button = document.getElementById(name + "-select");
  if(button) {
    selectCar(button);
  }
}

latestCarSelect();

economy.addEventListener("click", onCarSelect);
comfort.addEventListener("click", onCarSelect);
business.addEventListener("click", onCarSelect);