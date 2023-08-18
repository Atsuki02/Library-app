import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";

const GPUSelection = () => {
  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step2: Select Your GPU</Heading>
      <Row>
        <Label>
          Brand:
          <Select>{/* Options for GPU brands */}</Select>
        </Label>
        <Label>
          Model:
          <Select>{/* Options for GPU models */}</Select>
        </Label>
      </Row>
    </Wrapper>
  );
};

export default GPUSelection;
