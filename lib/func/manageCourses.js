import { createCourseCard } from "../../scripts/dom.js";
import { getAllCourses } from "../services/coursesServices.js";

const updateCourseContainer = document.querySelector('#updateCourseList');

const initApp = async () => {
    const courses = await getAllCourses(courses);

    courses.forEach(course => {
        updateCourseContainer.appendChild(createCourseCard(course));
    });

}