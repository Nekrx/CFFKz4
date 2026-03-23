import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Input = styled.input`
  background-color: ${theme.colors.inputBg};
  color: ${theme.colors.text};
  border: none;
  border-radius: 6px;
  padding: 14px;
  font-size: 16px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors.primary}55;
  }
`;