import { useReducer } from "react";
import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";
import { Props } from "./App";

type State = {
  number: number;
  brand: string;
  model: string;
};

type Action =
  | { type: "SET_NUMBER"; payload: number }
  | { type: "SET_BRAND"; payload: string }
  | { type: "SET_MODEL"; payload: string };

const initialState: State = {
  number: 1,
  brand: "G.SKILL",
  model: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_MODEL":
      return { ...state, model: action.payload };
    default:
      return state;
  }
};

const MemoryCardSelection = ({ MemoryData }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uniqueBrands = Array.from(
    new Set(MemoryData.map((item) => item.Brand))
  );

  const filterdModels = Array.from(
    new Set(
      MemoryData.filter(
        (MemoryData) =>
          MemoryData.Brand === state.brand &&
          Number(
            MemoryData.Model.substring(
              MemoryData.Model.indexOf("x") - 2,
              MemoryData.Model.indexOf("x")
            ).trim()
          ) === state.number
      )
    )
  );

  const handleNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_NUMBER", payload: Number(e.target.value) });
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_BRAND", payload: e.target.value });
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_MODEL", payload: e.target.value });
  };

  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step3: Select Your Memory Card</Heading>
      <Row>
        <Label>
          How many?
          <Select value={state.number} onChange={handleNumberChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Select>
        </Label>
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

export default MemoryCardSelection;
