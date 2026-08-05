// -------------------------------
// Grill & Masa Abuja
// WDD 131 Final Project
// main.js
// -------------------------------

// Mobile Navigation
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


// -------------------------------
// Featured Specials
// -------------------------------

const specials = [
    {
        name: "Traditional Masa",
        price: "₦500"
    },
    {
        name: "Whole Grilled Chicken",
        price: "₦8,000"
    },
    {
        name: "Pepper Soup",
        price: "₦2,000"
    },
    {
        name: "Suya",
        price: "₦2,500"
    }
];

function displaySpecial() {

    const specialContainer = document.querySelector("#special");

    if (!specialContainer) return;

    const today =
        specials[Math.floor(Math.random() * specials.length)];

    specialContainer.innerHTML = `
        <h3>Today's Special</h3>
        <p><strong>${today.name}</strong></p>
        <p>Only ${today.price}</p>
    `;
}

displaySpecial();


// -------------------------------
// Last Visit (localStorage)
// -------------------------------

function showLastVisit() {

    const visitContainer =
        document.querySelector("#lastVisit");

    if (!visitContainer) return;

    const lastVisit =
        localStorage.getItem("lastVisit");

    if (lastVisit) {

        visitContainer.textContent =
            `Welcome back! Your last visit was ${lastVisit}.`;

    } else {

        visitContainer.textContent =
            "Welcome! This is your first visit.";

    }

    const today =
        new Date().toLocaleDateString();

    localStorage.setItem("lastVisit", today);

}

showLastVisit();


// -------------------------------
// Opening Status
// -------------------------------

const restaurant = {
    opens: 7,
    closes: 22
};

function checkOpeningHours() {

    const status =
        document.querySelector("#status");

    if (!status) return;

    const currentHour =
        new Date().getHours();

    if (
        currentHour >= restaurant.opens &&
        currentHour < restaurant.closes
    ) {

        status.textContent =
            "🟢 We are currently OPEN.";

    } else {

        status.textContent =
            "🔴 Sorry, we are currently CLOSED.";

    }

}

checkOpeningHours();


// -------------------------------
// Console Message
// -------------------------------

console.log("Grill & Masa Abuja website loaded successfully.");