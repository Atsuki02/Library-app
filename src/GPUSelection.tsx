import { Props } from "./App";
import { useCpuContext } from "./CpuContext";
import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";

const GPUSelection = ({ GpuData }: Props) => {
  const { state, dispatch } = useCpuContext();

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
  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step2: Select Your GPU</Heading>
      <Row>
        <Label>
          Brand:
          <Select value={state.brand} onChange={handleBrandChange}>
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
