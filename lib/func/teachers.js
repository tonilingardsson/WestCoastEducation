import { getAllTeachers } from '../services/teachersServices.js';
import { createPersonCard } from '../../scripts/dom.js';
const teacherContainer = document.querySelector('#teachers-gallery');

const initApp = async () => {

    const teachers = await getAllTeachers();

    teachers.forEach(teacher => {
        teacherContainer.appendChild(createPersonCard(teacher));
    });

}

document.addEventListener('DOMContentLoaded', initApp());