const coursesGallery = document.querySelector('#courses-gallery');

function initPage () {
// Iterate over the list of courses and create a card for each one.
    const courses = listAllCourses();
    courses.forEach((course) => {
        gallery.appendChild(createCourseCard(course));
    });
}

const listAllCourses = () => courses;
// Export the functions to be used in other files
/* In this code snippet, `default` is used to export the `listAllCourses` function as the
default export of the module. */
// export default listAllCourses;