const teachersGallery = document.querySelector('#teachers-gallery'); // teachers.html

function initPage () {
// Iterate over the list of teachers and create a card for each one.
    const teachers = loadTeachers();
    teachers.forEach((teacher) => {
        gallery.appendChild(createTeacherCard(teacher));
    });
}

const listAllTeachers = () => teachers;
// Export the functions to be used in other files
export default listAllTeachers;