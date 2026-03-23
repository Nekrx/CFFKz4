import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3333/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Erro no login');

      const data = await response.json();
      localStorage.setItem('@Cafofo:Token', data.token);

      navigate('/dashboard'); 

    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};