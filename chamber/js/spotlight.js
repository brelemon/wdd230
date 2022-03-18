const requestURL = "https://brelemon.github.io/wdd230/chamber/data.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((json) => {
    const businesses = json.businesses;
    const usedBusinesses = [];
    for (let i = 1; i <= 3; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * businesses.length);
      } while (usedBusinesses.includes(randomIndex));
      usedBusinesses.push(randomIndex);

      const business = businesses[randomIndex];
      document.querySelector(`#spotlightTitle` + i).textContent = business.name;
      document.querySelector(`#spotlightImage` + i).src = business.imageurl;
      document.querySelector(`#spotlightDescription` + i).textContent =
        business.address;
      document.querySelector(`#spotlightEmail` + i).textContent =
        business.website;
      document.querySelector(`#spotlightPhone` + i).textContent =
        business.phone;
    }
  });
