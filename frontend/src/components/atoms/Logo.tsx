import styled from 'styled-components';
import imgSource from '../../assets/images/logo-cafofo-laranja.png';
interface LogoProps {
  size?: number;
}

const StyledImg = styled.img<LogoProps>`
  width: ${props => props.size ? `${props.size}px` : '120px'};
  height: auto; 
  margin-bottom: 20px; 
  display: block;
  margin-left: auto;
  margin-right: auto; 
`;

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <StyledImg 
      src={imgSource} 
      alt="Logo Cafofo TCG" 
      size={size} 
    />
  );
};