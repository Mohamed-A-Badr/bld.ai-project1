import { generateCard } from "./Course_card.js";
import { search } from "./Course_card.js";

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/Courses`);
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
