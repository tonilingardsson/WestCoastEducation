const header = document.querySelector('#header');

const initHeader = () => {

    const nav = `
    <nav class="admin-menu">
    <ul class="admin-menu">
      <li>
        <a href="../index.html"
          ><img
            class="minilogo"
            src="../images/minilogo.png"
            alt="Wescoast Education logo"
        /></a>
      </li>
      <li class="menu-item">
        <a href="/admin/index.html" title="Admin panel">Admin panel</a>
      </li>
      <li class="menu-item">
        <a
          href="/admin/communication.html"
          title="Communicate with teachers and students via chat or email"
          >Communication</a
        >
      </li>
    </ul>
    <ul class="add-menu" id="add-menu">
      <li class="menu-item">
        <a href="/admin/add-course.html" title="Add courses">Add courses</a>
      </li>
      <li class="menu-item">
        <a href="/admin/add-student.html" title="Add or delete students"
          >Add students</a
        >
      </li>
      <li class="menu-item">
        <a href="/admin/add-teacher.html" title="Add teachers"
          >Add teachers</a
        >
      </li>
    </ul>
    <ul class="edit-menu" id="edit-menu">
      <li class="menu-item">
        <a href="/admin/edit-course.html" title="Edit or delete courses"
          >Manage courses</a
        >
      </li>
      <li class="menu-item">
        <a href="/admin/edit-student.html" title="Edit students"
          >Manage students</a
        >
      </li>
      <li class="menu-item">
        <a href="/admin/edit-teacher.html" title="Edit teachers"
          >Manage teachers</a
        >
      </li>
    </ul>
  </nav>
  `;

    header.innerHTML = nav;

}

document.addEventListener('DOMContentLoaded', initHeader());