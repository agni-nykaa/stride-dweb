import styled from '@emotion/styled';

export const ProgressContainer = styled.div`
  margin-bottom: 12px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  width: 100%;
  justify-content: space-around;
  height: 30px;
  gap: 10px;
`;

export const ProgressBar = styled.input<{
  sliderValue: number;
  isFullScreenEnabled?: boolean;
}>`
  width: 100%;
  background-color: #acb2b7;
  outline: none;
  -webkit-appearance: none;
  border-radius: 8px;
  height: 7px;
  transition: background 450ms ease-in;
  background: ${({ sliderValue }) =>
    `linear-gradient(to right, #ACB2B7 ${sliderValue}%, #fff 0%, #fff 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: white;
  }
`;

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;

export const Timer = styled.span`
  color: white;
  font-size: 14px;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
