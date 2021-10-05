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
              color="#20383d"
              height={300}
              width={300}
              timeout={5000}
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
