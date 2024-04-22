const footer = document.querySelector('#footer');

const initFooter = () => {

  const footerContent = `
   
    <ul>
    <li><a href="#">Contact</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms of Use</a></li>
  </ul>
  <p>&copy; 2024 West Coast Education. All rights reserved.</p>

  `;

  footer.innerHTML = footerContent;

}

document.addEventListener('DOMContentLoaded', initFooter);