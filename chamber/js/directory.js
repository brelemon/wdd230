const requestURL = 'https://brelemon.github.io/wdd230/chamber/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {  // Create elements to add to the documentlet card = document.createElement('section');
  let card = document.createElement('section');

  //images
  let image = document.createElement('img');
  image.src = business.imageurl;
  image.setAttribute('alt', business.order);
  card.appendChild(image);

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