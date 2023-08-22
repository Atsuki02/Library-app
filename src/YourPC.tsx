import { Props } from "./App";
import { useCpuContext } from "./CpuContext";
import { StyledScreen } from "./GlobalStyles";
import { useGpuContext } from "./GpuContext";
import Heading from "./Heading";
import { useMemoryContext } from "./MemoryContext";
import Row from "./Row";
import { useStorageContext } from "./StorageContext";
import Wrapper from "./Wrapper";

const YourPC = ({ CpuData, GpuData, MemoryData, HddData, SsdData }: Props) => {
  const { state: cpuState } = useCpuContext();
  const { state: gpuState } = useGpuContext();
  const { state: ramState } = useMemoryContext();
  const { state: storageState } = useStorageContext();

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
    <StyledScreen>
      <Wrapper typeof="global">
        <Heading as="h1">Your PC</Heading>
        <Row>
          <Heading as="h3">CPU</Heading>
          <p>Brand: {cpuState.brand}</p>
          <p>Model: {cpuState.model}</p>
        </Row>
        <Row>
          <Heading as="h3">GPU</Heading>
          <p>Brand: {gpuState.brand}</p>
          <p>Model: {gpuState.model}</p>
        </Row>
        <Row>
          <Heading as="h3">RAM</Heading>
          <p>Brand: {ramState.brand}</p>
          <p>Model: {ramState.model}</p>
        </Row>
        <Row>
          <Heading as="h3">Storage</Heading>
          <p>Disk: {storageState.storageType}</p>
          <p>Storage: {storageState.storage}</p>
          <p>Brand: {storageState.brand}</p>
          <p>Model: {storageState.model}</p>
        </Row>
        <Row>
          <Heading as="h2">Performance</Heading>
          <p>Gaming: {totalGamingPerformance}%</p>
          <p>Work: {totalWorkPerformance}%</p>
        </Row>
      </Wrapper>
    </StyledScreen>
  );
};

export default YourPC;
