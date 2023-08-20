import { Props } from "./App";
import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";
import { useState } from "react";

const StorageSelection = ({ HddData, SsdData }: Props) => {
  const combinedData = HddData.concat(SsdData);
  const [storageType, setStorageType] = useState<string>("HDD");
  const [storage, setStorage] = useState<string>("12TB");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const uniqueStorage = Array.from(
    new Set(
      storageType === "HDD"
        ? HddData.map((data) => {
            const match = data.Model.match(/\d+(?=(TB|GB))/i);
            return match ? match[0] + (match[1] || "") : "";
          })
        : SsdData.map((data) => {
            const lastSpaceIndex = data.Model.lastIndexOf(" ");
            return lastSpaceIndex !== -1
              ? data.Model.slice(lastSpaceIndex + 1)
              : "";
          })
    )
  );

  const filteredBrands = Array.from(
    new Set(
      combinedData.filter(
        (combinedData) =>
          combinedData.Type === storageType &&
          combinedData.Model.slice(combinedData.Model.lastIndexOf(" ") + 1) ===
            storage
      )
    )
  );

  const filteredUniqueBrands = Array.from(
    new Set(filteredBrands.map((data) => data.Brand))
  );

  const filteredModels = Array.from(
    new Set(
      combinedData.filter(
        (combinedData) =>
          combinedData.Type === storageType &&
          combinedData.Model.slice(combinedData.Model.lastIndexOf(" ") + 1) ===
            storage &&
          combinedData.Brand === brand
      )
    )
  );

  const filteredUniqueModels = Array.from(
    new Set(filteredModels.map((data) => data.Model))
  );

  console.log(filteredModels);

  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step4: Select Your Storage</Heading>
      <Row>
        <Label>
          HDD or SSD:
          <Select
            value={storageType}
            onChange={(e) => setStorageType(e.target.value)}
          >
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
          </Select>
        </Label>
        <Label>
          Storage:
          <Select value={storage} onChange={(e) => setStorage(e.target.value)}>
            {uniqueStorage.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          Brand:
          <Select value={brand} onChange={(e) => setBrand(e.target.value)}>
            {filteredUniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          Model:
          <Select value={model} onChange={(e) => setModel(e.target.value)}>
            {filteredUniqueModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </Select>
        </Label>
      </Row>
    </Wrapper>
  );
};

export default StorageSelection;
