import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
  background-color: ${theme.colors.primary}; /* #ce5434 */
  color: ${theme.colors.text};            /* #000000 */
  border: none;
  border-radius: ${theme.borderRadius};
  padding: 12px 24px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.98);
  }
`;