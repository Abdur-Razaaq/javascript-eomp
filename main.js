let products = [];

fetch("https://infinite-bastion-55594.herokuapp.com/show-products/").then(
  (response) =>
    response.json().then((data) => {
      //   console.log(data.data);
      items = data.data;
      items.forEach((item) => {
        products.push({
          item_id: item[0],
          name: item[1],
          discription: item[2],
          price: item[3],
          category: item[4],
        });
      });
      //   console.log(products);
    })
);

// console.log(products);

// //fetching for product page
// let projects = [
//   {
//     imgURL: "https://picsum.photos/300?random=1",
//     imgALT: "Product 1",
//     title: "My Project Title 1",
//     techStack: "HTML/CSS",
//     description: "lorem ipsum hello world",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=2",
//     imgALT: "My Project 2",
//     title: "My Project Title 2",
//     techStack: "Python",
//     description: "lorem ipsum Python",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=3",
//     imgALT: "My Project 3",
//     title: "My Project Title 45",
//     techStack: "JavaScript",
//     description: "lorem ipsum JS",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=23",
//     imgALT: "This is cool",
//     title: "Some Title",
//     techStack: "JavaScript",
//     description: "I made this",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=4",
//     imgALT: "My Project 4",
//     title: "My Project Title 4",
//     techStack: "HTML/CSS",
//     description: "lorem ipsum",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=5",
//     imgALT: "My Project 5",
//     title: "My Project Title 5",
//     techStack: "Python",
//     description: "This is dynamic",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=6",
//     imgALT: "My Project 6",
//     title: "My Project Title 6",
//     techStack: "HTML/CSS",
//     description: "I just created this",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=7",
//     imgALT: "My Project 7",
//     title: "My Project Title 7",
//     techStack: "JavaScript",
//     description: "Pokedex",
//     githubURL: "#",
//     liveProjectURL: "#",
//   },
// ];

function createCard(card) {
  let createdCard = `<div class="project-card" category=${card.category}>
      <h4>${card.name}</h4>
      <h6>${card.item_id}</h6>
      <p>${card.description}</p>
      <p>${card.price}</p>
      <p>${card.category}</p>
    </div>
  `;
  return createdCard;
}

function renderCards() {
  let productContainer = document.querySelector(".product-container");
  for (product of products) {
    let card = createCard(product);
    productContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("product-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[category='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}

fetch("https://infinite-bastion-55594.herokuapp.com/show-products/").then(
  (response) =>
    response.json().then((data) => {
      console.log(data.data);
    })
);
