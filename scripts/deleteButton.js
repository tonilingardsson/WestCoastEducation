import { deleteCourseById } from "../../lib/services/coursesServices";

courses.forEach((course) => {
    const container = document.createElement("div");
    container.setAttribute("class", "flex column");
    container.innerHTML = `
        <div style="display:flex;">
            <h3 id=${course.id}>${course.name}</h3>
            <button id="editButton${course.id}">Edit</button> 
            <button id="deleteButton${course.id}" class="btn-danger">Delete</button>
        </div>
    `;

    const deleteButton = container.querySelector(`#deleteButton${course.id}`);

    deleteButton.addEventListener("click", async () => {
        console.log(course.id);
        await deleteCourseById(course.id); // Pass the correct course ID
        await updateCourseList(); // Update the course list after deletion
    });

    updateCourseContainer.appendChild(container);
});

deleteBasketItem.addEventListener('click');