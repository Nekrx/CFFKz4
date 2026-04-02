import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 20px 40px 20px; 
  background-color: transparent; 
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  gap: 15px; 
  margin-bottom: 20px; 
  padding: 0; 
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px; 

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px; 
    font-weight: bold;
    color: #000;
    cursor: pointer;

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #000; 
      border: 2px solid #000;
    }
  }
`;

export const LoadButton = styled.button<{ disabled?: boolean }>`
  background-color: #D15B35;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 40px;
  border-radius: 12px;
  border: 2px solid #000;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.2s;
  box-shadow: 2px 2px 0px #000;
  &:hover {
    filter: ${(props) => (props.disabled ? 'none' : 'brightness(0.9)')};
    box-shadow: ${(props) => (props.disabled ? '2px 2px 0px #000' : '1px 1px 0px #000')};
    transform: ${(props) => (props.disabled ? 'none' : 'translate(1px, 1px)')};
  }
`;

export const SelectedListDisplay = styled.div<{ hasList: boolean }>`
  background-color: ${(props) => (props.hasList ? '#eaddcf' : '#f5f5f5')};
  border: 2px dashed ${(props) => (props.hasList ? '#D15B35' : '#999')};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.hasList ? '#000' : '#666')};
  text-align: center;
  width: 100%;
  max-width: 400px;
  span {
    color: #D15B35;
    font-size: 18px;
    margin-left: 5px;
    text-decoration: underline;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 3fr 1fr 1fr 1fr 40px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding: 10px 15px;
  align-items: center;
  text-align: center;
  div:nth-child(3) { text-align: left; }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 3fr 1fr 1fr 1fr 40px;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 5px 15px;
  text-align: center;
  font-size: 16px;
  z-index: 2;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 2px 2px 0px #000;
  }
  div:nth-child(3) { text-align: left; }
  img {
    width: 45px;
    height: 60px;
    border: 2px solid #000;
    border-radius: 6px;
    margin: 0 auto;
    object-fit: cover;
  }
  .toggle-btn {
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    color: #000;
    user-select: none;
    &:hover { color: #D15B35; }
  }
`;

export const CardRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  position: relative;
`;

export const SubMenuBox = styled.div<{ columns: number }>`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 12px;
  margin: -10px 10px 10px 10px; 
  padding: 20px 15px 15px 15px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  text-align: center;
  position: relative;
  z-index: 1;
  box-shadow: 2px 2px 0px #000; 
  .col {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span:first-child { font-size: 14px; font-weight: bold; color: #666; }
    span:last-child { font-size: 16px; font-weight: bold; color: #000; }
  }
`;

export const SummarySection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 40px;
  margin-bottom: 60px;
  h3 { font-size: 20px; font-weight: bold; color: #000; margin-bottom: 15px; }
`;

export const SummaryTable = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  background-color: #eaddcf; 
  border: 2px solid #000;
  border-radius: 12px;
  text-align: center;
  padding: 20px 0;
  box-shadow: 2px 2px 0px #000;
  .col {
    display: flex;
    flex-direction: column;
    gap: 10px;
    span { font-size: 16px; font-weight: bold; color: #000; }
  }
`;