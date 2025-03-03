/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
// import { buttonStyle } from "./$slug/ snsp/$productId";

const CenterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Index() {
  return (
    <CenterStyle>
      {/* <button css={buttonStyle}>Test</button> */}
      <h1>Welcome to Remix</h1>
    </CenterStyle>
  );
}
