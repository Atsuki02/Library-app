import Heading from "./Heading";
import Row from "./Row";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Select from "./Select";
import { useState } from "react";
import { Props } from "./App";

const CPUSelection = ({ CpuData }: Props) => {
  const [brand, setBrand] = useState<string>("Intel");
  const [model, setModel] = useState<string>("");

  const uniqueBrands = Array.from(new Set(CpuData.map((item) => item.Brand)));
  const filterdModels = Array.from(
    new Set(CpuData.filter((CpuData) => CpuData.Brand === brand))
  );

  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step1: Select Your CPU</Heading>
      <Row>
        <Label>
          Brand:
          <Select value={brand} onChange={(e) => setBrand(e.target.value)}>
            {uniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </Label>

        <Label>
          Model:
          <Select value={model} onChange={(e) => setModel(e.target.value)}>
            {filterdModels.map((item, index) => (
              <option key={index} value={item.Model}>
                {item.Model}
              </option>
            ))}
          </Select>
        </Label>
      </Row>
    </Wrapper>
  );
};

export default CPUSelection;
