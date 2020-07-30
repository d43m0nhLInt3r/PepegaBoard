# PepegaBoard
An Open Source Pepega Board
<img src="https://github.com/d43m0nhLInt3r/PepegaBoard/raw/master/images/PepegaBoard.png" width="450px">
<img src="https://github.com/d43m0nhLInt3r/PepegaBoard/raw/master/images/PepegaBoard2.png" width="450px">
## How to add an image
index.html
```bash
$  <a id="myNewEmote" href="#">
$        <img src="./images/myNewEmote.jpg" class="rounded float-left mb-5 mr-3" style="width:200px; height:200px;">
$    </a>
```
renderer.js
```bash
$ document.getElementById("myNewEmote").addEventListener("click", (event) => {
$ localStorage.setItem("id", "myNewEmote");
$ const modalPath = path.join("file://", __dirname, "frame.html");
$ let win = new BrowserWindow({ frame: false, width: 256, height: 256, alwaysOnTop: true });
$ win.on("close", () => {
$   win = null;
$ });
$ win.loadURL(modalPath);
$ win.show();
$ });
```
frame.html
```bash
$ case "myNewEmote":
$                    document.getElementById("view").src = './images/myNewEmote.jpg';
$                    break;
```
## How to add an audio
index.html
```bash
$  <a id="myNewAudio" href="#">
$        <img src="./images/./images/play.png" class="rounded float-left mb-5 mr-3" style="width:200px; height:200px;">
$    </a>
```
renderer.js
```bash
$ document.getElementById("myNewAudio").addEventListener("click", (event) => {
$ localStorage.setItem("id", "myNewAudio");
$ const modalPath = path.join("file://", __dirname, "audio.html");
$ let win = new BrowserWindow({ frame: false, width: 256, height: 256, alwaysOnTop: true });
$ win.on("close", () => {
$  win = null;
$ });
$ win.loadURL(modalPath);
$ win.show();
});
```
frame.html
```bash
case "myNewAudio":
                    document.getElementById("play").src = './audio/myNewAudio.mp3';
                    document.getElementById("view").src = './images/myNewAudio.jpg';
                    break;
                }
```
