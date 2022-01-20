import styled from "styled-components";
import { Logo } from "./components/Logo";

function App() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;

  background-color: #275dad;
`

export default App;
