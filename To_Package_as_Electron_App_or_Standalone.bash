# Electron CLI Quickstart
npm install -g electron
npm init
npm install electron --save-dev

# In main.js
const { app, BrowserWindow } = require('electron');
function createWindow () {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
