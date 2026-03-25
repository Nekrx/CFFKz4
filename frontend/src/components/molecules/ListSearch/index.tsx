import React, { useState, useMemo, useRef } from 'react';
import { Search } from 'lucide-react';
import * as S from './styles';

const mockLists = [
  { id: 1, name: 'Lista OP Joãozinho' },
  { id: 2, name: 'Lista OP Mariazinha' },
  { id: 3, name: 'Lista OP Pedrinho' },
  { id: 4, name: 'Lista OP Marcelinho' },
];

const ListSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTerm, setModalTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredLists = useMemo(() => {
    return mockLists.filter((list) =>
      list.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleCreateNew = () => {
    setModalTerm(searchTerm);
    setShowModal(true);
    console.log(`Tentando criar a lista: ${searchTerm} no endpoint http://localhost:3333/lists`);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleSelect = (name: string) => {
    setSearchTerm(name);
    setIsOpen(false);
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
          />
          <Search size={22} className="icon-search" />
        </S.SearchButtonBox>

        {isOpen && (
          <S.DropdownMenu>
            {filteredLists.length > 0 ? (
              filteredLists.map((list) => (
                <S.DropdownItem key={list.id} onClick={() => handleSelect(list.name)}>
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
      {showModal && (
        <S.ModalOverlay onClick={() => setShowModal(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>🚧 Em Construção</h3>
            <p>Estamos trabalhando na criação da lista: <strong>{modalTerm}</strong></p>
            <p>Em breve você poderá organizar seus cards aqui!</p>
            <button onClick={() => setShowModal(false)}>Entendi!</button>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default ListSearch;