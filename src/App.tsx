import "./App.css";
import Button from "./Button";
import CPUselection from "./CPUselection";
import GPUSelection from "./GPUSelection";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import MemoryCardSelection from "./MemoryCardSelection";
import StorageSelection from "./StorageSelection";
import YourPC from "./YourPC";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <CPUselection />
      <GPUSelection />
      <MemoryCardSelection />
      <StorageSelection />
      <Button />
      <YourPC />
    </>
  );
}

export default App;
