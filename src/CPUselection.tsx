import Heading from "./Heading";
import Row from "./Row";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Select from "./Select";

function CPUselection() {
  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step1: Select Your CPU</Heading>
      <Row>
        <Label>
          Brand:
          <Select>
            {/* Options for CPU brands */}
            <option>ssssssssssssssssssssssss</option>
          </Select>
        </Label>

        <Label>
          Model:
          <Select>{/* Options for CPU models */}</Select>
        </Label>
      </Row>
    </Wrapper>
  );
}

export default CPUselection;
