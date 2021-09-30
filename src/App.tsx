import { useState, useEffect } from "react";
import Wrap from "Components/Layouts/Wrap";

import Loader from "react-loader-spinner";
import styled from "styled-components";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <Content>
            <Loader
              type="Puff"
              color="#007bbb"
              height={128}
              width={128}
              timeout={3000}
            />
          </Content>
        </>
      ) : (
        <>
          <Wrap />
        </>
      )}
    </div>
  );
}

export default App;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
