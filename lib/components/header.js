const header = document.querySelector('#header');


const initHeader = () => {

  const isStudentLoggedIn = localStorage.getItem('studentLogin') || null;

  const isLoggedIn = () => {

    if (isStudentLoggedIn) {
      return '<li><a href="/pages/login.html" id="logout">Logout</a></li>'
    }
    return '<li><a href="/pages/login.html">Login</a></li>';
  }

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
      ${isLoggedIn()}
      <li><a href="/admin/index.html">Admin</a></li>
    </ul>
  </nav>
  `;

  header.innerHTML = nav;

  if (isStudentLoggedIn) {
    const logoutButton = document.querySelector('#logout');
    logoutButton.addEventListener('click', () =>
      localStorage.removeItem('studentLogin'));
  }

}

document.addEventListener('DOMContentLoaded', initHeader);