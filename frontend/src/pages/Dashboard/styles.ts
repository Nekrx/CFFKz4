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
  align-items: flex-start; 
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
  gap: 20px;
  align-items: flex-start;
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