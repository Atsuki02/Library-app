import CPUselection from "./CPUselection";
import GPUSelection from "./GPUSelection";
import MemoryCardSelection from "./MemoryCardSelection";
import StorageSelection from "./StorageSelection";
import Wrapper from "./Wrapper";

function Selection() {
  return (
    <Wrapper typeof="global">
      <CPUselection />
      <GPUSelection />
      <MemoryCardSelection />
      <StorageSelection />
    </Wrapper>
  );
}

export default Selection;
