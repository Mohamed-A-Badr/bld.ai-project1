const container = document.querySelector(".courses-container");
export const generateCard = ({
  img,
  title,
  author,
  total_rate,
  no_of_ratings,
  new_Price,
  discount,
}) => {
  //create new div with class name card
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  //create new div to give space for the image
  const cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("card-image");

  //insert the image
  const cardImage = document.createElement("img");
  cardImage.src = img;

  //insert the image in the image container
  cardImageContainer.appendChild(cardImage);
  //insert image container inside card container
  cardContainer.appendChild(cardImageContainer);

  //create a new container for card content
  const cardContentContainer = document.createElement("div");
  cardContentContainer.classList.add("card-title");

  //create h3 contain course name
  const courseTitle = document.createElement("h3");
  const courseTitleText = document.createTextNode(title);
  courseTitle.appendChild(courseTitleText);

  //insert it inside the card container
  cardContentContainer.appendChild(courseTitle);

  //create p contain author name
  const authorName = document.createElement("p");
  const authorNameText = document.createTextNode(author);
  authorName.appendChild(authorNameText);

  //insert it inside the card container
  cardContentContainer.appendChild(authorName);

  //creating a rating container for stars and total rate
  const rateContainer = document.createElement("div");
  rateContainer.classList.add("rating");

  //create a span for the total rate
  const totRate = document.createElement("span");
  totRate.classList.add("total-rate");

  //insert inside the span the value
  const totRateText = document.createTextNode(total_rate);
  totRate.appendChild(totRateText);

  //push the total rate inside the rating container
  rateContainer.appendChild(totRate);

  //creating full Stars and push it inside the rating container
  const fullStarClasses = ["fa", "fa-star", "checked"];
  for (let i = 0; i < 4; i++) {
    const fullStar = document.createElement("span");
    fullStar.classList.add(...fullStarClasses);

    rateContainer.appendChild(fullStar);
  }
  //create and push the half star inside the rating container
  const halfStarClass = ["fa", "fa-star-half-full"];
  const halfStar = document.createElement("span");
  halfStar.classList.add(...halfStarClass);

  rateContainer.appendChild(halfStar);

  //creat a span for number of people gives rate
  const people = document.createElement("span");
  people.classList.add("no-of-ratings");

  /*
    intsert inside the span number of people and push it
    and push it inside the rate container
  */
  const peopleText = document.createTextNode(no_of_ratings);
  people.appendChild(peopleText);
  rateContainer.appendChild(people);

  //push the rate container inside the card title container
  cardContentContainer.appendChild(rateContainer);
  //then push it inside the cards container
  cardContainer.appendChild(cardContentContainer);

  //create price container
  const priceContainer = document.createElement("div");
  priceContainer.classList.add("course-price");

  /*
  create pahargraph element and insert inside it the 
  new price
  */
  const newPrice = document.createElement("p");
  newPrice.classList.add("new-price");
  const newPriceText = document.createTextNode(new_Price);
  newPrice.appendChild(newPriceText);

  //push the pahargraph inside the price container
  priceContainer.appendChild(newPrice);

  /*
  create pahargraph element and insert inside it the 
  discount
  */
  const priceDiscount = document.createElement("p");
  priceDiscount.classList.add("discount");
  const priceDiscountText = document.createTextNode(discount);
  priceDiscount.appendChild(priceDiscountText);

  //push the pahargraph inside the price container
  priceContainer.appendChild(priceDiscount);

  //push the price container inside the card container
  cardContainer.appendChild(priceContainer);

  //push the card container inside the courses container
  container.appendChild(cardContainer);
};

// Search process
const userInput = document.querySelector(".search-input");
const allCourses = document.querySelector(".courses-container");

export const search = () => {
  userInput.addEventListener("keyup", () => {
    const valueSearch = userInput.value.toLowerCase();
    const allCoursesArray = Array.from(allCourses.querySelectorAll(".card"));
    allCoursesArray.forEach((item) => {
      const text = item.querySelector("h3").innerText;
      const TextLower = text.toLocaleLowerCase();
      const match = TextLower.includes(valueSearch);
      if (match) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
};
