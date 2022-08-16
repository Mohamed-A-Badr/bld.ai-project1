import { coursesCard } from "./Course_card.js";

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/Courses`);
  return await response.json();
};

const udemyCourses = document.querySelector(".courses-container");
if (udemyCourses) {
  const udemyCoursesData = await fetchData();
  const udemyCoursesDataArray = Array.from(udemyCoursesData);
  udemyCoursesDataArray.forEach((item) => {
    coursesCard(item);
  });
}
