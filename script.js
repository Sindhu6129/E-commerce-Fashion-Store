// Array to store the cart items
var cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
  var item = items[itemIndex];

  // Check if the item already exists in the cart
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
    // Item already exists in the cart, increment the quantity
    existingItem.quantity++;
  } else {
    // Item does not exist in the cart, add it with a quantity of 1
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  // Update the cart count
  updateCartCount();

  // Update the cart items display
  updateCartItems();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });

  if (itemIndex !== -1) {
    // Item found in the cart, remove it
    cartItems.splice(itemIndex, 1);

    // Update the cart count
    updateCartCount();

    // Update the cart items display
    updateCartItems();
  }
}

// Function to update the cart count
function updateCartCount() {
  var cartCountElement = document.getElementById('cart-count');
  var cartCount = 0;

  cartItems.forEach(function (item) {
    cartCount += item.quantity;
  });

  cartCountElement.textContent = cartCount;
}

// Function to update the cart items display
function updateCartItems() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;

    var itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = ' ₹' + item.price;

    var removeBtnElement = document.createElement('button');
    removeBtnElement.classList.add('remove-btn');
    removeBtnElement.textContent = 'Remove';
    removeBtnElement.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeBtnElement);

    cartItemsElement.appendChild(cartItemElement);
  });
}

// Sample data for items
var items = [
  {
    id: 1,
    name: 'Long Top',
    price: 799,
    image: 'https://tse3.mm.bing.net/th?id=OIP.FLpy1XW4LgWPDrJCSlJGhwHaLH&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Sherwani',
    price: 3050,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1202A380_700_SR_RT_GLBNSW.jpg',
  },
  // Add more items as needed
  {
    id: 3,
    name: 'Kurti',
    price: 589,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 4,
    name: 'Kids frock ',
    price: 1860,
    image: 'https://example.com/shoe4.jpg',
  },
  {
    id: 5,
    name: 'Mens Formal',
    price: 1399,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 6,
    name: 'Night wear',
    price: 310,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 7,
    name: 'Raincoat',
    price: 999,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 8,
    name: 'Shoe 8',
    price: 97.99,
    image: 'https://example.com/shoe3.jpg',
  },
];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(function (button, index) {
  button.addEventListener('click', function () {
    addToCart(index);
  });
});

// for navigating to other html pages
// 1.womens section
document.getElementById('womensBtn').addEventListener('click', function() {
  window.location.href = 'womens.html';
});

// 2.mens section
document.getElementById('menBtn').addEventListener('click', function() {
  window.location.href = 'men.html';
});

// 3.kids section
document.getElementById('kidsBtn').addEventListener('click', function() {
  window.location.href = 'kids.html';
});

// 4.raincoats section
document.getElementById('raincoatsBtn').addEventListener('click', function() {
  window.location.href = 'raincoats.html';
});
