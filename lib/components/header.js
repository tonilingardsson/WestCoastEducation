const header = document.querySelector('#header');

const initHeader = () => {

    const nav = `
    <nav class="">
    <ul>
      <li>
        <a href="../index.html"
          ><img
            class="minilogo"
            src="../images/minilogo.png"
            alt="Wescoast Education logo"
        /></a>
      </li>
      <li><a href="/pages/courses.html">Courses</a></li>
      <li><a href="/pages/teachers.html">Teachers</a></li>
      <li>
        <a href="#"><!-- Gap to give space to login and admin button --></a>
      </li>
      <li><a href="/pages/login.html">Login</a></li>
      <li><a href="/admin/index.html">Admin</a></li>
    </ul>
  </nav>
  `;

    header.innerHTML = nav;

}

document.addEventListener('DOMContentLoaded', initHeader());