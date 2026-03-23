import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 150px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: #ccc; 
     aspect-ratio: 2.5/3.5;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 12px;
  padding: 5px 15px;
  width: 120px;
  user-select: none;

  span {
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    
    &:hover {
      color: #D15B35;
    }
  }
`;