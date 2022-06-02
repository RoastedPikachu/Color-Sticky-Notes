let txt = '';
let i = 0;
let id = 'el0';
let idRow = 'item0';
let colors = ['64ff17', 'ffe25e', '4dc9ff', 'd84dff', 'ff6ef5', 'ffc591', 'acffe8', 'f7ff00', 'b8ff94', 'ead1dc', 'cfe2f3', 'baadda'];
let rotate = [10, 7, 5, 3, 1, -3, -5, -8, -10];
backgroundPast = '';

document.querySelector('.add-desk-sticky-el').addEventListener('click', () => {
  document.querySelector('.desk-textarea').style.display="block";
});

document.querySelector('.desk-close').addEventListener('click', () => {
  document.querySelector('.desk-textarea').style.display="none";
});

document.querySelector('.desk-textarea > p').addEventListener('click', () => {
  document.querySelector('.desk-textarea').style.display="none";
  txt = document.querySelector('.desk-textarea > textarea').value;

  if (i == 0 || i % 4 == 0) {
  document.querySelector('.desk-container').innerHTML+=`
  <div class='desk-container-row' id=${idRow}>
    <div class='desk-sticky-el' id=${id}>
      <p>${txt}</p>
    </div>
  </div>`;
  } else if (i != 0 && i % 4 != 0) {
    document.querySelector(`#${idRow}`).innerHTML+=`
    <div class='desk-sticky-el' id=${id}>
      <p>${txt}</p>
    </div>`;
  }

  document.querySelector('.desk-textarea > textarea').value = '';
  document.querySelector(`#${id}`).style.transform=`rotate(${rotate[Math.floor(Math.random() * rotate.length)]}deg)`;
  background = `#${colors[Math.floor(Math.random() * colors.length)]}`;

  while(background == backgroundPast){
    background = `#${colors[Math.floor(Math.random() * colors.length)]}`;
  }

  document.querySelector(`#${id}`).style.background=background;
  backgroundPast = background;
  i++;
  id = `${id.slice(0, 2) + i}`; 
  if (i % 4 == 0){
    idRow = `${idRow.slice(0, 4) + i}`;
  }
});