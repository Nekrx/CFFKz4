import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Search } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string;
  onSearch?: () => void; 
}

const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100%'};
  min-width: 250px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 45px 10px 15px;
  background-color: #ffffff;   
  border: 2px solid #000000;  
  border-radius: 12px;         
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-align: center;

  &::placeholder {
    color: #666666;
    font-weight: normal;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 15px;
  cursor: pointer;
  color: #000000;
  transition: transform 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.2);
  }
`;

const Label = styled.span`
  font-size: 14px;
  color: #000000;
  margin-top: 4px;
  margin-left: 10px;
  font-family: sans-serif;
`;

export const CustomSearchInput: React.FC<InputProps> = ({ label, width, onSearch, ...rest }) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
    if (rest.onKeyDown) {
      rest.onKeyDown(e);
    }
  };

 return (
    <Container width={width}>
      <InputWrapper>
        <StyledInput {...rest} onKeyDown={handleKeyDown} />
        <SearchIcon onClick={onSearch}>
          <Search size={20} strokeWidth={2.5} /> 
        </SearchIcon>
        
      </InputWrapper>
      {label && <Label>{label}</Label>}
    </Container>
  );
};