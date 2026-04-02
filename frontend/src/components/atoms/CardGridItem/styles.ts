import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 2px solid #1a1a1a;
  padding: 15px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 8px 8px 0px #000; 
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 2.5 / 3.5;
  object-fit: cover;
  border: 1px solid #1a1a1a;
  border-radius: 4px;
  margin-bottom: 15px;
  background-color: #f0f0f0;
`;

export const CardImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 2.5 / 3.5;
  background-color: #ccc;
  border: 1px solid #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border-radius: 4px;
  span {
    font-size: 3rem;
    color: #888;
  }
`;

export const CardName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  width: 100%;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 20px;
  width: 100%;
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