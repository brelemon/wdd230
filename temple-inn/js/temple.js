const requestURL = 'https://brelemon.github.io/wdd230/temple-inn/temple.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displaytemples);
});

function displaytemples(business) {  // Create elements to add to the documentlet card = document.createElement('section');
  let card = document.createElement('section');

  //images
  let image = document.createElement('img');
  image.src = temple.imageurl;
  image.setAttribute('alt', temple.order);
  card.appendChild(image);

  //temple name
  let h2 = document.createElement('h2');
  h2.textContent = `${temple.name}`;
  card.appendChild(h2);

  //p is the address
  let p1 = document.createElement('p');
  p1.textContent = `${temple.address}`;
  card.appendChild(p1);

  //p is the phone number
  let p2 = document.createElement('p');
  p2.textContent = `${temple.phone}`;
  card.appendChild(p2);

   //p are the services
   let p3 = document.createElement('p');
   p3.textContent = `${temple.services}`;
   card.appendChild(p3);

   //p is the history
   let p4 = document.createElement('p');
   p4.textContent = `${temple.history}`;
   card.appendChild(p4);

   //p are the ordinaces
   let p5 = document.createElement('p');
   p5.textContent = `${temple.ordinace}`;
   card.appendChild(p5);

   //p is the session schedule
   let p6 = document.createElement('p');
   p6.textContent = `${temple.session}`;
   card.appendChild(p6);

   //p is the closure schedule
   let p7 = document.createElement('p');
   p7.textContent = `${temple.closure}`;
   card.appendChild(p7);
  


  document.querySelector('div.cards').appendChild(card);
}






