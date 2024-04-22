// Get the student info
// Get the existing student info
// Add the student's id
// Get the course's id to be enrolled
// Add the student's info into the application

import { getStudentById, updateStudentById } from "../services/studentsServices.js";

const handleEnrollment = async (courseId, courseName) => {
    const studentId = localStorage.getItem('studentLogin');
    const courseObj = { id: courseId, name: courseName };

    const student = await getStudentById(studentId);

    if (student.courses.find(course => course.id === courseId)) {

        return 'Already enrolled!';

    }
    student.courses.push(courseObj);
    await updateStudentById(studentId, student);
    return 'Thank you for enrolling!';

}

export default handleEnrollment;