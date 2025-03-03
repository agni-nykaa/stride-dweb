import styled from '@emotion/styled';
import Envelope from '../assets/Envelope';

const WrapperStyle = styled.div`
  background-color: rgb(58, 64, 71);
  padding: 10px;
`;

const TextStyle = styled.span`
  color: white;
  margin-left: 10px;
`;

const DivStyle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  display: flex;
  align-items: center;
`;

const NewsLetter = () => (
  <WrapperStyle>
    <DivStyle>
      <Envelope />
      <TextStyle>Get special discount on your inbox</TextStyle>
    </DivStyle>
    <div>
      <input
        type="text"
        placeholder="Enter your email"
      />
      <button>Subscribe</button>
    </div>
  </WrapperStyle>
);

export default NewsLetter;
