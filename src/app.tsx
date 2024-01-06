import { ipcRenderer } from "electron";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<Main />);

function Main() {
  const openDevTools = () => {
    ipcRenderer.send("devtools");
  };
  return (
    <div>
      <div className="w-10 h-10 bg-red-500">
        <button
          onClick={() => {
            openDevTools();
          }}
        >
          Hi
        </button>
      </div>
    </div>
  );
}
