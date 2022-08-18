import { generateCard } from "./Course_card.js";
import { search } from "./Course_card.js";

const courseType = document.querySelector("li");

const fetchData = async () => {
  const response = await fetch(`${courseType.getAttribute("href")}`);
  return await response.json();
};

const udemyCourses = document.querySelector(".courses-container");
if (udemyCourses) {
  const udemyCoursesData = await fetchData();
  const udemyCoursesDataArray = Array.from(udemyCoursesData);
  udemyCoursesDataArray.forEach((item) => {
    generateCard(item);
  });
}

search();
