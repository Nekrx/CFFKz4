import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  margin-bottom: 30px;
  background-color: transparent;
`;

export const LogoContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const UserMenuContainer = styled.div`
  position: relative;
`;

export const UserGreeting = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  svg {
    font-size: 22px;
  }
`;

export const LogoutDropdown = styled.div`
  position: absolute; 
  top: 100%; 
  right: 0; 
  margin-top: 10px;
  background-color: #fff; 
  border: 1px solid #000; 
  border-radius: 12px;
  padding: 10px 20px; 
  display: flex; 
  align-items: center; 
  gap: 10px;
  cursor: pointer; 
  font-weight: bold; 
  z-index: 10;

  &:hover { 
    background-color: #f0f0f0; 
  }
`;