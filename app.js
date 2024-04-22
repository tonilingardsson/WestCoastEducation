import { getAllCourses } from './lib/services/coursesServices.js'
import { createCourseCard } from './scripts/dom.js';
const courseContainer = document.querySelector('#courses-gallery');

const initApp = async () => {

    const courses = await getAllCourses();

    courses.forEach(course => {
        courseContainer.appendChild(createCourseCard(course));
    });

}

document.addEventListener('DOMContentLoaded', initApp());