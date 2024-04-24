import { createCourse, deleteCourseById, getAllCourses, updateCourseById } from "../services/coursesServices.js";
import { createCourseCard } from "../../scripts/dom.js";

const updateCourseContainer = document.querySelector("#updateCourseList");

const courseForm = document.querySelector("#courseForm");
const courseName = document.querySelector("#courseName");
const courseDesc = document.querySelector("#courseDesc");
const courseDuration = document.querySelector("#courseName");
const teacherId = document.querySelector("#teacherId");
const averageRate = document.querySelector("#averageRate");
const imageUrl = document.querySelector("#imageUrl");

const initApp = async () => {
    const updateCourseList = async () => {
        // while (courseList.length > 0) courseList.pop();

        updateCourseContainer.innerHTML = '';

        const courses = await getAllCourses();

        // const courseList = [...courses];

        courses.forEach((course) => {
            const container = document.createElement("div");
            container.setAttribute("class", "flex column")
            container.innerHTML = `
        <div style="display:flex;">
        <h3 id=${course.id}>${course.name}</h3>
        <button id="editButton${course.id}">Edit</button> <button id="deleteButton${course.id}">Delete</button>
        </div>
        `;
            updateCourseContainer.appendChild(container);

            const editButton = document.querySelector(`#editButton${course.id}`);
            editButton.setAttribute("class", "btn");

            const deleteButton = document.querySelector(`#deleteButton${course.id}`);
            deleteButton.setAttribute("class", `btn-danger`)

            editButton.addEventListener("click", () => {
                console.log(course.id);

            });

            deleteButton.addEventListener("click", async () => {
                console.log(course.id);
                await deleteCourseById();
                await updateCourseList(); // Update the course list after deletion
            });
        });

    }

    await updateCourseList();

    const sendCourseForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(courseForm);
        const convertedFormData = Object.fromEntries(formData.entries());
        await createCourse(convertedFormData);

        courseForm.reset();
        // Add message for user after saving the course
        await updateCourseList();
        // location.reload();
        // Relocate to admin/index after the message-saved course

    };
    courseForm.addEventListener("submit", sendCourseForm);

};

document.addEventListener("DOMContentLoaded", initApp);
