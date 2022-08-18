import { generateCard } from "./Course_card.js";
import { search } from "./Course_card.js";

let indx = 0;
const btn1 = document.getElementById("btn_python");
const btn2 = document.getElementById("btn_excel");
const btn3 = document.getElementById("btn_javascript");

export function python() {
  indx = 0;
  btn1.style.color = "black";
  btn2.style.color = "#8b8c8e";
  btn3.style.color = "#8b8c8e";
}
export function excel() {
  indx = 1;
  btn2.style.color = "black";
  btn1.style.color = "#8b8c8e";
  btn3.style.color = "#8b8c8e";
}
export function javascript() {
  indx = 2;
  btn3.style.color = "black";
  btn2.style.color = "#8b8c8e";
  btn1.style.color = "#8b8c8e";
}

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/Courses`);
  return await response.json();
};
console.log(indx);

const udemyCourses = document.querySelector(".courses-container");
if (udemyCourses) {
  const udemyCoursesData = await fetchData();
  const udemyCoursesDataArray = Array.from(udemyCoursesData);
  const Data = udemyCoursesDataArray[indx];
  console.log(Data);
  Data.forEach((item) => {
    generateCard(item);
  });
}

search();
