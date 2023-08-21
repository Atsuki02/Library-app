import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CpuProvider } from "./CpuContext.tsx";
import { GpuProvider } from "./GpuContext.tsx";
import { MemoryProvider } from "./MemoryContext.tsx";
import { StorageProvider } from "./StorageContext.tsx";

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
