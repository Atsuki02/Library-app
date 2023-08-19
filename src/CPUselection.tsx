import Heading from "./Heading";
import Row from "./Row";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Select from "./Select";
import { useState } from "react";
import { CPUSelectionProps } from "./App";

const CPUSelection = ({ data }: CPUSelectionProps) => {
  const [brand, setBrands] = useState<string>("Intel");
  const [model, setModels] = useState<string>("");

  const uniqueBrands = Array.from(new Set(data.map((item) => item.Brand)));
  const filterdModels = Array.from(
    new Set(data.filter((data) => data.Brand === brand))
  );

  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step1: Select Your CPU</Heading>
      <Row>
        <Label>
          Brand:
          <Select value={brand} onChange={(e) => setBrands(e.target.value)}>
            {uniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </Label>

        <Label>
          Model:
          <Select value={model} onChange={(e) => setModels(e.target.value)}>
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
