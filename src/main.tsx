import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.tsx";
import { CpuProvider } from "./Context/CpuContext.tsx";
import { GpuProvider } from "./Context/GpuContext.tsx";
import { MemoryProvider } from "./Context/MemoryContext.tsx";
import { StorageProvider } from "./Context/StorageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CpuProvider>
      <GpuProvider>
        <MemoryProvider>
          <StorageProvider>
            <App />
          </StorageProvider>
        </MemoryProvider>
      </GpuProvider>
    </CpuProvider>
  </React.StrictMode>
);
