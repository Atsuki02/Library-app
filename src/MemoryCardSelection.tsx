import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";
import { Props } from "./App";
import { useMemoryContext } from "./MemoryContext";
import { StyledScreen } from "./GlobalStyles";
import Button from "./Button";
import { toast } from "react-hot-toast";

const MemoryCardSelection = ({
  MemoryData,
  dispatch: statusDispatch,
}: Props) => {
  const { state, dispatch } = useMemoryContext();

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

  const handleNextStep = () => {
    if (!state.brand || !state.model) {
      toast.error("Please select all items.");
      return;
    }

    statusDispatch({ type: "nextStep" });
  };

  return (
    <StyledScreen>
      <Wrapper typeof="local">
        <Heading as="h2">Step3: Select Memory Card</Heading>
        <Row typeof="vertical">
          <Label>
            How many?
            <Select value={state.number} onChange={handleNumberChange}>
              <option>-</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </Select>
          </Label>
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

export default MemoryCardSelection;
