import HttpClient from "./http.js";
import { convertFormDataToJson } from "./utilities.js";
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
    console.log(course);
};

const loadDataToForm = (course) => {
    const entries = new URLSearchParams(course).entries();
    console.log(...entries);
}

// const loadDataToForm = (course) => {
//     // Create a dictionary list with all the properties of the course object (key: value)
//     const courseProperties = new URLSearchParams(course).entries();
//     // Iterate over the dictionary list
//     console.log(courseProperties);
//     for(let [key, value] of courseProperties) {
//         if (key !== 'id') {
//             const input = form.elements[key];
//             input.value = value;
//         }
//     }
// TRY THIS from AI
//     courseId = course.id;
// };

const updateCourse = async (e) => {
    e.preventDefault();
    const course = new FormData(form);
    const object = convertFormDataToJson(course);
    const url = `http://localhost:3000/courses/${courseId}`;
    const http = new HttpClient(url);
    await http.put(object);
    console.log(course);
    // Redirect to courses.html once the data is updated to check if the update was successful
    location.href = './courses.html';
};

const deleteCourse = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    await http.delete();
    location.href = './courses.html';
};

// Get ready these functions when the document is ready
document.addEventListener('DOMContentLoaded', initPage);
// Add an event listener to the updateCourse form
// form.addEventListener('submit', updateCourse);
// Make the delete button work!
deleteButton.addEventListener('click', deleteCourse);