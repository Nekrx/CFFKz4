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
interface DropdownItemProps {
  isHighlighted?: boolean;
}
export const DropdownItem = styled.li<DropdownItemProps>`
  padding: 12px 24px;
  color: #242424;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  background-color: ${(props) => (props.isHighlighted ? '#f5f5f5' : 'transparent')};
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