import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";
import { Props } from "./App";
import { useStorageContext } from "./StorageContext";

const StorageSelection = ({ HddData, SsdData }: Props) => {
  const { state, dispatch } = useStorageContext();

  const combinedData = HddData.concat(SsdData);

  const uniqueStorage = Array.from(
    new Set(
      combinedData.map((data) => {
        const match = data.Model.match(/\d+(?=(TB|GB))/i);
        return match ? match[0] + (match[1] || "") : "";
      })
    )
  );

  const filteredBrands = Array.from(
    new Set(
      combinedData.filter(
        (data) =>
          data.Type === state.storageType &&
          data.Model.slice(data.Model.lastIndexOf(" ") + 1) === state.storage
      )
    )
  );

  const filteredUniqueBrands = Array.from(
    new Set(filteredBrands.map((data) => data.Brand))
  );

  const filteredModels = Array.from(
    new Set(
      combinedData.filter(
        (data) =>
          data.Type === state.storageType &&
          data.Model.slice(data.Model.lastIndexOf(" ") + 1) === state.storage &&
          data.Brand === state.brand
      )
    )
  );

  const filteredUniqueModels = Array.from(
    new Set(filteredModels.map((data) => data.Model))
  );

  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step4: Select Your Storage</Heading>
      <Row>
        <Label>
          HDD or SSD:
          <Select
            value={state.storageType}
            onChange={(e) =>
              dispatch({ type: "SET_STORAGE_TYPE", payload: e.target.value })
            }
          >
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
          </Select>
        </Label>
        <Label>
          Storage:
          <Select
            value={state.storage}
            onChange={(e) =>
              dispatch({ type: "SET_STORAGE", payload: e.target.value })
            }
          >
            {uniqueStorage.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          Brand:
          <Select
            value={state.brand}
            onChange={(e) =>
              dispatch({ type: "SET_BRAND", payload: e.target.value })
            }
          >
            {filteredUniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          Model:
          <Select
            value={state.model}
            onChange={(e) =>
              dispatch({ type: "SET_MODEL", payload: e.target.value })
            }
          >
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
