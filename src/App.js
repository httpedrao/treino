import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: var(--dark-grey);
  height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default App;
