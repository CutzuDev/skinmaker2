export interface IElectronAPI {
  dev: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
