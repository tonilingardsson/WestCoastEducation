import { createCard, createCardS, addImageClickHandler, createCourseList } from "./scripts/dom.js";

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

    const students = await listAllStudents();
    students.forEach((student) => {
        // Add students to page
        studentsGallery.appendChild(createCardS(student));
        // console.log(student);
    })

    // Render data. Fetched from db.json and displayed on the page.
    const images =  document.querySelectorAll('.course-image img, .student-image img');
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

const listAllStudents = async () => {
    const url = 'http://localhost:3000/students';
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
    }
}

document.addEventListener('DOMContentLoaded', initPage);