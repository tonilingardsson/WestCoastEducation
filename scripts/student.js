import HttpClient from "./http.js";
import { convertFormDataToJson } from "./utilities.js";
// Add a student

const form = document.querySelector('#addStudentForm');
const createStudent = async (e) => {
    e.preventDefault();
    // Get data from the form, and send it to the server through an object
    const student = new FormData(form);
    const object = convertFormDataToJson(student);
     // Populate a message that the student was added to the db.json
     const message = `The student ${student.name} was added to db.json`;
     console.log(message);
     alert(message);
     // Save data to db.json
    saveStudent(object);
};
console.log(form);

const saveStudent = async (student) => {
    // Save data to db.json
    const url = 'http://localhost:3000/students';
    const http = new HttpClient(url);
    await http.add(student);
   

    // Redirect to students.html once the data is added to check if the addition was successful
    location.href = './index.html';
};

form.addEventListener('submit', createStudent);