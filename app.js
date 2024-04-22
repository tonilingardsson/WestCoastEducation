import { getAllCourses, getCourseById } from './lib/services/coursesServices.js'
import { getAllTeachers } from './lib/services/teachersServices.js';
import { createCourseCard } from './scripts/dom.js';
const courseContainer = document.querySelector('#courses-gallery');

const initApp = async () => {

    const courses = await getAllCourses();

    courses.forEach(course => {
        courseContainer.appendChild(createCourseCard(course));
    });

    // const teachers = await getAllTeachers();

    // courses.forEach(teacher => {
    //     teacherContainer.appendChild(createCourseCard(teacher));
    // });


}

document.addEventListener('DOMContentLoaded', initApp());