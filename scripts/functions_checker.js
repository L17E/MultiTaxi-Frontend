const bicycle = document.getElementsByName("bicycle")[0];
const animal = document.getElementsByName("animal")[0];
const winter_equipment = document.getElementsByName("winter_equipment")[0];
const guide_dog = document.getElementsByName("guide_dog")[0];
const child_seat = document.getElementsByName("child_seat")[0];

function manageCheckboxes() {
  if(child_seat.checked) {
    winter_equipment.disabled = true;
    bicycle.disabled = true;
  } else if (winter_equipment.checked || bicycle.checked) {
    child_seat.disabled = true;
  } else {
    winter_equipment.disabled = false;
    bicycle.disabled = false;
    child_seat.disabled = false;
  }
}

bicycle.addEventListener("click", manageCheckboxes);
animal.addEventListener("click", manageCheckboxes);
winter_equipment.addEventListener("click", manageCheckboxes);
guide_dog.addEventListener("click", manageCheckboxes);
child_seat.addEventListener("click", manageCheckboxes);
