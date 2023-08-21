import { Props } from "./App";
import { useCpuContext } from "./CpuContext";
import { useGpuContext } from "./GpuContext";
import { useMemoryContext } from "./MemoryContext";
import { useStorageContext } from "./StorageContext";

const YourPC = ({ CpuData, GpuData, MemoryData, HddData, SsdData }: Props) => {
  const { state: cpuState, dispatch: cpuDispatch } = useCpuContext();
  const { state: gpuState, dispatch: gpuDispatch } = useGpuContext();
  const { state: ramState, dispatch: ramDispatch } = useMemoryContext();
  const { state: storageState, dispatch: storageDispatch } =
    useStorageContext();

  const selectedCpu = CpuData.find(
    (item) => item.Brand === cpuState.brand && item.Model === cpuState.model
  );
  const cpuBenchmark: number | undefined = selectedCpu?.Benchmark;

  const selectedGpu = GpuData.find(
    (item) => item.Brand === gpuState.brand && item.Model === gpuState.model
  );
  const gpuBenchmark: number | undefined = selectedGpu?.Benchmark;

  const selectedMemory = MemoryData.find(
    (item) => item.Brand === ramState.brand && item.Model === ramState.model
  );
  const memoryBenchmark: number | undefined = selectedMemory?.Benchmark;

  const selectedStorage =
    HddData.find(
      (item) =>
        item.Type === storageState.storageType &&
        item.Brand === storageState.brand &&
        item.Model === storageState.model
    ) ||
    SsdData.find(
      (item) => item.Brand === ramState.brand && item.Model === ramState.model
    );
  const storageBenchmark: number | undefined = selectedStorage?.Benchmark;

  const totalGamingPerformance = Math.floor(
    (gpuBenchmark || 0) * 0.6 +
      (cpuBenchmark || 0) * 0.25 +
      (memoryBenchmark || 0) * 0.125 +
      (storageBenchmark || 0) * 0.025
  );

  const totalWorkPerformance = Math.floor(
    (gpuBenchmark || 0) * 0.6 +
      (cpuBenchmark || 0) * 0.25 +
      (memoryBenchmark || 0) * 0.1 +
      (storageBenchmark || 0) * 0.5
  );

  return (
    <div>
      <h2>Your PC1</h2>
      <div>
        <h3>CPU</h3>
        <p>Brand: {cpuState.brand}</p>
        <p>Model: {cpuState.model}</p>
      </div>
      <div>
        <h3>GPU</h3>
        <p>Brand: {gpuState.brand}</p>
        <p>Model: {gpuState.model}</p>
      </div>
      <div>
        <h3>RAM</h3>
        <p>Brand: {ramState.brand}</p>
        <p>Model: {ramState.model}</p>
      </div>
      <div>
        <h3>Storage</h3>
        <p>Disk: {storageState.storageType}</p>
        <p>Storage: {storageState.storage}</p>
        <p>Brand: {storageState.brand}</p>
        <p>Model: {storageState.model}</p>
      </div>
      <div>
        <h3>Performance</h3>
        <p>Gaming: {totalGamingPerformance}%</p>
        <p>Work: {totalWorkPerformance}%</p>
      </div>
    </div>
  );
};

export default YourPC;
