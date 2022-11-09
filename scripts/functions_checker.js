const bicycle = document.getElementsByName("bicycle")[0];
const animal = document.getElementsByName("animal")[0];
const winter_equipment = document.getElementsByName("winter_equipment")[0];
const guide_dog = document.getElementsByName("guide_dog")[0];
const child_seat = document.getElementsByName("child_seat")[0];

function onCheck(e) {
  updateCheckboxes(e.target);

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

function updateCheckboxes(checkbox) {
  if(checkbox.checked) {
    localStorage.setItem("checkbox_" + checkbox.name, "on")
  } else if (!checkbox.checked) {
    localStorage.removeItem("checkbox_" + checkbox.name)
  }
}

bicycle.addEventListener("click", onCheck);
animal.addEventListener("click", onCheck);
winter_equipment.addEventListener("click", onCheck);
guide_dog.addEventListener("click", onCheck);
child_seat.addEventListener("click", onCheck);
