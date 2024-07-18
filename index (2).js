document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => {
        const productsDiv = document.getElementById('products');
        data.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <a href="product.html?id=${product.id}">View Product</a>
          `;
          productsDiv.appendChild(productDiv);
        });
      });
  });