function hideOverlay(overlay) {
  overlay.animate([
    {opacity: 1, visibility: "visible"},
    {opacity: 0, visibility: "hidden"},
  ], 250)

  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
  overlay.classList.remove('open')
}
function showOverlay(overlay) {
  overlay.animate([
    {opacity: 0, visibility: "hidden"},
    {opacity: 1, visibility: "visible"},
  ], 250)

  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
  overlay.classList.add('open');
}

function toggleOverlay(overlay_name) {
  let overlay = overlay_name;
  if(typeof overlay_name === 'string') {
    overlay = document.querySelector(overlay_name);
  }
  overlay.classList.toggle('open');

  if(overlay?.classList.contains('open')) {
    showOverlay(overlay);
  } else {
    hideOverlay(overlay);
  }
}

function addOverlay(button_name, overlay_name, outside_click) {
  const button = document.querySelector(button_name);
  const overlay = document.querySelector(overlay_name);

  if(button && overlay){
    button.addEventListener(
      'click',
      (function(){ toggleOverlay(overlay_name) }),
      false
    );

    if(outside_click) {
      window.addEventListener('click', function (event) {
        const overlay = document.querySelector(overlay_name);
        if (!overlay.contains(event.target) && !button.contains(event.target)
            && overlay.classList.contains("open")) {
          hideOverlay(overlay);
        }
      });
    }
  }
}

addOverlay('.avatar', '.selection-profile-menu', true);
addOverlay('.set-location', '.selection-address-menu');


