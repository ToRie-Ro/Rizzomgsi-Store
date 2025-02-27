let playerMoney = 0;

const moneyDisplay = document.getElementById('player-money');
const notification = document.getElementById('notification');

// Update money display
function updateMoney() {
  moneyDisplay.textContent = playerMoney;
}

// Handle buying an item
function buyItem(itemPrice) {
  if (playerMoney >= itemPrice) {
    playerMoney -= itemPrice;
    updateMoney();
    notification.textContent = "You successfully bought an item!";
    notification.style.color = "green";
  } else {
    notification.textContent = "Not enough money!";
    notification.style.color = "red";
  }
}

// Add event listeners to all "Buy" buttons
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const itemPrice = parseInt(event.target.parentElement.getAttribute('data-price'));
    buyItem(itemPrice);
  });
});

updateMoney();
