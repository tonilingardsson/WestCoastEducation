import { getAllCourses, getCourseById } from './lib/services/coursesServices.js'
import { createCard } from './scripts/dom.js';
const courseContainer = document.querySelector('#courses-gallery');

const initApp = async () => {

    const path = location.pathname;
    const courses = await getAllCourses();

    if (path.includes('info')) {
        const query = location.search.split('=')[1];
        console.log(query);
        const courseById = await getCourseById(query);
        if (courseById) courseContainer.appendChild(createCard(courseById));
    } else {
        courses.forEach(course => {
            courseContainer.appendChild(createCard(course));
        });
    }


}

document.addEventListener('DOMContentLoaded', initApp());