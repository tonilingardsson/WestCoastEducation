const studentsGallery = document.querySelector('#students-gallery');

function initPage () {
// Iterate over the list of students and create a card for each one.
    const students = loadStudents();
    students.forEach((student) => {
        gallery.appendChild(createStudentCard(student));
    });
}

const listAllStudents = () => students;
// Export listAllStudents
// export default listAllStudents;