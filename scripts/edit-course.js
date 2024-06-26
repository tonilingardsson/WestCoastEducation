import HttpClient from "./http.js";
import { convertFormDataToJson } from "./utilities.js";
// import { convertFormDataToJson } from "./utilities.js";
const form = document.querySelector('updateCourseForm');
// One delete button for all forms
const saveButton = document.querySelector('#save');
const deleteButton = document.querySelector('#delete');

let courseId = 0;

const initPage = async () => {
    // Load data
    courseId = location.search.split('=')[1];
    getCourse(courseId);
    console.log(courseId);
};


// Get data to be displayed on the EDIT form
const getCourse = async (courseId) => {
    const url = `http://localhost:3000/courses/${courseId}`;
    const http = new HttpClient(url);
    const course = await http.get();
    loadDataToForm(course);
    
};

const loadDataToForm = (course) => {
//    console.log(form.elements);
    const entries = new URLSearchParams(course).entries();
    console.log(...entries);
    // Iterate over the dictionary list
    for (let [key, value] of entries) {
        // Keep it as id to match with the database id (key)
        if (key !== 'id') {
            const input = form.elements[key];
            input.value = value;
        }
    }
    // console.log(...entries);
};

const updateCourse = async (e) => {
    e.preventDefault();
    const course = new FormData(form);
    const object = convertFormDataToJson(course);
    // Try it with courseId and later with id
    const url = `http://localhost:3000/courses/${courseId}`;
    const http = new HttpClient(url);
    await http.put(object);
    console.log(course);
    // Redirect to courses.html once the data is updated to check if the update was successful
    location.href = './courses.html';
};

const deleteCourse = async () => {
    const url = `http://localhost:3000/courses/${courseId}`;
    const http = new HttpClient(url);
    await http.delete(url);
    location.href = './courses.html';
};
// Get ready these functions when the document is ready
document.addEventListener('DOMContentLoaded', initPage);
// Add an event listener to the updateCourse form
form.addEventListener('submit', updateCourse);
// // Make the delete button work!
deleteButton.addEventListener('click', deleteCourse);