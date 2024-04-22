/*******************************************************************************/
// DOM Manipulation
/*******************************************************************************/
export const createCourseCard = (course, type = 'info') => {
    const container = document.createElement('div');
    container.classList.add('course-container');
    container.appendChild(createImage(course.imageUrl, course.id));

    const details = document.createElement('p');
    details.appendChild(document.createTextNode(`${course.name} - ${course.duration} - Rating: ${course.averageRating}/5`));
    container.appendChild(details);

    const description = document.createElement('p');
    description.appendChild(document.createTextNode(`${course.description}`));
    container.appendChild(description);

    const wrapper = document.createElement('div');

    switch (type) {
        case 'info':
            wrapper.innerHTML = `<a href="/pages/info.html?id=${course.id}">More info</a>`;
            break;
        case 'enroll':
            wrapper.innerHTML = `<button id="enrollCourse">Apply</button><span id="message"></span>`;
            break;

        default:
            break;
    }
    container.appendChild(wrapper);

    return container;
}

export const createPersonCard = (person) => {
    const container = document.createElement('div');
    container.classList.add('person-image', 'img');
    container.appendChild(createImage(person.imageUrl, person.id));

    const details = document.createElement('p');
    details.appendChild(document.createTextNode(`${person.name} - ${person.email}`));
    container.appendChild(details);

    const lists = document.createElement('ul');
    person.courses.forEach(course => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', `/pages/info.html?id=${course.id}`)
        link.appendChild(document.createTextNode(course.name));
        item.appendChild(link);


        lists.appendChild(item);
    });
    container.appendChild(lists);

    return container;
}

const createImage = (imageUrl, id) => {
    const image = document.createElement('img');
    image.classList.add('course-image', 'img');
    image.setAttribute('src', `/images/${imageUrl}`);
    // Set the data-id of the image
    image.setAttribute('id', id);

    return image;
};





export const createCourseList = (courses, element) => {
    courses.forEach((course) => {
        const container = createDiv();
        container.setAttribute('courseid', course.id);
        container.appendChild(createSpan(course.name));
        container.appendChild(createSpan(course.imageUrl));
        element.appendChild(container);
        const button = editCourse(courses.id);
        button.setAttribute('id', course.id);

        button.addEventListener('click', editCourse);
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

const editCourse = (id) => {
    const button = document.createElement('button');
    button.classList.add('edit-button');
    button.setAttribute('id', id);
    button.textContent = 'Edit';
    return button;
}