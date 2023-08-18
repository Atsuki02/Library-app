import Heading from "./Heading";
import Label from "./Label";
import Row from "./Row";
import Select from "./Select";
import Wrapper from "./Wrapper";

const StorageSelection = () => {
  return (
    <Wrapper typeof="local">
      <Heading as="h2">Step4: Select Your Storage</Heading>
      <Row>
        <Label>
          HDD or SSD:
          <Select>
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
          </Select>
        </Label>
        <Label>
          Storage:
          <input type="text" />
        </Label>
        <Label>
          Brand:
          <select>{/* Options for storage brands */}</select>
        </Label>
        <Label>
          Model:
          <Select>{/* Options for storage models */}</Select>
        </Label>
      </Row>
    </Wrapper>
  );
};

export default StorageSelection;
