import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: transparent; 
  padding: 40px 20px;
`;
export const FiltersRow = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  gap: 40px; 
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  background-color: transparent; 
`;
export const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  width: 450px;
`;
export const RightSelectsColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  margin-top: -20px; 
`;
export const CardGrid = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 40px;
  padding: 20px;
`;
export const TopSelectWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || '120px'};
`;
export const TopSelectLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #000;
  text-align: left;
`;
export const TopSelectBox = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  &::after {
    content: 'V';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: bold;
    color: #000;
    pointer-events: none;
  }
  select {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 12px;
    padding: 0 30px 0 15px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    appearance: none;
    outline: none;
  }
`;
export const MultiSelectWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || '120px'};
  position: relative;
`;
export const MultiSelectLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #000;
  text-align: left;
`;
export const MultiSelectButton = styled.div`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 12px;
  padding: 0 15px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  height: 40px;
  &:hover {
    background-color: #f5f5f5;
  }
  &::after {
    content: 'V';
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }
`;
export const CheckboxDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  min-width: 150px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 12px;
  z-index: 10;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
`;
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: pointer;

  input[type="checkbox"] {
    cursor: pointer;
    width: 16px;
    height: 16px;
    accent-color: #D15B35;
  }
`;
export const WideDropdown = styled(CheckboxDropdown)`
  min-width: 260px;
  gap: 8px;
`;

export const SingleOptionItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  padding: 4px 0;
  &:hover {
    color: #D15B35;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #000;
  text-align: center;
  max-width: 400px;
  box-shadow: 4px 4px 0px #000;
  h3 {
    color: #D15B35;
    margin-bottom: 1rem;
    font-size: 24px;
  }
  p {
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  button {
    margin-top: 1.5rem;
    padding: 10px 25px;
    background: #D15B35;
    color: #000;
    border: 2px solid #000;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;