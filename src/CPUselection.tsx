import Heading from "./Heading";
import Row from "./Row";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Select from "./Select";
import { Props } from "./App";
import { useCpuContext } from "./CpuContext";
import Button from "./Button";
import { StyledScreen } from "./GlobalStyles";
import toast from "react-hot-toast";

const CPUSelection = ({ CpuData, dispatch: statusDispatch }: Props) => {
  const { state, dispatch } = useCpuContext();

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "BRAND_CHANGE", payload: e.target.value });
  };
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "MODEL_CHANGE", payload: e.target.value });
  };

  const uniqueBrands = Array.from(new Set(CpuData.map((item) => item.Brand)));
  const filterdModels = Array.from(
    new Set(CpuData.filter((CpuData) => CpuData.Brand === state.brand))
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
        <Heading as="h2">Step1: Select CPU</Heading>
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
        <Row style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleNextStep} type="small">
            Next
          </Button>
        </Row>
      </Wrapper>
    </StyledScreen>
  );
};

export default CPUSelection;
