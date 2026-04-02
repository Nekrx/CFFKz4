// src/hooks/useLists.ts
import { useQuery } from '@tanstack/react-query';
import { IList } from '@shared/interfaces/list.interface';

export const useLists = (email: string) => {
  return useQuery<IList[]>({
    queryKey: ['user-lists', email],
    queryFn: async () => {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3333';
      
      const response = await fetch(`${apiUrl}/lists?email=${email}`);
      
      if (!response.ok) {
        throw new Error('Falha ao sincronizar com o banco de dados.');
      }
      
      return response.json();
    },
    enabled: !!email,
    staleTime: 1000 * 60 * 5,
  });
};