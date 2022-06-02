let txt = '';
let i = 0;
let id = 'el0';
let colors = ['64ff17', 'ffe25e', '4dc9ff', 'd84dff', 'ff6ef5', 'ffb26e', '7ff0d0', 'f8ff2b'];
let rotate = [10, 7, 5, 3, 1, -3, -5, -8, -10];

document.querySelector('.add-desk-sticky-el').addEventListener('click', () => {
  document.querySelector('.desk-textarea').style.display="block";
});

document.querySelector('.desk-close').addEventListener('click', () => {
  document.querySelector('.desk-textarea').style.display="none";
});

document.querySelector('.desk-textarea > p').addEventListener('click', () => {
  document.querySelector('.desk-textarea').style.display="none";
  txt = document.querySelector('.desk-textarea > textarea').value;
  
  document.querySelector('.desk-container').innerHTML+=`
  <div class='desk-sticky-el' id=${id}>
    <p>${txt}</p>
  </div>`

  document.querySelector('.desk-textarea > textarea').value = '';
  document.querySelector(`#${id}`).style.transform=`rotate(${rotate[Math.floor(Math.random() * rotate.length)]}deg)`;
  document.querySelector(`#${id}`).style.background=`#${colors[Math.floor(Math.random() * colors.length)]}`;

  i++;
  id = `${id.slice(0, 2) + i}`; 
});