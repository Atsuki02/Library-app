import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Selection from "./Selection";
import YourPC from "./YourPC";

export type CPU = {
  Type: string;
  PartNumber: string;
  Brand: string;
  Model: string;
  Rank: string;
  Benchmark: number;
};

export type CPUSelectionProps = {
  data: CPU[];
};

function App() {
  const [data, setData] = useState<CPU[]>([]);

  useEffect(() => {
    fetch("https://api.recursionist.io/builder/computers?type=cpu")
      .then((res) => res.json())
      .then((data: CPU[]) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Selection data={data} />
      <Button />
      <YourPC />
    </>
  );
}

export default App;
