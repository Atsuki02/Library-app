import { Props } from "./App";
import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";
import { useState } from "react";

const GPUSelection = ({ GpuData }: Props) => {
  const [brand, setBrand] = useState<string>("Nvidia");
  const [model, setModel] = useState<string>("");

  const uniqueBrands = Array.from(new Set(GpuData.map((item) => item.Brand)));
  const filterdModels = Array.from(
    new Set(GpuData.filter((GpuData) => GpuData.Brand === brand))
  );
  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step2: Select Your GPU</Heading>
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

export default GPUSelection;
