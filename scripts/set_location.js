function onAddressSelect(event) {
  let address = event.target;
  while(!address?.classList.contains("address")) {
    address = address.parentElement;
  }
  clearAddresses();

  const parent = address.getAttribute("data-parent");
  const name = address.getElementsByTagName("b")[0].innerHTML;
  const text_address = address.getElementsByTagName("small")[0].innerHTML;

  const input = document.querySelector(".input-" + parent)
  input.value = "";
  input.placeholder = text_address;

  localStorage.setItem(parent + "name", name);
  localStorage.setItem(parent + "address", text_address);
  localStorage.setItem(parent + "latitude", address.getAttribute("data-latitude"));
  localStorage.setItem(parent + "longitude", address.getAttribute("data-longitude"));
}

function createAddress(name, address, latitude, longitude, parent) {
  if(parent !== "from" && parent !== "to") {
    throw new SyntaxError("Parent entered incorrectly")
  }

  const article = document.createElement('article');
  article.setAttribute('class', 'address');
  article.setAttribute('data-latitude', latitude);
  article.setAttribute('data-longitude', longitude);
  article.setAttribute('data-parent', parent);

  const title = document.createElement('b');
  const description = document.createElement('small');
  title.innerHTML = name;
  description.innerHTML = address;

  const button = document.createElement('button');
  button.setAttribute('class', 'address__button text_box');
  button.setAttribute('type', 'button');
  button.appendChild(title);
  button.appendChild(description);

  const addresses = document.querySelector('.addresses');
  article.appendChild(button);
  addresses.appendChild(article);
  button.addEventListener("click", onAddressSelect);
}

function clearAddresses() {
  const addresses = document.querySelector('.addresses').children;
  while(addresses.length > 0) {
    addresses[0].remove();
  }
}

function searchAddresses(event) {
  const address = event.target.value;
  if(!address) return

  clearAddresses();
  for(let i = 0; i < 5; i++) {
    createAddress(address, "Адрес " + i, "123", "123", event.target.name)
  }
  document.querySelector('.addresses').children.length = 0;
}

const from_input = document.querySelector(".input-from");
const to_input = document.querySelector(".input-to");

from_input.addEventListener("input", searchAddresses);
to_input.addEventListener("input", searchAddresses);

function onReady() {
  const menu = document.querySelector(".selection-address-menu");
  hideOverlay(menu);
}

const ready_button = document.querySelector(".selection-address-menu__submit");
ready_button.addEventListener("click", onReady);
