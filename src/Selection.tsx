import { Props } from "./App";
import CPUSelection from "./CPUselection";
import GPUSelection from "./GPUSelection";
import MemoryCardSelection from "./MemoryCardSelection";
import StorageSelection from "./StorageSelection";
import Wrapper from "./Wrapper";

const Selection = ({
  CpuData,
  GpuData,
  MemoryData,
  HddData,
  SsdData,
}: Props) => {
  return (
    <Wrapper typeof="global">
      <CPUSelection
        CpuData={CpuData}
        GpuData={GpuData}
        MemoryData={MemoryData}
        HddData={HddData}
        SsdData={SsdData}
      />
      <GPUSelection
        GpuData={GpuData}
        CpuData={CpuData}
        MemoryData={MemoryData}
        HddData={HddData}
        SsdData={SsdData}
      />
      <MemoryCardSelection
        CpuData={CpuData}
        GpuData={GpuData}
        MemoryData={MemoryData}
        HddData={HddData}
        SsdData={SsdData}
      />
      <StorageSelection
        CpuData={CpuData}
        GpuData={GpuData}
        MemoryData={MemoryData}
        HddData={HddData}
        SsdData={SsdData}
      />
    </Wrapper>
  );
};

export default Selection;
