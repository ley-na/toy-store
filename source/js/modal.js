var cart = document.querySelectorAll(".js-cart-btn");
var modal = document.querySelector(".product-modal");

for (var i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("product-modal--show");
  }
)};

function closeModal(evt) {
  if (evt.target === modal || evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("product-modal--show")) {
      modal.classList.remove("product-modal--show");
    }
  }
};

window.addEventListener("keydown", closeModal);

modal.addEventListener("click", closeModal);
