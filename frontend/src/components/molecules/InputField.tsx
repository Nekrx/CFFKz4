import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
  color: #000;
  font-size: 14px;
`;

const StyledInput = styled.input`
  padding: 12px 15px;
  padding-right: 45px;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #ce5434;
  }
`;

const EyeButton = styled.button`
  position: absolute;
  right: 15px;
  top: 38px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  svg {
    font-size: 24px; 
    color: #1f1f1f; 
    transition: color 0.2s;

    &:hover {
      color: #000;
    }
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField: React.FC<InputProps> = ({ label, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput type={inputType} {...rest} />
      
      {isPassword && (
        <EyeButton 
          type="button" 
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
        >
          {showPassword ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
        </EyeButton>
      )}
    </Container>
  );
};