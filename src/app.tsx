import { BrowserWindow, app, ipcRenderer, webContents } from "electron";
import { readFileSync } from "fs";
import path from "path";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<Main />);
// readFileSync(path.join(app.getAppPath(), "./file.txt"));

function myfunc() {
  window.electronAPI.dev();
}
async function testFunc() {
  // console.log(window.electronAPI.getAppPath());
  // console.log(await app.getPath("appData"));
  const appPath = await ipcRenderer.invoke("getAppPath")
  console.log(appPath)
}

function Main() {
  return (
    <div>
      <button
        className="bg-gray-600 border-gray-900 border rounded-md"
        onClick={() => {
          myfunc();
        }}
      >
        Hi
      </button>
      <button
        className="bg-gray-600 border-gray-900 border rounded-md"
        onClick={() => {
          testFunc();
        }}
      >
        TEST
      </button>
    </div>
  );
}
