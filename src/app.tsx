import { BrowserWindow, app, webContents } from "electron";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<Main />);

function myfunc() {
  window.electronAPI.dev();
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
    </div>
  );
}
