// See the Electron documentation for details on how to use preload scripts:
const { contextBridge, ipcRenderer } = require("electron");


// contextBridge.exposeInMainWorld("electronAPI", {
//   dev: () => {
//     ipcRenderer.send("dev");
//   },
// });

window.electronAPI = {
  dev: () => {
    ipcRenderer.send("dev");
  },
};