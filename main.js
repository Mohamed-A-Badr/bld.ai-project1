const cardContent = [
  {
    img: "Learn-Python-The-Complete-Python-Programming-Course.webp",
    title: "Learn Python: The Complete Python Programming Course",
    author: "Avinash Jain, The Codex",
    total_rate: 4.4,
    no_of_ratings: "(2,845)",
    newPrice: "E£269.99",
    discount: "E£679.99",
  },
  {
    img: "python Data Analysis.jpeg",
    title: "Learning Python for Data Analysis and Visualization",
    author: "Jose Portilla",
    total_rate: 4.4,
    no_of_ratings: "(17,956)",
    newPrice: "E£269.99",
    discount: "E£1,599.99",
  },
  {
    img: "image_750x_5ec233f983dc8.webp",
    title: "Python Beyond the Basics - Object-Oriented Programming",
    author: "Infinite Skills",
    total_rate: 4.4,
    no_of_ratings: "(2,845)",
    newPrice: "E£269.99",
    discount: "E£679.99",
  },
  {
    img: "Learn-Python-The-Complete-Python-Programming-Course.webp",
    title: "Learn Python: The Complete Python Programming Course",
    author: "Avinash Jain, The Codex",
    total_rate: 4.4,
    no_of_ratings: "(2,929)",
    newPrice: "E£269.99",
    discount: "E£519.99",
  },
  {
    img: "download.jfif",
    title: "Python for Beginners - Learn Programming from scratch",
    author: "Edwin Diaz, Coding Faculty Solutions",
    total_rate: 4.4,
    no_of_ratings: "(1,770)",
    newPrice: "E£269.99",
    discount: "E£679.99",
  },
  {
    img: "auto.jfif",
    title: "Automate the Boring Stuff with Python Programming",
    author: "AI Sweigart",
    total_rate: 4.7,
    no_of_ratings: "(101,639)",
    newPrice: "E£319.99",
    discount: "E£519.99",
  },
];

let dynamicCards = document.querySelector(".courses-container");
for (let i = 0; i < cardContent.length; i++) {
  let fetch = document.querySelector(".courses-container").innerHTML;
  dynamicCards.innerHTML =
    `<div class="card">
    <div class="card-image">
      <img src="assets/${cardContent[i].img}" alt="python course cover ">
    </div>
    <div class="card-title">
      <h3>${cardContent[i].title}</h3>
      <p>${cardContent[i].author}</p>
      <div class="rating">
        <span class="total-rate">${cardContent[i].total_rate}</span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star-half-full"></span>
        <span class="no-of-ratings">${cardContent[i].no_of_ratings}</span>
      </div>
    </div>
    <div class="course-price">
      <p class="new-price">${cardContent[i].newPrice}</p>
      <p class="discount">${cardContent[i].discount}</p>
    </div>
  </div>` + fetch;
}
