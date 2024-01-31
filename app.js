import { createCard, addImageClickHandler, createCourseList } from "./scripts/dom.js";
// import listAllCourses from './data/courses.js';
// import listAllStudents from './data/students.js';
// import listAllTeachers from './data/teachers.js';

// Global variables. Courses, teachers, and students.
const coursesGallery = document.querySelector('#courses-gallery');
// const studentsGallery = document.querySelector('#students-gallery');
// const teachersGallery = document.querySelector('#teachers-gallery');

async function initPage() {
    // Load data
    const courses = await listAllCourses();
//     const students = await listAllStudents();
//     const teachers = await listAllTeachers();
    courses.forEach((course) => {
        // Add courses to page
        coursesGallery.appendChild(createCard(course));
        // console.log(course);
    });

    // Render data. Fetched from db.json and displayed on the page.
    const images =  document.querySelectorAll('.course-image img');
    addImageClickHandler(images);
    
    };


const listAllCourses = async () => {
    // Function to fetch courses data from db.json
    const url = 'http://localhost:3000/courses';
    // Indicating where to get the data from (above)
    const response = await fetch(url);
    // Indicating what to do with the data (above)
    if (response.ok) {
        const result = await response.json();
        // Saving the result in a variable. Using await to wait for the data to be fetched
        return result;
    } else {
        throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
        // Error handling and rendering a message for the user, and debugging.
    }
// AI Suggestion: Use fetch to fetch data from db.json
    // return fetch('db.json')
    //     .then(res => res.json())
    //     .then(data => data.courses);
};


document.addEventListener('DOMContentLoaded', initPage);