/*******************************************************************************/
// DOM Manipulation
/*******************************************************************************/
const createCard = (course) => {
    console.log(course);
    const div = document.createElement('div');
    div.classList.add('course-image', 'img');
    div.appendChild(createImage(course.imageUrl, course.id));
    div.appendChild(createCourseInfo(course));
    
    return div;
}

const createImage = (imageUrl, id) => {
    console.log(imageUrl);
    // We save the image in a variable called image
    const image = document.createElement('img');
    // Set the source of the image. 
    // If CHANGE the position of the image files, EDIT the source here.
    image.setAttribute('src', `${imageUrl}`);
    // Set the data-id of the image
    image.setAttribute('id', id);
 
    return image;
};

const createCourseInfo = (course) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(`${course.name} - ${course.duration} - Rating: ${course.averageRating}/5`));
    
    // courseInfo.classList.add('course-info');
    return paragraph;
};

const addImageHandler = (images) => {
    images.forEach((image) => {
        const src = image.getAttribute('src');
        // Here it used id, so I need to call "id" 
        // to get the id of the all images: courses, students, and teachers.
        const courseId = image.getAttribute('id');

        image.addEventListener('click', () => {
            alert(`This couse has this id:${id} and the picture's source is: ${src} - `);
        });
    });
    // const image = event.target;
    // const id = image.getAttribute('id');
    // window.location.href = `course.html?id=${id}`;
};

// Export the functions to be used in other files
// This export type is called "named export"
export { createCard, createImage, createCourseInfo, addImageHandler };