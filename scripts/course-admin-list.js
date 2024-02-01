import HttpClient from "./http.js";
import { createCourseList } from "./dom.js";

const initPage = async () => {
    const url = 'http://localhost:3000/courses';
    // Create a new object from the class HttpClient
    const http = new HttpClient(url);

    // Get all the courses
    const courses = await http.get();
    createCourseList(courses, document.querySelector('#courses'));
    // Get all the courses and add a click event listener
    const cards = document.querySelectorAll('#courses div');
    // Go through all the courses and add a click event listener
    
    cards.forEach((card) => {
        card.addEventListener('click', selectedCourse);
    });
};

const selectedCourse = (e) => {
    let courseId = 0;
    if (e.target.localName === 'div') {
        courseId = e.target.getAttribute('courseid');
    } else if (e.target.localName === 'span') {
        courseId = e.target.parentElement.getAttribute('courseid');
    }
    console.log(courseId);
    // Redirect to edit-course.html
    location.href = `./edit-course.html?id=${courseId}`;
};

const getCourse = async (id) => {
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    const course = await http.get();
    console.log(course);
}

document.addEventListener('DOMContentLoaded', initPage);