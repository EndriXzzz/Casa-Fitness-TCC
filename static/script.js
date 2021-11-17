// NAV
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// ANIMATION
AOS.init();

// VIDEO
const play = document.querySelector(".video-demo-btn");
const closeBtn = document.querySelector(".close");
const video = document.querySelector(".video-demo");
const auto = document.querySelector(".fitness-video");

play.onclick = () => {
  video.classList.add("active");
  auto.play();
}

closeBtn.onclick = () => {
  video.classList.remove("active");
  auto.pause();
}

function clearphoto() {
  var context = canvas.getContext('2d');
  let photo = document.getElementById('photo');
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  var data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
}

function upload() {

}

function dataURLtoFile(dataurl, filename) {

  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}


function takepicture() {
  let photo = document.getElementById('photo');
  let video = document.getElementById('video');
  var context = canvas.getContext('2d');
  let width = 500;
  let height = 500;
  canvas.width = width;
  canvas.height = height;
  context.drawImage(video, 0, 0, width, height);

  var data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
  photo.style.display = 'block';
  video.style.display = 'none';

  fetch("process", {
    body: data,
    headers: {
      "Content-Type": "text/plain",
    },
    method: "post",
  }).then((response) => {
    console.log(response);
    if (response.ok) {
      alert('Analise realizada, pose reconhecida');
      window.location.replace('main.html')
    } else {
      alert('Pose não reconhecida');
      location.reload()
    }
  })
    .catch((err) => alert(err.message))
}


function startup() {
  let video = document.getElementById('video');
  let canvas = document.getElementById('canvas');
  let photo = document.getElementById('photo');
  let startbutton = document.getElementById('startbutton');

  startbutton.addEventListener('click', function (ev) {
    takepicture();
    ev.preventDefault();
  }, false);

  document.addEventListener("DOMContentLoaded", function (event) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
        photo.style.display = 'none';
      })
      .catch(function (err) {
        console.log("An error occurred: " + err);
      });
  });


}

(function () {
  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  var streaming = false;

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;
})
