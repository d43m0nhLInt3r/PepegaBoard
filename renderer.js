const { BrowserWindow } = require("electron").remote;

const path = require("path");

document.getElementById("pogChamp").addEventListener("click", (event) => {
  localStorage.setItem("id", "pogChamp");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256, alwaysOnTop: true });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("pauseChamp").addEventListener("click", (event) => {
  localStorage.setItem("id", "pauseChamp");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("weirdChamp").addEventListener("click", (event) => {
  localStorage.setItem("id", "weirdChamp");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("omegalul").addEventListener("click", (event) => {
  localStorage.setItem("id", "omegalul");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("kappa").addEventListener("click", (event) => {
  localStorage.setItem("id", "kappa");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("kekW").addEventListener("click", (event) => {
  localStorage.setItem("id", "kekW");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("5head").addEventListener("click", (event) => {
  localStorage.setItem("id", "fivehead");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("monkaS").addEventListener("click", (event) => {
  localStorage.setItem("id", "monkaS");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("sadPepe").addEventListener("click", (event) => {
  localStorage.setItem("id", "sadPepe");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("pepega").addEventListener("click", (event) => {
  localStorage.setItem("id", "pepega");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("KKomrade").addEventListener("click", (event) => {
  localStorage.setItem("id", "KKomrade");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("partyParrot").addEventListener("click", (event) => {
  localStorage.setItem("id", "partyParrot");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("hackerman").addEventListener("click", (event) => {
  localStorage.setItem("id", "hackerman");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
document.getElementById("gachiBass").addEventListener("click", (event) => {
  localStorage.setItem("id", "gachiBass");
  const modalPath = path.join("file://", __dirname, "frame.html");
  let win = new BrowserWindow({ frame: false, width: 256, height: 256 });
  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
