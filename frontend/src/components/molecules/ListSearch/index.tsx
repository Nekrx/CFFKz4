import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import * as S from './styles';

const mockLists = [
  { id: 1, name: 'Lista OP Joãozinho' },
  { id: 2, name: 'Lista OP Mariazinha' },
  { id: 3, name: 'Lista OP Pedrinho' },
  { id: 4, name: 'Lista OP Marcelinho' },
];

const ListSearch: React.FC = () => {
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const filteredLists = useMemo(() => {
    const termLower = searchTerm.trim().toLowerCase();
    if (!termLower) return mockLists;

    return mockLists.filter((list) =>
      list.name.toLowerCase().includes(termLower)
    );
  }, [searchTerm]);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [searchTerm]);

  const handleCreateNew = () => {
    navigate('/ver-listas', { state: { listName: searchTerm, autoLoad: true } }); 
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleSelect = (name: string) => {
    setSearchTerm(name);
    setIsOpen(false);
    navigate('/ver-listas', { state: { listName: name, autoLoad: true } });
  };

  const handleExecuteSearch = () => {
    if (searchTerm.trim() !== '') {
      setIsOpen(false); 
      inputRef.current?.blur(); 
      navigate('/ver-listas', { state: { listName: searchTerm, autoLoad: true } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && !isOpen) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => 
        prev < filteredLists.length - 1 ? prev + 1 : prev
      );
    } 
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } 
    else if (e.key === 'ArrowRight') {
      if (filteredLists.length > 0) {
        e.preventDefault();
        const indexToComplete = highlightedIndex >= 0 ? highlightedIndex : 0;
        setSearchTerm(filteredLists[indexToComplete].name);
      }
    } 
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && filteredLists[highlightedIndex]) {
        handleSelect(filteredLists[highlightedIndex].name);
      } else {
        handleExecuteSearch();
      }
    }
    else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  return (
    <S.Container>
      <S.DropdownWrapper>
        <S.SearchButtonBox isOpen={isOpen} onClick={() => inputRef.current?.focus()}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Escolher Lista"
            value={searchTerm}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 250)}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} 
          />
          <Search 
            size={22} 
            className="icon-search" 
            onClick={handleExecuteSearch} 
            style={{ cursor: 'pointer' }} 
          />
        </S.SearchButtonBox>
        {isOpen && (
          <S.DropdownMenu>
            {filteredLists.length > 0 ? (
              filteredLists.map((list, index) => (
                <S.DropdownItem 
                  key={list.id} 
                  onClick={() => handleSelect(list.name)}
                  isHighlighted={highlightedIndex === index} 
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {list.name}
                </S.DropdownItem>
              ))
            ) : (
              searchTerm !== "" && (
                <S.DropdownItem style={{ color: '#999', cursor: 'default' }}>
                  Nenhuma lista encontrada...
                </S.DropdownItem>
              )
            )}
            {searchTerm !== "" && (
              <S.CreateItem onClick={handleCreateNew}>
                Lista não encontrada - Criar "<strong>{searchTerm}</strong>"?
              </S.CreateItem>
            )}
          </S.DropdownMenu>
        )}
      </S.DropdownWrapper>
    </S.Container>
  );
};

export default ListSearch;