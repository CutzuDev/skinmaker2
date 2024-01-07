import { ipcRenderer } from "electron";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<Main />);

function Main() {
  const [consoleList, setConsoleList] = useState([]);
  const [appPath, setappPath] = useState();
  const [filePath, setFilePath] = useState();
  const [devToolsOpen, setDevToolsOpen] = useState(false);

  function enableDev() {
    setDevToolsOpen(!devToolsOpen);
    ipcRenderer.send("dev", !devToolsOpen);
  }

  // async function getFilePath() {
  //   const filePath = await ipcRenderer.invoke("get-txt-file");
  //   setFilePath(filePath);
  //   setConsoleList([...consoleList, filePath]);
  // }
  async function getFilePath() {
    const filePath = await ipcRenderer.invoke("get-txt-file");
    // setFilePath(filePath);
    // setConsoleList([...consoleList, filePath]);
  }

  async function getPath() {
    const appPath = await ipcRenderer.invoke("getAppPath");
    setappPath(appPath);
    setConsoleList([...consoleList, appPath]);
  }
  return (
    <>
      <nav className="w-full p-2.5 bg-sky-900 gap-5 flex justify-center items-center">
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
        <button
          className="px-3 py-1 bg-sky-800 border border-sky-500 rounded-md min-w-20"
          onClick={() => {
            getFilePath();
          }}
        >
          Get File Path
        </button>
      </nav>
      <div className="flex flex-col overflow-y-scroll p-2.5">
        {consoleList.map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </div>
    </>
  );
}
