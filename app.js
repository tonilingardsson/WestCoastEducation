import { getAllCourses, getCourseById } from './lib/services/coursesServices.js'
import { createCard } from './scripts/dom.js';
const courseContainer = document.querySelector('#courses-gallery');

const initApp = async () => {

    const courses = await getAllCourses();

    courses.forEach(course => {
        courseContainer.appendChild(createCard(course));
    });

}

document.addEventListener('DOMContentLoaded', initApp());