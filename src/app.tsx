import { ipcRenderer } from "electron";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<Main />);

function Main() {
  const [appPath, setappPath] = useState();
  const [devToolsOpen, setDevToolsOpen] = useState(false);

  function enableDev() {
    setDevToolsOpen(!devToolsOpen);
    ipcRenderer.send("dev", !devToolsOpen);
  }

  async function getPath() {
    const appPath = await ipcRenderer.invoke("getAppPath");
    console.log(appPath);
    setappPath(appPath);
  }
  return (
    <>
      <nav className="w-full p-2.5 bg-sky-900  gap-5 flex justify-center items-center">
        <button
          className="px-3 py-1 bg-sky-800 border border-sky-500 rounded-md min-w-20"
          onClick={() => {
            enableDev();
          }}
        >
          Dev Tools
        </button>
        <button
          className="px-3 py-1 bg-sky-800 border border-sky-500 rounded-md min-w-20"
          onClick={() => {
            getPath();
          }}
        >
          Get Path
        </button>
      </nav>
      <div className="flex flex-col p-2.5">{appPath}</div>
    </>
  );
}
