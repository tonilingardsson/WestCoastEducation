import { createCourse, deleteCourseById, getAllCourses, updateCourseById } from "../services/coursesServices.js";

const updateCourseContainer = document.querySelector("#updateCourseList");

const courseForm = document.querySelector("#courseForm");
const courseName = document.querySelector("#courseName");
const courseDesc = document.querySelector("#courseDesc");
const courseDuration = document.querySelector("#courseDuration");
const courseStartDate = document.querySelector("#startDate");
const courseLocation = document.querySelector("#location");
const courseTeacherId = document.querySelector("#teacherId");
const coursePrice = document.querySelector("#coursePrice");
const courseUrl = document.querySelector("#courseUrl");
const courseImageUrl = document.querySelector("#imageUrl");

const editMode = { active: false, courseId: null };

const initEditCourses = async () => {

    // await deleteCourseById(301);

    const updateCourseList = async () => {
        // while (courseList.length > 0) courseList.pop();

        updateCourseContainer.innerHTML = '';

        const courses = await getAllCourses();



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
                const courseToEdit = courses.find((c) => c.id === course.id);
                courseName.value = courseToEdit.name;
                courseDesc.value = courseToEdit.description;
                courseDuration.value = courseToEdit.duration;
                courseStartDate.value = courseToEdit.startDate;
                courseLocation.value = courseToEdit.location;
                courseTeacherId.value = courseToEdit.teacherId;
                coursePrice.value = courseToEdit.price;
                courseUrl.value = courseToEdit.url;
                courseImageUrl.value = courseToEdit.imageUrl;

                editMode.active = true;
                editMode.courseId = course.id;

            });

            deleteButton.addEventListener("click", async () => {
                console.log(course.id);
                await deleteCourseById(course.id);
                await updateCourseList(); // Update the course list after deletion
            });
        });

    }

    await updateCourseList();

    const sendCourseForm = async (e) => {
        e.preventDefault();


        const formData = new FormData(courseForm);
        const convertedFormData = Object.fromEntries(formData.entries());
        if (editMode.active) {
            await updateCourseById(editMode.courseId, convertedFormData);
            editMode.active = false;
            editMode.courseId = null;
        } else {
            await createCourse(convertedFormData);
        }

        courseForm.reset();
        // Add message for user after saving the course
        const message = editMode.active ? "Course updated successfully!" : "Course created successfully!";
        await updateCourseList();
        // location.reload();

    };
    courseForm.addEventListener("submit", sendCourseForm);

};

document.addEventListener("DOMContentLoaded", initEditCourses);
