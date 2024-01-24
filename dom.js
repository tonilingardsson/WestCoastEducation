/*******************************************************************************/
// DOM Manipulation
/*******************************************************************************/
//     Create card function with couse as argument
const createCard = (course) => {
//     Create card/div for each course
    const div = document.createElement('div');
    // Add class to card
    div.classList.add('course-card');
    // Add content: image. We need to create an image function!
    div.appendChild(createImage(course.imageUrl, course.id));
    // Add content: title and info. We need to create a function that renders title and info function!
    div.appendChild(createCourseInfo(course));

    return div;
}

// The function to render the image
// Arguments are the image url and the id of the course
const createImage = (imageUrl, id) => {
    // We save the image in a variable called image
    const image = document.createElement('img');
    // Set the source of the image
    image.setAttribute('src', `/images/${imageUrl}`);
    // Set the data-id of the image
    image.setAttribute('id', id);
 
    return image;
};

const createCourseInfo = (course) => {
    const courseInfo = document.createElement('p');
    courseInfo.appendChild(document.createTextNode(`${course.title} - ${course.info}`));
    // courseInfo.classList.add('course-info');
    return courseInfo;
}

const addImageHandler = (images) => {
    images.forEach((image) => {
        const src = image.getAttribute('src');
        // Here it used id, so I need to call "id" 
        // to get the id of the all images: courses, students, and teachers.
        const id = image.getAttribute('id');

        image.addEventListener('click', () => {
            alert(`This object had the id:${id} and the picture's source is: ${src} - `);
        });
    });
    // const image = event.target;
    // const id = image.getAttribute('id');
    // window.location.href = `course.html?id=${id}`;
};

// Export the functions to be used in other files
// This export type is called "named export"
export { createCard, createImage, createCourseInfo, addImageHandler };