const requestUrl = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector(".cards");

function displayProphets(prophet){
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const portrait = document.createElement("img");
    const birthDate = document.createElement("p");
    const birthPlace = document.createElement("p");

    //setting name, attributes, birthDate and place

    name.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} `);
    portrait.setAttribute("loading", "lazy");

    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`

    //
    card.className = "card";
    card.appendChild(name);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);


    cards.appendChild(card);


    
}


fetch(requestUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: " + response.status);
    }
  })
  .then((data) => {
    const prophets = data["prophets"];
    prophets.forEach(displayProphets);
  })
  .catch((error) => {
    console.log(error); // Handle the error appropriately
  });
