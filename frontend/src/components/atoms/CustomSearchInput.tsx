import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface InputProps {
  label?: string;
  width?: string;
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
  pointer-events: none;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
`;

const Label = styled.span`
  font-size: 14px;
  color: #000000;
  margin-top: 4px;
  margin-left: 10px;
  font-family: sans-serif;
`;

export const CustomSearchInput: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ label, width, ...rest }) => {
  return (
    <Container width={width}>
      <InputWrapper>
        <StyledInput {...rest} />
        <SearchIcon>🔍</SearchIcon>
      </InputWrapper>
      {label && <Label>{label}</Label>}
    </Container>
  );
};