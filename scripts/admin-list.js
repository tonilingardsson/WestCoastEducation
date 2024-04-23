import HttpClient from "../lib/models/HttpClient.js";
import { updateCourseList } from "./dom.js";


// Global variables. Courses, teachers, and students.
const coursesGallery = document.querySelector('#courses-gallery');
const studentsGallery = document.querySelector('#students-gallery');
const teachersGallery = document.querySelector('#teachers-gallery');
// const deleteButton = document.querySelector('#delete');
const editButton = document.querySelectorAll('.delete-button'); // Now is class="delete-button"
console.log(editButton);
// async function initPage() {
//     // Load data
//     const courses = await listAllCourses();
//     //     const teachers = await listAllTeachers();
//     courses.forEach((course) => {
//         // Add courses to page
//         coursesGallery.appendChild(createCard(course));
//         // Add a delete button
//         const button = document.createElement('button');
//         button.classList.add('delete-button');
//         button.setAttribute('id', course.id);
//         button.textContent = 'Delete';
//         coursesGallery.appendChild(button);
//     });

//     const students = await listAllStudents();
//     students.forEach((student) => {
//         // Add students to page
//         studentsGallery.appendChild(createCardS(student));
//         // Add a delete button
//         const button = document.createElement('button');
//         button.classList.add('delete-button');
//         button.setAttribute('id', student.id);
//         button.textContent = 'Delete';
//         studentsGallery.appendChild(button);
//     })

//     const teachers = await listAllTeachers();
//     teachers.forEach((teacher) => {
//         // Add teachers to page
//         teachersGallery.appendChild(createCardT(teacher));
//         // Add a delete button
//         const button = document.createElement('button');
//         button.classList.add('delete-button');
//         button.setAttribute('id', teacher.id);
//         button.textContent = 'Delete';
//         teachersGallery.appendChild(button);    })

//     // Render data. Fetched from db.json and displayed on the page.
//     const images = document.querySelectorAll('.course-image img, .student-image img, .teacher-image img');
//     addImageClickHandler(images);

//     // Go through all the elements and add a click event listener
//     cards.forEach((card) => {
//         card.addEventListener('click', selectedCourse);
//     });

// };

// const listAllCourses = async () => {
//     // Function to fetch courses data from db.json
//     const url = 'http://localhost:3000/courses';
//     // Indicating where to get the data from (above)
//     const response = await fetch(url);
//     // Indicating what to do with the data (above)
//     if (response.ok) {
//         const result = await response.json();
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

// NEW initPage
const initPage = async () => {
    const url = 'http://localhost:3000/courses';
    const http = new HttpClient(url);
    const courses = await http.get(url);

    // const courses = await http.get();
    updateCourseList(courses, document.querySelector('#courses-gallery'));
    const cards = document.querySelectorAll('#courses-gallery div');

    // Go through all the elements and add a click event listener
    cards.forEach((card) => {
        card.addEventListener('click', selectedCourse);
    });
}

const selectedCourse = (e) => {
    let courseId;
    console.log(e.target.localName);
    if (e.target.localName === 'div') {
        courseId = e.target.getAttribute('courseid');
        console.log(e.target.localName);
        return courseId;
    } else if (e.target.localName === 'span') {
        courseId = e.target.parentElement.getAttribute('courseid');
        return courseId;
    } else if (e.target.localName === 'button') {
        courseId = e.target.parentElement.getAttribute('courseid');
        return courseId;
    }

    // Redirect to edit-course.html
    location.href = `./edit-course.html?id=${courseId}`;
    console.log(e.target.className);
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

const listAllTeachers = async () => {
    const url = 'http://localhost:3000/teachers';
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
    }
}

// function createCourse(course) {
//     const courseCard = createCard(course);
//     courseCard.addEventListener('click', selectedCourse);
//     courseCard.querySelector('.delete-button').addEventListener('click', deleteCourse);

//     courseCard.querySelector('.edit-button').addEventListener('click', editCourse);
//     courseCard.querySelector('.view-button').addEventListener('click', viewCourse);
//     courseCard.querySelector('.view-students-button').addEventListener('click', viewStudents);
//     courseCard.querySelector('.view-teachers-button').addEventListener('click', viewTeachers);
//     courseCard.querySelector('.add-student-button').addEventListener('click', addStudent);
//     courseCard.querySelector('.add-teacher-button').addEventListener('click', addTeacher);
//     courseCard.querySelector('.add-course-button').addEventListener('click', addCourse);
//     courseCard.querySelector('.add-image-button').addEventListener('click', addImage);
//     courseCard.querySelector('.delete-image-button').addEventListener('click', deleteImage);
//     courseCard.querySelector('.view-image-button').addEventListener('click', viewImage);
//     courseCard.querySelector('.edit-image-button').addEventListener('click', editImage);

//     return courseCard;
// }



// I shouldn't need the code below

// const getCourse = async (id) => {
//     const url = `http://localhost:3000/courses/${id}`;
//     const http = new HttpClient(url);
//     const course = await http.get();
// }

const deleteCourse = async () => {
    // e.preventDefault(); // Prevent the form from submitting
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    await http.delete();
}
//     // Add an alert
//     // alert('The course has been deleted');
//     // Redirect to courses.html
//     location.href = './courses.html';
// }
// Get ready these functions when the document is ready

document.addEventListener('DOMContentLoaded', initPage);
editButton.addEventListener('submit', selectedCourse);
// This function must be add on edit-course.html
// deleteButton.addEventListener('click', deleteCourse);

