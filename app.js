import { createCard } from "./dom.js";
// import listAllCourses from './data/courses.js';
// import listAllStudents from './data/students.js';
// import listAllTeachers from './data/teachers.js';

// Global variables. Courses, teachers, and students.
// const coursesGallery = document.querySelector('#courses-gallery');
// const studentsGallery = document.querySelector('#students-gallery');
// const teachersGallery = document.querySelector('#teachers-gallery');

// async function initPage() {
//     // Load data
//     // const courses = await listAllCourses();
//     const students = await listAllStudents();
//     const teachers = await listAllTeachers();
//     courses.forEach((course) => {
//         // Add courses to page
//         const courseCard = createCourseCard(course);
//         // console.log(course);
//     });

//     // Render data. Fetched from db.json and displayed on the page.
//     const images = courses.map((course) => {
//         const images = document.querySelectorAll('.course-card');   
//     });
// }

// const listAllCourses = async () => {
//     // Funtion to fetch courses data from db.json
//     const url = 'http://localhost:3000/courses';
//     // Indicating where to get the data from (above)
//     const response = fetch(url);
//     // Indicating what to do with the data (above)
//     if (response.ok) {
//         const result = await response.json();
//         console.log(result);
//         // Saving the result in a variable. Using await to wait for the data to be fetched
//         return result;
//     } else {
//         throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
//         // Error handling and rendering a message for the user, and debugging.
//     }
// // AI Suggestion: Use fetch to fetch data from db.json
//     // return fetch('db.json')
//     //     .then(res => res.json())
//     //     .then(data => data.courses);
// };

// document.addEventListener('DOMContentLoaded', initPage);

// // Theme toggle button
// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggleBtn = document.getElementById('theme-toggle-btn');
//     const body = document.body;

//     // Check the user's preference from local storage
//     const currentTheme = localStorage.getItem('theme');
//     if (currentTheme) {
//         body.classList.add(currentTheme);
//     } else {
//         // Default to light mode if no preference is stored
//         body.classList.add('light-mode');
//     }

//     // Toggle between light and dark modes
//     themeToggleBtn.addEventListener('click', function() {
//         if (body.classList.contains('light-mode')) {
//             body.classList.replace('light-mode', 'dark-mode');
//             localStorage.setItem('theme', 'dark-mode');
//         } else {
//             body.classList.replace('dark-mode', 'light-mode');
//             localStorage.setItem('theme', 'light-mode');
//         }
//     });
// });
