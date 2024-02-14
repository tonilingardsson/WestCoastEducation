import HttpClient from "./http.js";
import { convertFormDataToJson } from "./utilities.js";
// Add a teacher

const form = document.querySelector('#addTeacherForm');
const createTeacher = async (e) => {
    e.preventDefault();
    // Get data from the form, and send it to the server through an object
    const teacher = new FormData(form);
    const object = convertFormDataToJson(teacher);
     // Populate a message that the teacher was added to the db.json
     const message = `The teacher ${teacher.name} was added to db.json`;
     console.log(message);
     alert(message);
     // Save data to db.json
    saveTeacher(object);
};
console.log(form);

const saveTeacher = async (teacher) => {
    // Save data to db.json
    const url = 'http://localhost:3000/teachers';
    const http = new HttpClient(url);
    await http.add(teacher);
   

    // Redirect to teachers.html once the data is added to check if the addition was successful
    location.href = './index.html';
};

form.addEventListener('submit', createTeacher);