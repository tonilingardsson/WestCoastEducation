/*******************************************************************************/
// DOM Manipulation
/*******************************************************************************/
export const createCourseCard = (course) => {
    const container = document.createElement('div');
    container.classList.add('course-container');
    container.appendChild(createImage(course.imageUrl, course.id));

    const details = document.createElement('p');
    details.appendChild(document.createTextNode(`${course.name} - ${course.duration} - Rating: ${course.averageRating}/5`));
    container.appendChild(details);

    const description = document.createElement('p');
    description.appendChild(document.createTextNode(`${course.description}`));
    container.appendChild(description);

    const moreInfo = document.createElement('p');
    moreInfo.innerHTML = `<a href="/pages/info.html?id=${course.id}">More info</a>`;
    container.appendChild(moreInfo);

    return container;
}

const createCardS = (student) => {
    console.log(student);
    const div = document.createElement('div');
    div.classList.add('student-image', 'img');
    div.appendChild(createImage(student.imageUrl, student.id));
    div.appendChild(createStudentInfo(student));
    // button.appendChild(createDeleteButton(student.id));
    return div;
}

const createCardT = (teacher) => {
    console.log(teacher);
    const div = document.createElement('div');
    div.classList.add('teacher-image', 'img');
    div.appendChild(createImage(teacher.imageUrl, teacher.id));
    div.appendChild(createTeacherInfo(teacher));
    // button.appendChild(createDeleteButton(teacher.id));

    return div;
}

const createImage = (imageUrl, id) => {
    const image = document.createElement('img');
    image.classList.add('course-image', 'img');
    image.setAttribute('src', `/images/${imageUrl}`);
    // Set the data-id of the image
    image.setAttribute('id', id);

    return image;
};

const createCourseInfo = (course) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(`${course.name} - ${course.duration} - Rating: ${course.averageRating}/5`));
    // courseInfo.classList.add('course-info');
    return paragraph;
};

const createCourseInfo2 = (course) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(`${course.description}`));
    return paragraph;

}

const createStudentInfo = (student) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(`${student.name} - ${student.email} `));
    // courseInfo.classList.add('course-info');
    return paragraph;
};
const createTeacherInfo = (teacher) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(`${teacher.name} - ${teacher.courses[0].name} & ${teacher.courses[1].name}`));
    // courseInfo.classList.add('course-info');
    return paragraph;
};




const createCourseList = (courses, element) => {
    courses.forEach((course) => {
        const container = createDiv();
        container.setAttribute('courseid', course.id);
        container.appendChild(createSpan(course.name));
        // container.appendChild(createSpan(course.duration));
        // container.appendChild(createSpan(course.averageRating));
        container.appendChild(createSpan(course.imageUrl));
        element.appendChild(container);
        const button = editCourse(courses.id);
        button.setAttribute('id', course.id);

        button.addEventListener('click', editCourse);
        // button.appendChild(createDeleteButton(course.id));
        container.appendChild(button);
    });
};

const createDiv = () => {
    return document.createElement('div');
};

const createSpan = (text) => {
    const span = document.createElement('span');
    span.innerText = text;
    return span;
}

const addImageClickHandler = (images) => {
    images.forEach((image) => {
        const src = image.getAttribute('src');
        // Here it used id, so I need to call "id" 
        // to get the id of the all images: courses, students, and teachers.
        const courseId = image.getAttribute('id');
        const url = `http://localhost:5500/courses/${courseId}.html`
        image.addEventListener('click', () => {
            location.href = `./courses/${courseId}.html`;

            // alert(`This couse has this id: ${courseId} and the picture's source is: ${src} - `);
        });
    });

};

const editCourse = (id) => {
    const button = document.createElement('button');
    button.classList.add('edit-button');
    button.setAttribute('id', id);
    button.textContent = 'Edit';
    return button;
}

export { createCardS, createCardT, addImageClickHandler, createCourseList };