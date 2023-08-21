import Heading from "./Heading";
import Row from "./Row";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Select from "./Select";

import { Props } from "./App";
import { useCpuContext } from "./CpuContext";

const CPUSelection = ({ CpuData }: Props) => {
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

  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step1: Select Your CPU</Heading>
      <Row>
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
    </Wrapper>
  );
};

export default CPUSelection;
