import { Props } from "./App";
import CPUSelection from "./CPUselection";
import GPUSelection from "./GPUSelection";
import MemoryCardSelection from "./MemoryCardSelection";
import StorageSelection from "./StorageSelection";
import Wrapper from "./Wrapper";

const Selection = ({ CpuData, GpuData, MemoryData }: Props) => {
  return (
    <Wrapper typeof="global">
      <CPUSelection
        CpuData={CpuData}
        GpuData={GpuData}
        MemoryData={MemoryData}
      />
      <GPUSelection
        GpuData={GpuData}
        CpuData={CpuData}
        MemoryData={MemoryData}
      />
      <MemoryCardSelection
        CpuData={CpuData}
        GpuData={GpuData}
        MemoryData={MemoryData}
      />
      <StorageSelection />
    </Wrapper>
  );
};

export default Selection;
