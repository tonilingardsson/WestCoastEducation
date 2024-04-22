import { getCourseById } from "../services/coursesServices.js";
import { createCourseCard } from "../../scripts/dom.js";
import handleEnrollment from "./enroll.js";
const courseContainer = document.querySelector("#courses-gallery");

const initApp = async () => {
    const queryId = location.search.split("=")[1];
    const courseById = await getCourseById(queryId);
    if (courseById) {
        courseContainer.innerHTML = `<h1>${courseById.name}</h1>`
        courseContainer.appendChild(createCourseCard(courseById, 'enroll'));

        const enrollCourse = document.querySelector('#enrollCourse');
        const messageContainer = document.querySelector('#message');

        enrollCourse.addEventListener('click', async () => {
            const message = await handleEnrollment(courseById.id, courseById.name);
            messageContainer.innerText = message;

        });
    }
    else {
        courseContainer.innerHTML = "<h2>Page not found</h2>";
    }
};

document.addEventListener("DOMContentLoaded", initApp());