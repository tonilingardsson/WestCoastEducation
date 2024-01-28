import HttpClient from "./http.js";
import { convertFormDataToJson } from "./utilities.js";

const form = document.querySelector('addStudentForm');
const studentsGallery = document.querySelector('#students-gallery');

const addStudent = async (e) => {
    e.preventDefault();
    const student = new FormData(form);
    const object = convertFormDataToJson(student);
    console.log(object);
    saveStudent(object);
};

const saveStudent = async (student) => {
    const url = 'http://localhost:3000/students';
    const http = new HttpClient(url);
    await http.add(student);
    console.log(student);
    location.href = './students.html';
};

form.addEventListener('submit', addStudent);