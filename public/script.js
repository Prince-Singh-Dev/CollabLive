// public/script.js

const socket = io();

const editor = document.getElementById("editor");

let isLocalEdit = false;

// When user types, send to server
editor.addEventListener("input", () => {
  if (!isLocalEdit) {
    socket.emit("text-change", editor.value);
  }
});

// When server sends updated text, apply it
socket.on("update-text", (content) => {
  isLocalEdit = true;
  editor.value = content;
  isLocalEdit = false;
});
