import { createCard, createCardS, createCardT, addImageClickHandler, createCourseList } from "./scripts/dom.js";

// Global variables. Courses, teachers, and students.
const coursesGallery = document.querySelector('#courses-gallery');
const studentsGallery = document.querySelector('#students-gallery');
const teachersGallery = document.querySelector('#teachers-gallery');

async function initPage() {
    // Load data
    const courses = await listAllCourses();
//     const teachers = await listAllTeachers();
    courses.forEach((course) => {
        // Add courses to page
    coursesGallery.appendChild(createCard(course));
        // console.log(course);
        
    });

    const students = await listAllStudents();
    students.forEach((student) => {
        // Add students to page
        studentsGallery.appendChild(createCardS(student));
        // console.log(student);
    })

const teachers = await listAllTeachers();
    teachers.forEach((teacher) => {
        // Add teachers to page
        teachersGallery.appendChild(createCardT(teacher));
    })

    // Render data. Fetched from db.json and displayed on the page.
    const images =  document.querySelectorAll('.course-image img, .student-image img', '.teacher-image img');
    addImageClickHandler(images);
    
    };


const listAllCourses = async () => {
    // Function to fetch courses data from db.json
    const url = 'http://localhost:3000/courses';
    // Indicating where to get the data from (above)
    const response = await fetch(url);
    // Indicating what to do with the data (above)
    if (response.ok) {
        const result = await response.json();
        // Saving the result in a variable. Using await to wait for the data to be fetched
        return result;
    } else {
        throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
        // Error handling and rendering a message for the user, and debugging.
    }
// AI Suggestion: Use fetch to fetch data from db.json
    // return fetch('db.json')
    //     .then(res => res.json())
    //     .then(data => data.courses);
};

const listAllStudents = async () => {
    const url = 'http://localhost:3000/students';
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
    }
}

const listAllTeachers = async () => {
    const url = 'http://localhost:3000/teachers';
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
    }   
}

// Display a modal for all the objects: course, student, and teacher

const main = document.querySelector('main2');
const displayModal = (modalObject) => {
    const modal = createModal(modalObject);
    const overlay = createOverlay();

    main2.appendChild(modal, overlay, main);
}
const createModal = (modalObject) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('flex-v');
    // Inner content of the modal
    const container = document.createElement('div');
    container.classList.add('modal-container');
    // Place an image
    const image = document.createElement('img');
    image.setAttribute('src', `../images/${modalObject.imageUrl}`);
    image.setAttribute('alt', modalObject.name);
    // Add info-text below the image
    const modalObjectInfo = document.createElement('p');
    modalObjectInfo.classList.add('info-text');
    const textContent = document.createTextNode(`${modalObject.name} - ${modalObject.duration} - Rating: ${modalObject.averageRating}/5`);
    // Here is where we will add the apply button
    const applyButton = document.createElement('button');
    // applyButton.classList.add('apply-button btn');
    
    // applyButton.setAttribute('id', modalObject.id);
    const applyButtonText = document.createTextNode('Apply now!');
    // applyButton.addEventListener('click', () => {
    //     // TODO: Add logic to apply for a course
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     const loginUrl = 'http://localhost:3000/pages/login.html';
    //     console.log('Applied for course');
    //     if(user === null) {
    //         alert(`Please login to apply for a course here: ${loginUrl}`);
    //     } else {
    //         alert('Applied for course');
    //     }
    // })


    modalObjectInfo.appendChild(textContent);
    container.appendChild(image);
    modal.appendChild(container);
    modal.appendChild(modalObjectInfo);
    modal.appendChild(applyButton);

    return modal;
}

const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    return overlay;
}

// Create a E6 class to handle the modal
class ModalObject {
    constructor(id, name, duration, rating, imageUrl) {
        // You are writing the constructor pairing JSON db key and contructor key
        // MODEL this.objectKey = constructorKey;
        this.id = id;
        // this.modalObject = modalObject;
        this.name = name;
        this.duration = duration;
        this.averageRating = rating;
        // this.description = description;
        // this.applyBtn = applyBtn;
        this.imageUrl = imageUrl;

    }
}
// Don't forget to add the values for all the keys within the constructor object
const exampleModal = new ModalObject('modalObject', 'course', '8 weeks',5, 'CloudComputing1.jpg');

displayModal(exampleModal);

document.addEventListener('DOMContentLoaded', initPage);