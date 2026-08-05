// ----------------------------------
// Grill & Masa Abuja
// contact.js
// ----------------------------------

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

const orderForm = document.querySelector("#orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const order = {
            fullname: document.querySelector("#fullname").value,
            phone: document.querySelector("#phone").value,
            email: document.querySelector("#email").value,
            meal: document.querySelector("#meal").value,
            quantity: document.querySelector("#quantity").value,
            message: document.querySelector("#message").value
        };

        localStorage.setItem(
            "lastOrder",
            JSON.stringify(order)
        );

        alert(`Thank you, ${order.fullname}! Your order has been received.`);

        orderForm.reset();

    });

}

const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));

if (savedOrder) {

    document.querySelector("#fullname").value = savedOrder.fullname;
    document.querySelector("#phone").value = savedOrder.phone;
    document.querySelector("#email").value = savedOrder.email;
    document.querySelector("#meal").value = savedOrder.meal;
    document.querySelector("#quantity").value = savedOrder.quantity;
    document.querySelector("#message").value = savedOrder.message;

}

console.log("Contact page loaded.");