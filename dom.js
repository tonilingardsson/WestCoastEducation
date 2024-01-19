/*******************************************************************************/
// DOM Manipulation
/*******************************************************************************/
//     Create card function with couse as argument
const createCard = (course) => {
//     Create card/div for each course
    const card = document.createElement('div');
    // Add class to card
    card.classList.add('course-card');
    // Add content: image. We need to create an image function!
    card.appendChild(createImage(course.imageUrl, course.id));
    // Add content: title and info. We need to create a function that renders title and info function!
    card.appendChild(createCourseInfo(course));

    return card;
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

// Export the functions to be used in other files
export { createCard, createImage, createCourseInfo };