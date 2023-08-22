import { Props } from "./App";
import { useCpuContext } from "../Context/CpuContext";
import { StyledScreen } from "../UI/GlobalStyles";
import { useGpuContext } from "../Context/GpuContext";
import { useMemoryContext } from "../Context/MemoryContext";
import { useStorageContext } from "../Context/StorageContext";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import Row from "../UI/Row";
import Wrapper from "../UI/Wrapper";

const YourPC = ({
  CpuData,
  GpuData,
  MemoryData,
  HddData,
  SsdData,
  dispatch: statusDispatch,
}: Props) => {
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

  function handleRestart() {
    statusDispatch({ type: "restart" });
    cpuState.brand = "";
    cpuState.model = "";
    gpuState.brand = "";
    gpuState.model = "";
    ramState.brand = "";
    ramState.model = "";
    ramState.number = 0;
    storageState.storageType = "";
    storageState.storage = "";
    storageState.brand = "";
    storageState.model = "";
  }

  return (
    <StyledScreen>
      <Wrapper typeof="global">
        <Heading as="h1">Your PC</Heading>
        <Row typeof="mobile">
          <Heading as="h3">CPU</Heading>
          <Heading as="h4">Brand: {cpuState.brand}</Heading>
          <Heading as="h4">Model: {cpuState.model}</Heading>
        </Row>
        <Row typeof="mobile">
          <Heading as="h3">GPU</Heading>
          <Heading as="h4">Brand: {gpuState.brand}</Heading>
          <Heading as="h4">Model: {gpuState.model}</Heading>
        </Row>
        <Row typeof="mobile">
          <Heading as="h3">RAM</Heading>
          <Heading as="h4">Brand: {ramState.brand}</Heading>
          <Heading as="h4">Model: {ramState.model}</Heading>
        </Row>
        <Row typeof="mobile">
          <Heading as="h3">Storage</Heading>
          <Heading as="h4">Disk: {storageState.storageType}</Heading>
          <Heading as="h4">Storage: {storageState.storage}</Heading>
          <Heading as="h4">Brand: {storageState.brand}</Heading>
          <Heading as="h4">Model: {storageState.model}</Heading>
        </Row>
        <Row typeof="mobile">
          <Heading as="h3">Performance</Heading>
          <Heading as="h2" style={{ paddingRight: 20, color: "#97e80b" }}>
            Gaming: {totalGamingPerformance}%
          </Heading>
          <Heading
            as="h2"
            style={{
              color: "#97e80b",
              paddingRight: 40,
              paddingBottom: window.innerWidth > 768 ? "0px" : "20px",
            }}
          >
            Work: {totalWorkPerformance}%
          </Heading>
          <Button onClick={handleRestart} type="small">
            Try again
          </Button>
        </Row>
      </Wrapper>
    </StyledScreen>
  );
};

export default YourPC;
