import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const TopSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const BigSearchButton = styled.div`
  background-color: #D15B35;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  cursor: pointer;
  border: 1px solid #000;

  svg { font-size: 24px; }
  &:hover { filter: brightness(0.9); }
`;

export const CheckboxRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
  
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
`;

export const LoadButton = styled.button`
  background-color: #D15B35;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 12px;
  border: 1px solid #000;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover { filter: brightness(0.9); }
`;
export const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 2fr 1fr 1fr 1fr;
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 10px;
  text-align: center;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 2fr 1fr 1fr 1fr;
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  select {
    border: none;
    background: transparent;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    outline: none;
  }
`;

export const DomainPlaceholder = styled.div`
  width: 50px;
  height: 70px;
  background: #ccc;
  border: 2px solid #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 2px 2px 0px #000;

  span {
    font-size: 1.2rem;
    color: #888;
  }
`;
export const SummarySection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 50px;

  h3 { margin-bottom: 15px; font-size: 20px; }
`;

export const SummaryTable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #000;
  text-align: center;

  .header-cell {
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    &:last-child { border-right: none; }
  }

  .value-cell {
    padding: 15px 10px;
    font-weight: bold;
    font-size: 18px;
    border-right: 1px solid #000;
    &:last-child { border-right: none; }
  }
`;