function createAddress(name, address, latitude, longitude) {
  const article = document.createElement('article');

  article.setAttribute('class', 'address text-box');
  article.setAttribute('data-latitude', latitude);
  article.setAttribute('data-longitude', longitude);

  const title = document.createElement('b');
  title.innerHTML = name;

  const description = document.createElement('small');
  description.innerHTML = address;

  article.appendChild(title);
  article.appendChild(description);

  const addresses = document.querySelector('.addresses');
  addresses.appendChild(article);
}

function clearAddresses() {
  const addresses = document.querySelector('.addresses').children;
  while(addresses.length > 0) {
    console.log(addresses[0], addresses.length)
    addresses[0].remove();
  }
}

function onReady() {
  toggleOverlay(".selection-address-menu");
}

const ready_button = document.querySelector(".selection-address-menu__submit");
ready_button.addEventListener("click", onReady);
