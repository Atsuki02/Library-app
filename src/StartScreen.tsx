import { Props } from "./App";
import Button from "./Button";
import { StyledScreen } from "./GlobalStyles";
import Heading from "./Heading";
import Row from "./Row";

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
