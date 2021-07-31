<!--Selecting button and video in JS-->
const video = document.getElementById('video'); //'video' is the video id in your HTML
const pipButton = document.getElementById('pipButton'); //'pipButton' is the button ID in HTML


<!-- Add functionality to the button if compatible-->
if ('pictureInPictureEnabled' in document) {
  pipButton.classList.remove('hidden')
  pipButton.disabled = false;
}


<!--Sending API Request-->
if ('pictureInPictureEnabled' in document) {
  pipButton.classList.remove('hidden')
  pipButton.disabled = false;

  pipButton.addEventListener('click', () => {
    video.requestPictureInPicture();
  });
}


<!--If the video has a disablePictureInPicture attribute, we catch such errors-->
pipButton.addEventListener('click', () => {
  video
    .requestPictureInPicture()
    .catch(error => {
      // Error handling
    });
});


<!-- Exit PictureInPicture mode-->
pipButton.addEventListener('click', () => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .catch(error => {
      // Error handling
    })
  } else {
    // Request Picture-in-Picture
  }
});
