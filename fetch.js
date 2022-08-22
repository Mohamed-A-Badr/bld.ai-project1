import { generateCard } from "./Course_card.js";
import { search } from "./Course_card.js";

var indx;
const btn1 = document.getElementById("btn_python");
const btn2 = document.getElementById("btn_excel");
const btn3 = document.getElementById("btn_javascript");


btn1.addEventListener("click", python);
btn2.addEventListener("click", excel);
btn3.addEventListener("click", javascript);

export function python() {
  indx = "Python";
  fun();
  btn1.style.color = "black";
  btn2.style.color = "#8b8c8e";
  btn3.style.color = "#8b8c8e";
}
export function excel() {
  indx = "Excel";
  fun();
  btn2.style.color = "black";
  btn1.style.color = "#8b8c8e";
  btn3.style.color = "#8b8c8e";
}
export function javascript() {
  indx = "JavaScript";
  fun();
  btn3.style.color = "black";
  btn2.style.color = "#8b8c8e";
  btn1.style.color = "#8b8c8e";
}

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/Courses`);
  return await response.json();
};

async function fun() {
  const udemyCourses = document.querySelector(".swiper-wrapper");
  if (udemyCourses) {
    console.log(indx);
    const udemyCoursesData = await fetchData();
    const udemyCoursesDataArray = Array.from(udemyCoursesData);
    const Data = udemyCoursesDataArray[0][indx];
    console.log(Data);
    Data.forEach((item) => {
      generateCard(item);
    });
  }
}

search();