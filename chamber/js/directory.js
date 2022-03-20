const requestURL = 'https://brelemon.github.io/wdd230/chamber/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {  // Create elements to add to the documentlet card = document.createElement('section');
  let card = document.createElement('section');

  //images
  let image = document.createElement('img');
  image.src = business.imageurl;
  image.setAttribute('alt', business.order);
  card.appendChild(image);

  //business name
  let h2 = document.createElement('h2');
  h2.textContent = `${business.name}`;
  card.appendChild(h2);

  //p is the address
  let p1 = document.createElement('p');
  p1.textContent = `${business.address}`;
  card.appendChild(p1);

  //p is the phone number
  let p2 = document.createElement('p');
  p2.textContent = `${business.phone}`;
  card.appendChild(p2);

   //p is the website URL
   let p3 = document.createElement('p');
   p3.textContent = `${business.website}`;
   card.appendChild(p3);

  


  document.querySelector('div.cards').appendChild(card);
}


// buttons
const cards = document.querySelector('.cards');
const listbtn = document.querySelector("#list-btn");
const gridbtn = document.querySelector("#grid-btn");


function listView(){
  cards.classList.replace("grid-view", "list-view");
  gridbtn.className = gridbtn.className.replace(" active-btn", " inactive-btn");
  listbtn.className = listbtn.className.replace(" inactive-btn", " active-btn");
}

function gridView(){
  cards.classList.replace("list-view", "grid-view");
  listbtn.className = listbtn.className.replace(" active-btn", " inactive-btn");
  gridbtn.className = gridbtn.className.replace(" inactive-btn", " active-btn");
}



