import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Selection from "./Selection";
import YourPC from "./YourPC";

export type Cpu = {
  Type: string;
  PartNumber: string;
  Brand: string;
  Model: string;
  Rank: number;
  Benchmark: number;
};

export type Gpu = Cpu;
export type Memory = Cpu;

export type Props = {
  CpuData: Cpu[];
  GpuData: Gpu[];
  MemoryData: Memory[];
};

function App() {
  const [CpuData, setCpuData] = useState<Cpu[]>([]);
  const [GpuData, setGpuData] = useState<Gpu[]>([]);
  const [MemoryData, setMemoryData] = useState<Memory[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("https://api.recursionist.io/builder/computers?type=cpu"),
      fetch("https://api.recursionist.io/builder/computers?type=gpu"),
      fetch("https://api.recursionist.io/builder/computers?type=ram"),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then(([cpuData, gpuData, memoryData]) => {
        setCpuData(cpuData);
        setGpuData(gpuData);
        setMemoryData(memoryData);
      })
      .catch((error) => {
        console.error("Data fetching error:", error);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Selection CpuData={CpuData} GpuData={GpuData} MemoryData={MemoryData} />
      <Button />
      <YourPC />
    </>
  );
}

export default App;
