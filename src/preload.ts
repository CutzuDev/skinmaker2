// See the Electron documentation for details on how to use preload scripts:
import { contextBridge, ipcRenderer } from "electron";


// contextBridge.exposeInMainWorld("electronAPI", {
//   dev: () => {
//     ipcRenderer.send("dev");
//   },
// });

window.electronAPI = {
  dev: () => {
    ipcRenderer.send("dev");
  },
  getAppPath: () => {
    ipcRenderer.send("getAppPath")
  }
};