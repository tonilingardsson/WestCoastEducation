import { getCourseById } from '../services/coursesServices.js'
import { createCard } from '../../scripts/dom.js';
const courseContainer = document.querySelector('#courses-gallery');

const initApp = async () => {

    const queryId = location.search.split('=')[1];
    const courseById = await getCourseById(queryId);
    if (courseById) courseContainer.appendChild(createCard(courseById));

}

document.addEventListener('DOMContentLoaded', initApp());