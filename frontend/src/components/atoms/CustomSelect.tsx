import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface SelectProps {
  label?: string;
  width?: string;
}

const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100%'};
  min-width: 120px;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 15px;
  background-color: #ffffff;
  border: 2px solid #000000; 
  border-radius: 12px;      
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  appearance: none;         
  cursor: pointer;
  text-align: center;      

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const ArrowIcon = styled.span`
  position: absolute;
  right: 15px;
  pointer-events: none;
  font-weight: bold;
  font-size: 14px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #000000;
  margin-top: 4px;
  margin-left: 10px;
  font-family: sans-serif;
`;

export const CustomSelect: React.FC<SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({ label, width, children, ...rest }) => {
  return (
    <Container width={width}>
      <SelectWrapper>
        <StyledSelect {...rest}>
          {children}
        </StyledSelect>
        <ArrowIcon>V</ArrowIcon>
      </SelectWrapper>
      {label && <Label>{label}</Label>}
    </Container>
  );
};