import { useCpuContext } from "./CpuContext";
import { useGpuContext } from "./GpuContext";
import { useMemoryContext } from "./MemoryContext";
import { useStorageContext } from "./StorageContext";

const YourPC = () => {
  const { state: cpuState, dispatch: cpuDispatch } = useCpuContext();
  const { state: gpuState, dispatch: gpuDispatch } = useGpuContext();
  const { state: ramState, dispatch: ramDispatch } = useMemoryContext();
  const { state: storageState, dispatch: storageDispatch } =
    useStorageContext();

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
        <p>Gaming: 162%</p>
        <p>Work: 120%</p>
      </div>
    </div>
  );
};

export default YourPC;
