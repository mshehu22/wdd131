// -------------------------------------
// Grill & Masa Abuja
// menu.js
// -------------------------------------

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


const menuContainer = document.querySelector("#menuContainer");

async function loadMenu() {

    try {

        const response = await fetch("data/menu.json");

        const menu = await response.json();

        displayMenu(menu);

    } catch (error) {

        menuContainer.innerHTML = `
            <p>Sorry, the menu could not be loaded.</p>
        `;

        console.error(error);

    }

}


function displayMenu(menuItems) {

    menuContainer.innerHTML = "";

    menuItems.forEach(item => {

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <p><strong>${item.price}</strong></p>

            <p>${item.category}</p>

        `;

        menuContainer.appendChild(card);

    });

}

loadMenu();