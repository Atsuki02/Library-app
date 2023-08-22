import { Props } from "./App";
import { toast } from "react-hot-toast";
import { useStorageContext } from "../Context/StorageContext";
import { StyledScreen } from "../UI/GlobalStyles";
import Heading from "../UI/Heading";
import Label from "../UI/Label";
import Row from "../UI/Row";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import Select from "../UI/Select";

const StorageSelection = ({
  HddData,
  SsdData,
  dispatch: statusDispatch,
}: Props) => {
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

  const handleNextStep = () => {
    if (!state.brand || !state.model || !state.storageType || !state.storage) {
      toast.error("Please select all items.");
      return;
    }

    statusDispatch({ type: "finish" });
  };

  return (
    <StyledScreen>
      <Wrapper typeof="local">
        <Heading as="h2">Step4: Select Storage</Heading>
        <Row typeof="vertical">
          <Label>
            Type:
            <Select
              value={state.storageType}
              onChange={(e) =>
                dispatch({ type: "SET_STORAGE_TYPE", payload: e.target.value })
              }
            >
              <option>-</option>
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
              <option>-</option>
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
              <option>-</option>
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
              <option>-</option>
              {filteredUniqueModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </Select>
          </Label>
        </Row>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={() => statusDispatch({ type: "backStep" })}
            type="small"
          >
            Back
          </Button>
          <Button onClick={handleNextStep} type="small">
            Next
          </Button>
        </Row>
      </Wrapper>
    </StyledScreen>
  );
};

export default StorageSelection;
