import { Props } from "./App";
import { StyledScreen } from "../UI/GlobalStyles";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import Row from "../UI/Row";

type Dispatch = Pick<Props, "dispatch">;

function StartScreen({ dispatch }: Dispatch) {
  const handleStart = () => {
    dispatch({ type: "start" });
  };

  return (
    <StyledScreen>
      <Row typeof="vertical">
        <Heading as="h1">Welcome to computer builder</Heading>
        <Button onClick={handleStart} type="large">
          Let's start
        </Button>
      </Row>
    </StyledScreen>
  );
}

export default StartScreen;
