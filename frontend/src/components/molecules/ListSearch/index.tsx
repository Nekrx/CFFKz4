import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import axios from 'axios';
import { useLists } from '../../../hooks/useLists';
import { useAuth } from '../../../hooks/useAuth';
import * as S from './styles';

const ListSearch: React.FC = () => {
  const navigate = useNavigate();
  const { email: userEmail } = useAuth();
  const { data: serverLists = [], isLoading, refetch } = useLists(userEmail);

  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const filteredLists = useMemo(() => {
    const termLower = searchTerm.trim().toLowerCase();
    if (!termLower) return serverLists;

    return serverLists.filter((list) =>
      list.name.toLowerCase().includes(termLower)
    );
  }, [searchTerm, serverLists]);

  const isExactMatch = useMemo(() => {
    return serverLists.some(l => l.name.toLowerCase() === searchTerm.trim().toLowerCase());
  }, [searchTerm, serverLists]);

  const handleSelect = (listId: number, name: string) => {
    setSearchTerm(name);
    setIsOpen(false);
    navigate('/ver-listas', { state: { listId, listName: name } });
  };

  const handleCreateNew = async () => {
    const name = searchTerm.trim();
    if (!name || !userEmail) return;

    try {
      const response = await axios.post('http://localhost:3333/lists', {
        name: name,
        email: userEmail
      });

      const newList = response.data;
      await refetch();

      setSearchTerm('');
      setIsOpen(false);
      navigate('/ver-listas', { state: { listId: newList.id, listName: newList.name } });

    } catch (error) {
      console.error("Erro ao criar lista:", error);
      alert("Erro ao criar lista no servidor.");
    }
  };

  const handleExecuteSearch = () => {
    const exactMatch = serverLists.find(l => l.name.toLowerCase() === searchTerm.toLowerCase());
    if (exactMatch) {
      handleSelect(exactMatch.id, exactMatch.name);
    } else if (searchTerm.trim() !== '' && !isExactMatch) {
      handleCreateNew();
    }
  };

  return (
    <S.Container>
      <S.DropdownWrapper>
        <S.SearchButtonBox $isOpen={isOpen} onClick={() => inputRef.current?.focus()}>
          <input
            ref={inputRef}
            type="text"
            placeholder={isLoading ? "Sincronizando..." : "Escolher Lista"}
            value={searchTerm}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 250)}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={22} className="icon-search" onClick={handleExecuteSearch} style={{ cursor: 'pointer' }} />
        </S.SearchButtonBox>

        {isOpen && (
          <S.DropdownMenu>
            {filteredLists.map((list, index) => (
              <S.DropdownItem 
                key={list.id} 
                onClick={() => handleSelect(list.id, list.name)}
                $isHighlighted={highlightedIndex === index}
              >
                {list.name}
              </S.DropdownItem>
            ))}

            {searchTerm.trim() !== "" && !isExactMatch && (
              <S.CreateItem onClick={handleCreateNew}>
                Não encontrou? Criar "<strong>{searchTerm}</strong>"
              </S.CreateItem>
            )}
          </S.DropdownMenu>
        )}
      </S.DropdownWrapper>
    </S.Container>
  );
};

export default ListSearch;