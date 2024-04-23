import { getAllCourses } from "../services/coursesServices.js";
import { createCourseCard } from "../../scripts/dom.js";

const updateCourseContainer = document.querySelector("#updateCourseList");

const courseName = document.querySelector("#courseName");
const courseDesc = document.querySelector("#courseDesc");
const courseDuration = document.querySelector("#courseName");
const teacherId = document.querySelector("#teacherId");
const averageRate = document.querySelector("#averageRate");
const imageUrl = document.querySelector("#imageUrl");

const initApp = async () => {
    const courses = await getAllCourses();
    courses.forEach((course) => {
        const container = document.createElement("div");
        container.innerHTML = `
        <div style="display:flex;">
        <h3 id=${course.id}>${course.name}</h3>
        <button id="editButton${course.id}">Edit</button> <button id="deleteButton${course.id}">Delete</button>
        </div>
        `;
        updateCourseContainer.appendChild(container);
        const editButton = document.querySelector(`#editButton${course.id}`);
        const deleteButton = document.querySelector(`#deleteButton${course.id}`);

        editButton.addEventListener("click", () => {
            console.log(course.id);
        });
    });
};

document.addEventListener("DOMContentLoaded", initApp);
