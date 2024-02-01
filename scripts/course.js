import HttpClient from "./http.js";
import { convertFormDataToJson } from "./utilities.js";

const form = document.querySelector('addCourseForm');

const addCourse = async (e) => {
    e.preventDefault();
    // Get data from the form, and send it to the server through an object
    const course = new FormData(form);
    const object = convertFormDataToJson(course);
    console.log(object);
    saveCourse(object);
};

const saveCourse = async (course) => {
    // Save data to db.json
    const url = 'http://localhost:3000/courses';
    const http = new HttpClient(url);
    await http.add(course);
    // Redirect to courses.html once the data is added to check if the addition was successful
    location.href = './index.html';
};
form.addEventListener('submit', addCourse);