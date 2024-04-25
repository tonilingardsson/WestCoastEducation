import HttpClient from "../lib/models/HttpClient.js";
import { updateCourseList } from "./dom.js";


// Global variables. Courses, teachers, and students.
const coursesGallery = document.querySelector('#courses-gallery');
const studentsGallery = document.querySelector('#students-gallery');
const teachersGallery = document.querySelector('#teachers-gallery');
// const deleteButton = document.querySelector('#delete');
const editButton = document.querySelectorAll('.delete-button'); // Now is class="delete-button"

const initPage = async () => {
    const url = 'http://localhost:3000';
    const http = new HttpClient(url);
    const courses = await http.get('courses');

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
// editButton.addEventListener('submit', selectedCourse);
// This function must be add on edit-course.html
// deleteButton.addEventListener('click', deleteCourse);

