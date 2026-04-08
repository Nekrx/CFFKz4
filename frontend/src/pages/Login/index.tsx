import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // 1. IMPORTAR
import { Button } from '../../components/atoms/Button';
import { InputField } from '../../components/molecules/InputField';
import { theme } from '../../styles/theme';
import { useAuth } from '../../hooks/useAuth';
import { Logo } from '../../components/atoms/Logo';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

const Card = styled.div`
  background-color: ${theme.colors.secondary};
  padding: 30px;
  margin-top: 80px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 90%; 
  max-width: 480px; 
  text-align: center;
`;
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const userData = await login(email, password); 
      if (userData) {
        localStorage.setItem('@Cafofo:User', JSON.stringify(userData));
      }
      
      navigate('/dashboard'); 
      
    } catch (err) {
      alert("Falha no login: verifique suas credenciais ou o servidor.");
      console.error(err);
    }
  };

  return (
    <PageContainer>
      <Logo size={180} /> 
      <Card>
        <form onSubmit={handleSubmit}>
          <InputField 
            label="Usuário" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com" 
            required
          />
          
          <InputField 
            label="Senha" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********" 
            required
          />

          <Button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>
        </form>
      </Card>
    </PageContainer>
  );
};