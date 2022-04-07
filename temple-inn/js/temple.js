const requestURL = 'https://brelemon.github.io/wdd230/temple-inn/temple.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displaytemples);
});

function displaytemples(temple) {  // Create elements to add to the documentlet card = document.createElement('section');
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
  p1.innerHTML = `<span class="templeTitle">Address:</span> ${temple.address}`;
  card.appendChild(p1);

  //p is the phone number
  let p2 = document.createElement('p');
  p2.innerHTML = `<span class="templeTitle">Phone:</span> ${temple.phone}`;
  card.appendChild(p2);

   //p are the services
   let p3 = document.createElement('p');
   p3.innerHTML = `<span class="templeTitle">Services:</span> <ul>`;
   for(let i = 0; i < temple.services.length; i ++) {
    p3.innerHTML+=`<li>${temple.services[i]}</li>`
   }
   p3.innerHTML+= `</ul>`
   card.appendChild(p3);

   //p is the history
   let p4 = document.createElement('p');
   p4.innerHTML = `<span class="templeTitle">History of the Temple:</span> ${temple.history}`;
   card.appendChild(p4);

   //p are the ordinances
   let p5 = document.createElement('p');
   p5.innerHTML = `<span class="templeTitle">Ordinance Schedule:</span> ${temple.ordinance}`;
   card.appendChild(p5);

   //p is the session schedule
   let p6 = document.createElement('p');
   p6.innerHTML = `<span class="templeTitle">Session Schedule:</span> ${temple.session}`;
   card.appendChild(p6);

   //p is the closure schedule
   let p7 = document.createElement('p');
   p7.innerHTML = `<span class="templeTitle">Closures:</span> <ul>`;
   for(let i = 0; i < temple.closure.length; i ++) {
    p7.innerHTML+=`<li>${temple.closure[i]}</li>`
   }
   p7.innerHTML+= `</ul>`
   card.appendChild(p7);

   const localStorageKey = "templeLikes" +temple.name;
   let button = document.createElement('button');
   button.innerHTML = `Like`;
   button.classList.add('likeBtn');
   if (localStorage.getItem(localStorageKey) === 'true') {
     button.classList.add('liked');
   }
   button.onclick = function(){
     const isLiked = localStorage.getItem(localStorageKey) === 'true';
     if (isLiked) {
       button.classList.remove('liked');
    } else {
      button.classList.add('liked');
    }
     localStorage.setItem(localStorageKey, !isLiked);
   }
  card.appendChild(button);


  document.querySelector('div.cards').appendChild(card);
}







