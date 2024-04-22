import { getAllStudents } from "../services/studentsServices.js";

const loginForm = document.querySelector('#login');
const username = document.querySelector('#username');


const handleLogin = async (e) => {

    e.preventDefault();

    const students = await getAllStudents();
    const currentStudent = students.find(student => student.email === username.value);
    if (currentStudent) {
        localStorage.setItem('studentLogin', currentStudent.id);

        location.pathname = '/';

    }
};

loginForm.addEventListener('submit', handleLogin);