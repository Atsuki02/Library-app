import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";

const MemoryCardSelection = () => {
  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step3: Select Your Memory Card</Heading>
      <Row>
        <Label>
          How many?
          <input type="number" />
        </Label>
        <Label>
          Brand:
          <select>{/* Options for memory card brands */}</select>
        </Label>
        <Label>
          Model:
          <Select>{/* Options for memory card models */}</Select>
        </Label>
      </Row>
    </Wrapper>
  );
};

export default MemoryCardSelection;
