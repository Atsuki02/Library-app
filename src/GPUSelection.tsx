import { toast } from "react-hot-toast";
import { Props } from "./App";
import Button from "./Button";
import { StyledScreen } from "./GlobalStyles";
import { useGpuContext } from "./GpuContext";
import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";

import Wrapper from "./Wrapper";

const GPUSelection = ({ GpuData, dispatch: statusDispatch }: Props) => {
  const { state, dispatch } = useGpuContext();

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "BRAND_CHANGE", payload: e.target.value });
  };
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "MODEL_CHANGE", payload: e.target.value });
  };

  const uniqueBrands = Array.from(new Set(GpuData.map((item) => item.Brand)));
  const filterdModels = Array.from(
    new Set(GpuData.filter((GpuData) => GpuData.Brand === state.brand))
  );

  const handleNextStep = () => {
    if (!state.brand || !state.model) {
      toast.error("Please select a brand and model.");
      return;
    }

    statusDispatch({ type: "nextStep" });
  };

  return (
    <StyledScreen>
      <Wrapper typeof="local">
        <Heading as="h2">Step2: Select GPU</Heading>
        <Row typeof="vertical">
          <Label>
            Brand:
            <Select value={state.brand} onChange={handleBrandChange}>
              <option>-</option>
              {uniqueBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Model:
            <Select value={state.model} onChange={handleModelChange}>
              <option>-</option>
              {filterdModels.map((item, index) => (
                <option key={index} value={item.Model}>
                  {item.Model}
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

export default GPUSelection;
