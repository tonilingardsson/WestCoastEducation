import HttpClient from "./http.js";
import { createCard, addImageClickHandler,createCourseList } from "./dom.js";

const initPage = async () => {
    const url = 'http://localhost:3000/courses';
    const urlS = 'http://localhost:3000/students';
    const urlT = 'http://localhost:3000/teachers';
    // Create a new object from the class HttpClient
    const http = new HttpClient(url);

    // Get all the courses
    const courses = await http.get();
    const students = await http.get();
    const teachers = await http.get();
    createCourseList(courses, document.querySelector('#courses'));
    createCourseList(students, document.querySelector('#students'));
    createCourseList(teachers, document.querySelector('#teachers'));
    // Get all the courses and add a click event listener
    const cards = document.querySelectorAll('#courses div, #students div, #teachers div');
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

const deleteCourse = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    await http.delete();
    
    // Add an alert
    alert('The course has been deleted');
    // Redirect to courses.html
    location.href = './courses.html';
}
    // Get ready these functions when the document is ready

document.addEventListener('DOMContentLoaded', initPage);