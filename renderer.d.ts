export interface IElectronAPI {
  dev: () => void;
  getAppPath: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
