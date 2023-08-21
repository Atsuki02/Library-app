import Heading from "./Heading";
import Row from "./Row";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Select from "./Select";
import { useReducer } from "react";
import { Props } from "./App";

type State = {
  brand: string;
  model: string;
};

type Action =
  | { type: string; payload: string }
  | { type: string; payload: string };

const BRAND_CHANGE = "BRAND_CHANGE";
const MODEL_CHANGE = "MODEL_CHANGE";

const inititalState = {
  brand: "Intel",
  model: "Core i9-9900KS",
};

const reducer = (state: State, action: Action): State => {
  console.log(action);
  switch (action.type) {
    case BRAND_CHANGE:
      return { ...state, brand: action.payload };
    case MODEL_CHANGE:
      return { ...state, model: action.payload };
    default:
      return state;
  }
};

const CPUSelection = ({ CpuData }: Props) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: BRAND_CHANGE, payload: e.target.value });
  };
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: MODEL_CHANGE, payload: e.target.value });
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

export default CPUSelection;
