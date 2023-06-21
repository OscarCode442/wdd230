


// Fetch the JSON data
fetch('./JSON/data.json')
  .then(response => response.json())
  .then(data => {
    // Call a function to populate the directory with the fetched data
    populateDirectory(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Function to populate the directory with data
function populateDirectory(data) {
  const directory = document.querySelector('.directory');

  // Iterate through each business in the data
  data.forEach(business => {
    // Create a card element for each business
    const card = document.createElement('div');
    card.classList.add('card');

    // Create the card content using the business data
    const logo = document.createElement('img');
    logo.src = './images/' + business.logo; // Update the logo path
    logo.alt = business.name;
    card.appendChild(logo);

    const name = document.createElement('h2');
    name.textContent = business.name;
    card.appendChild(name);

    const address = document.createElement('p');
    address.textContent = business.address;
    card.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);

    const website = document.createElement('p');
    const websiteLink = document.createElement('a');
    websiteLink.href = business.url; // Use the 'url' property for the website link
    websiteLink.textContent = 'Visit Website';
    website.appendChild(websiteLink);
    card.appendChild(website);

    // Append the card to the directory
    directory.appendChild(card);
  });
}
