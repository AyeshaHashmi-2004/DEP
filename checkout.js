document.getElementById('checkout-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const order = {
      customer_name: document.getElementById('name').value,
      customer_email: document.getElementById('email').value,
      product_id: 1,  // Replace with the actual product ID
      quantity: 1,    // Replace with the actual quantity
      total_price: 100 // Replace with the actual total price
    };
  
    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Order placed', data);
    });
  });