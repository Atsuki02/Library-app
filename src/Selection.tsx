import { CPUSelectionProps } from "./App";
import CPUSelection from "./CPUselection";
import GPUSelection from "./GPUSelection";
import MemoryCardSelection from "./MemoryCardSelection";
import StorageSelection from "./StorageSelection";
import Wrapper from "./Wrapper";

const Selection = ({ data }: CPUSelectionProps) => {
  return (
    <Wrapper typeof="global">
      <CPUSelection data={data} />
      <GPUSelection />
      <MemoryCardSelection />
      <StorageSelection />
    </Wrapper>
  );
};

export default Selection;
