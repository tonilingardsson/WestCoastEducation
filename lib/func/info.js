import { getCourseById } from "../services/coursesServices.js";
import { createCourseCard } from "../../scripts/dom.js";
const courseContainer = document.querySelector("#courses-gallery");

const initApp = async () => {
    const queryId = location.search.split("=")[1];
    const courseById = await getCourseById(queryId);
    if (courseById) {
        courseContainer.innerHTML = `<h1>${courseById.name}</h1>`
        courseContainer.appendChild(createCourseCard(courseById));
    }
    else {
        courseContainer.innerHTML = "<h2>Page not found</h2>";
    }
};

document.addEventListener("DOMContentLoaded", initApp());