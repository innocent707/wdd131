let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const button = document.querySelector('#button');

button.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#goals').classList.toggle('show');
  button.classList.toggle('show');
});

function toggleActive(element) {
  element.classList.toggle("active");
}