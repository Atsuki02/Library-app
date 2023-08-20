import { useState } from "react";
import { Props } from "./App";
import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";

const MemoryCardSelection = ({ MemoryData }: Props) => {
  const [number, setNumber] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const uniqueBrands = Array.from(
    new Set(MemoryData.map((item) => item.Brand))
  );

  const filterdModels = Array.from(
    new Set(
      MemoryData.filter(
        (MemoryData) =>
          MemoryData.Brand === brand &&
          Number(
            MemoryData.Model.substring(
              MemoryData.Model.indexOf("x") - 2,
              MemoryData.Model.indexOf("x")
            ).trim()
          ) === number
      )
    )
  );

  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step3: Select Your Memory Card</Heading>
      <Row>
        <Label>
          How many?
          <Select
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Select>
        </Label>
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

export default MemoryCardSelection;
