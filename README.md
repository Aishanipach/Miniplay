# Miniplay💻
<h3> Pops up a mini player that captures a window while you work on another.</h3>
<i>( Couldn't get a module on the web while making a DIY second screen for getting the 'Dev setup', hence this )</i>

Try it-> https://aishanipach.github.io/Miniplay/
<br> <br>
You can:
- Stream Video🎬
- Open Tutorials👩‍💻
- View code📃 and much more...

in the miniplayer while working on another window.
#### 🚀 Start Capture-> Enter View Mode-> Enjoy!<br><br>

## Capture API✔ <br>
  <b> Call `getDisplayMedia()` on the instance of Media `navigator.mediaDevices`: </b> <br>
  ```
  captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  ```
  [How to use this API⚡](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API)
  
 ## Picture-in-Picture API✔ <br>
  <b> The `HTMLVideoElement` method `requestPictureInPicture()` request to display the video in picture-in-picture mode: </b> <br>
  ```
 videoElement.requestPictureInPicture();
  ```
  [How to use this API⚡](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  
  ## Fork this repo!👇
  Add on more features that you feel our missing or choose from the following:
  
  + Adding mute/unmute audio option while streaming 
  + Update resizing option 
