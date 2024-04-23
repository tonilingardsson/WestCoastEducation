import HttpClient from "../lib/models/HttpClient.js";
import { convertFormDataToJson } from "./utilities.js";
// Add a course

const form = document.querySelector('#addCourseForm');
const createCourse = async (e) => {
    e.preventDefault();
    // Get data from the form, and send it to the server through an object
    const course = new FormData(form);
    const object = convertFormDataToJson(course);
    // Populate a message that the course was added to the db.json
    const message = `The course ${course.name} was added to db.json`;
    console.log(message);
    alert(message);
    // Save data to db.json
    saveCourse(object);
};
console.log(form);

const saveCourse = async (course) => {
    // Save data to db.json
    const url = 'http://localhost:3000/courses';
    const http = new HttpClient(url);
    await http.add(course);


    // Redirect to courses.html once the data is added to check if the addition was successful
    location.href = './index.html';
};

form.addEventListener('submit', createCourse);