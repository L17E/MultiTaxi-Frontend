function toggleOverlay(menu) {
  const selection_menu = document.querySelector(menu);
  selection_menu.classList.toggle('open');
  selection_menu.classList.toggle('close');

  if (selection_menu.classList.contains('open') && selection_menu.classList.toggle('close')) {
    selection_menu.classList.toggle('close');
  }
}

function addEvent(button, menu) {
  const btn = document.querySelector(button);
  if(btn){
    btn.addEventListener(
      'click',
      (function(){ toggleOverlay(menu) }),
      false
    );
  }
}

addEvent('.avatar', '.selection-profile-menu');
addEvent('.main__set-location', '.selection-address-menu');
