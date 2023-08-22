import { useEffect, useState } from "react";
import { useReducer } from "react";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "../UI/GlobalStyles";
import YourPC from "./YourPC";
import CPUSelection from "./CPUselection";
import GPUSelection from "./GPUSelection";
import MemoryCardSelection from "./MemoryCardSelection";
import StorageSelection from "./StorageSelection";
import StartScreen from "./StartScreen";

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
export type Hdd = Cpu;
export type Ssd = Cpu;

export type Props = {
  CpuData: Cpu[];
  GpuData: Gpu[];
  MemoryData: Memory[];
  HddData: Hdd[];
  SsdData: Ssd[];
  dispatch: React.Dispatch<Action>;
};

const initialState = {
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "ready",
  step: 1,
};

type State = {
  status: string;
  step: number;
};

type Action =
  | { type: "dataReceived"; payload: string }
  | { type: "dataFailed"; payload: string }
  | { type: "start" }
  | { type: "nextStep" }
  | { type: "backStep" }
  | { type: "finish" }
  | { type: "restart" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", step: 1 };
    case "nextStep":
      return { ...state, step: state.step + 1 };
    case "backStep":
      return { ...state, step: state.step - 1 };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return initialState;
    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [CpuData, setCpuData] = useState<Cpu[]>([]);
  const [GpuData, setGpuData] = useState<Gpu[]>([]);
  const [MemoryData, setMemoryData] = useState<Memory[]>([]);
  const [HddData, setHddData] = useState<Hdd[]>([]);
  const [SsdData, setSsdData] = useState<Ssd[]>([]);

  const [{ status, step }, dispatch]: [State, React.Dispatch<Action>] =
    useReducer(reducer, initialState);

  useEffect(() => {
    Promise.all([
      fetch("https://api.recursionist.io/builder/computers?type=cpu"),
      fetch("https://api.recursionist.io/builder/computers?type=gpu"),
      fetch("https://api.recursionist.io/builder/computers?type=ram"),
      fetch("https://api.recursionist.io/builder/computers?type=hdd"),
      fetch("https://api.recursionist.io/builder/computers?type=ssd"),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then(([cpuData, gpuData, memoryData, hddData, ssdData]) => {
        setCpuData(cpuData);
        setGpuData(gpuData);
        setMemoryData(memoryData);
        setHddData(hddData);
        setSsdData(ssdData);
      })
      .catch((error) => {
        console.error("Data fetching error:", error);
      });
  }, []);

  const componentProps = {
    CpuData,
    GpuData,
    MemoryData,
    HddData,
    SsdData,
    dispatch,
  };

  return (
    <>
      <GlobalStyles />
      {status === "ready" && <StartScreen dispatch={dispatch} />}
      {status === "active" && (
        <>
          {step === 1 && <CPUSelection {...componentProps} />}
          {step === 2 && <GPUSelection {...componentProps} />}
          {step === 3 && <MemoryCardSelection {...componentProps} />}
          {step === 4 && <StorageSelection {...componentProps} />}
        </>
      )}
      {status === "finished" && <YourPC {...componentProps} />}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </>
  );
}

export default App;
