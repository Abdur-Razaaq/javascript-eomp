let products = [];

fetch("https://infinite-bastion-55594.herokuapp.com/show-products/").then(
  (response) =>
    response.json().then((data) => {
      console.log(data.data);
      items = data.data;
      let container = document.querySelector(".product-container");
      container.innerHTML = ``;
      items.forEach((item) => {
        console.log(item);
        container.innerHTML += `
        <div class="item">
          <img src="https://picsum.photos/200/200?random=${item[0]}" alt="" />
          <p class="name">${item[1]}</p>
          <p class="description">${item[2]}</p>
          <p class="price">${item[3]}</p>
          <p class="category">${item[4]}</p>
          <button onclick="showEdit(${item[0]})" class="btn">Edit</button>
          <button onclick="deleteProduct(${item[0]})">Delete</button>
        </div>
        `;
      });
    })
);

function showEdit(id) {
  console.log(id);
}

function deleteProduct(index) {
  console.log(index);

  let delConfirm = confirm("Are you sure you want to delete this product?");
  if (delConfirm) {
    fetch(
      `https://infinite-bastion-55594.herokuapp.com/delete-product/${index}/`
    );
    // createCards();
  }
}
