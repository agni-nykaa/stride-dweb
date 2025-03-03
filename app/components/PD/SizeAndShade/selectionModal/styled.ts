import styled from '@emotion/styled';

export const ModalContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Container = styled.div<{ isOutOfStock?: boolean }>`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56px);
  overflow-y: auto;
  position: relative;
  padding-bottom: ${({ isOutOfStock }) => (isOutOfStock ? '200px' : '160px')};
`;

export const Section = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const StickySection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.05);
  z-index: 2;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const TopHorizontalLine = styled.div`
  height: 1px;
  background-color: #e5e5e5;
  width: 100%;
  margin-bottom: 14px;
`;

export const TabsSection = styled.div`
  background: white;
  margin-top: 135px;
`;

export const TabsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 0 8px;
  width: 100%;
  overflow-x: hidden;
`;

export const StickyInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`;

export const SelectedShadeName = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme?.colors?.textPrimary};
`;

export const ShadePrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme?.colors?.textPrimary};
`;
