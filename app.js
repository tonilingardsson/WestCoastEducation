import { createCard, createImage, createCourseInfo, addImageHandler, addStudentImageHandler, createStudentCard, createStudentImage, createStudentInfo } from "./dom.js";
// import listAllCourses from './data/courses.js';
// import listAllStudents from './data/students.js';
// import listAllTeachers from './data/teachers.js';

// Global variables. Courses, teachers, and students.
const coursesGallery = document.querySelector('#courses-gallery');
const studentsGallery = document.querySelector('#students-gallery');
// const teachersGallery = document.querySelector('#teachers-gallery');

async function initPage() {
    // Load data
    const courses = await listAllCourses();
//     const teachers = await listAllTeachers();
    courses.forEach((course) => {
        // Add courses to page
        coursesGallery.appendChild(createCard(course)); 
        // console.log(course);
    });
  

    // Render data. Fetched from db.json and displayed on the page.
    const images =  document.querySelectorAll('.course-image img');
    addImageHandler(images);
    const students = await listAllStudents();

    students.forEach((student) => {
        // Add courses to page
        studentsGallery.appendChild(createStudentCard(student)); 
        // console.log(course);
    });
    const studentImages =  document.querySelectorAll('.student-image img');
    addImageHandler(studentImages);
    };


const listAllCourses = async () => {
    // Function to fetch courses data from db.json
    const url = 'http://localhost:3000/courses';
    // Indicating where to get the data from (above)
    const response = await fetch(url);
    // Indicating what to do with the data (above)
    if (response.ok) {
        const result = await response.json();
        console.log(result);
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

const listAllStudents = async () => {
    // Function to fetch students data from db.json
    const url = 'http://localhost:3000/students';
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result;
    } else {
        throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
    }
}

document.addEventListener('DOMContentLoaded', initPage);