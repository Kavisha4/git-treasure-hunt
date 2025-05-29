const cartItemsContainer = document.getElementById("cart-items");

const initialItems = [
  "T-shirt",
  "Sneakers",
  "Backpack",
  "Smart Watch",
  "Sunglasses"
];

// Render initial items
initialItems.forEach(itemName => {
  addCartItem(itemName);
});

function addCartItem(name) {
  const item = document.createElement("div");
  item.className = "cart-item";
  item.innerHTML = `
    <span>${name}</span>
    <button class="btn remove-btn">Remove</button>
  `;

  item.querySelector(".remove-btn").addEventListener("click", () => {
    item.style.animation = "fadeOut 0.4s forwards";
    setTimeout(() => item.remove(), 400);
  });

  cartItemsContainer.appendChild(item);
}

// Optional: remove this if you don’t want dynamic additions
document.getElementById("addItemBtn").addEventListener("click", () => {
  const newItemName = prompt("Enter item name:");
  if (newItemName) {
    addCartItem(newItemName);
  }
});
