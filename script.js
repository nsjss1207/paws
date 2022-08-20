const phtBtn = document.querySelector('.photo-button');
phtBtn.addEventListener('click', function () {
  window.open('photo-gallery.html', '_self', false);
});
// let i = 0;
// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('gallery-item')) {
//     const src = e.target.getAttribute('src');
//     document.querySelector('.modal-img').src = src;
//     console.log(5);
//     const myModal = new Bootstrap.Modal(
//       document.getElementById('gallery-modal')
//       // $('#gallery-modal').modal(show);
//     );
//     myModal.show();
//   }
// });

const imgBtn = document.querySelectorAll('.home-button');
const photoBtn = document.querySelector('.photo');

const homeBtn = document.querySelector('.home-button');
homeBtn.addEventListener('click', function () {
  window.open('index.html', '_self', false);
});

document.querySelectorAll('.image-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  };
});
