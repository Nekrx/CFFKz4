import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 500px;
`;

interface BoxProps {
  isOpen: boolean;
}

export const SearchButtonBox = styled.div<BoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #c05030;
  border-radius: ${(props) => (props.isOpen ? '16px 16px 0 0' : '16px')};
  cursor: text;
  transition: all 0.2s ease-in-out;

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    outline: none;

    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .icon-search {
    color: #333;
    cursor: pointer;
  }

  &:hover {
    background-color: #d15c3c;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid #ddd;
  border-top: none;
  list-style: none;
  z-index: 100;
  padding: 8px 0;
  margin: 0;
  max-height: 250px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  padding: 12px 24px;
  color: #242424;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CreateItem = styled(DropdownItem)`
  color: #c05030;
  font-weight: bold;
  border-top: 1px solid #eee;

  strong {
    color: #242424;
    text-decoration: underline;
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

//Pop-up
export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  h3 {
    color: #c05030;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    color: #555;
  }

  button {
    margin-top: 1.5rem;
    padding: 10px 25px;
    background: #c05030;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
      background: #a04020;
    }
  }
`;