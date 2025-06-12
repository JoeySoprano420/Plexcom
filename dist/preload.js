// /dist/preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('plexAPI', {
  launchModule: (name) => {
    console.log(`Launching module: ${name}`);
    // You could hook this to shell execution or simulation
  }
});
