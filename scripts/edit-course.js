import HttpClient from "./http.js";
// import { convertFormDataToJson } from "./utilities.js";
const form = document.querySelector('updateCourseForm');

// One delete button for all forms
const deleteButton = document.querySelector('#delete');

let courseId = 0;

const initPage = async () => {
    // Load data
    courseId = location.search.split('=')[1];
    getCourse(courseId);
};


// Get data to be displayed on the EDIT form
const getCourse = async (id) => {
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    const course = await http.get();
    loadDataToForm(course);
};

const loadDataToForm = (course) => {
   console.log(form.elements);
    const entries = new URLSearchParams(course).entries();
    // Iterate over the dictionary list
    for (let [key, value] of entries) {
        if (key !== 'id') {
            const input = form.elements[key];
            input.value = value;
        }
    }
    console.log(...entries);
};

const updateCourse = async (e) => {
    e.preventDefault();
    const course = new FormData(form);
    const object = convertFormDataToJson(course);
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    await http.put(object);
    console.log(course);
    // Redirect to courses.html once the data is updated to check if the update was successful
    location.href = './courses.html';
};

// const deleteCourse = async (e) => {
//     e.preventDefault();
//     const url = `http://localhost:3000/courses/${id}`;
//     const http = new HttpClient(url);
//     await http.delete();
//     location.href = './courses.html';
// };
// Get ready these functions when the document is ready
document.addEventListener('DOMContentLoaded', initPage);
// Add an event listener to the updateCourse form
// form.addEventListener('submit', updateCourse);
// // Make the delete button work!
// deleteButton.addEventListener('click', deleteCourse);