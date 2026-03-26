import React, { useState } from 'react';
import { DefaultLayout } from '../../components/templates/DefaultLayout';
import { CustomSelect } from '../../components/atoms/CustomSelect';
import { CustomSearchInput } from '../../components/atoms/CustomSearchInput';
import { LANGUAGES, QUALITIES, GAMES, EXTRAS, Option } from '../../constants/gameOptions';

import { CardGridItem } from '../../components/atoms/CardGridItem';
import * as S from './styles';

export const DashboardPage: React.FC = () => {
  const [game, setGame] = useState('one-piece');
  const [search, setSearch] = useState('');
  
  const [quality, setQuality] = useState('nm');
  const [isQualityOpen, setIsQualityOpen] = useState(false);
  
  const [language, setLanguage] = useState('en');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  
  const handleSearchClick = () => {
    console.log(`Buscando a carta: "${search}" no jogo: ${game}`);
    console.log(`Filtros -> Qualidade: ${quality} | Idioma: ${language} | Extras:`, selectedExtras);
    setShowModal(true);
  };
  
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isExtrasOpen, setIsExtrasOpen] = useState(false);

  const mockCards = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: i % 2 === 0 ? "Placeholder1.0" : "Placeholder2.0"
  }));

  const handleToggleExtra = (value: string) => {
    setSelectedExtras((prev) => 
      prev.includes(value) 
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <DefaultLayout>
      <S.DashboardWrapper>
        <S.FiltersRow>
          <S.SearchColumn>
            <CustomSelect label="Selecionar jogo" value={game} onChange={(e) => setGame(e.target.value)}>
              {GAMES.map((g: Option) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </CustomSelect>
            <CustomSearchInput 
              label="Buscar Carta" 
              placeholder="Digite o nome da carta..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onSearch={handleSearchClick}
            />
          </S.SearchColumn>    
          <S.RightSelectsColumn>
            <S.MultiSelectWrapper width="120px">
              <S.MultiSelectLabel>Qualidade</S.MultiSelectLabel>
              <S.MultiSelectButton onClick={() => { setIsQualityOpen(!isQualityOpen); setIsLanguageOpen(false); setIsExtrasOpen(false); }}>
                {QUALITIES.find(q => q.value === quality)?.shortLabel}
              </S.MultiSelectButton>

              {isQualityOpen && (
                <S.WideDropdown>
                  {QUALITIES.map((q: Option) => (
                    <S.SingleOptionItem 
                      key={q.value} 
                      onClick={() => { setQuality(q.value); setIsQualityOpen(false); }}
                    >
                      {q.label}
                    </S.SingleOptionItem>
                  ))}
                </S.WideDropdown>
              )}
            </S.MultiSelectWrapper>
            <S.MultiSelectWrapper width="120px">
              <S.MultiSelectLabel>Idioma</S.MultiSelectLabel>
              <S.MultiSelectButton onClick={() => { setIsLanguageOpen(!isLanguageOpen); setIsQualityOpen(false); setIsExtrasOpen(false); }}>
                {LANGUAGES.find(l => l.value === language)?.shortLabel}
              </S.MultiSelectButton>

              {isLanguageOpen && (
                <S.WideDropdown>
                  {LANGUAGES.map((lang: Option) => (
                    <S.SingleOptionItem 
                      key={lang.value} 
                      onClick={() => { setLanguage(lang.value); setIsLanguageOpen(false); }}
                    >
                      {lang.label}
                    </S.SingleOptionItem>
                  ))}
                </S.WideDropdown>
              )}
            </S.MultiSelectWrapper>
            <S.MultiSelectWrapper width="120px">
              <S.MultiSelectLabel>Extras</S.MultiSelectLabel>
              <S.MultiSelectButton onClick={() => { setIsExtrasOpen(!isExtrasOpen); setIsQualityOpen(false); setIsLanguageOpen(false); }}>
                {selectedExtras.length > 0 ? selectedExtras[0] : 'Foil'}
              </S.MultiSelectButton>
              {isExtrasOpen && (
                <S.CheckboxDropdown>
                  {EXTRAS.map((extra: Option) => (
                    <S.CheckboxLabel key={extra.value}>
                      <input 
                        type="checkbox" 
                        checked={selectedExtras.includes(extra.value)}
                        onChange={() => handleToggleExtra(extra.value)}
                      />
                      {extra.label}
                    </S.CheckboxLabel>
                  ))}
                </S.CheckboxDropdown>
              )}
            </S.MultiSelectWrapper>

          </S.RightSelectsColumn>
        </S.FiltersRow>
        
        <S.CardGrid>
          {mockCards.map((card) => (
            <CardGridItem key={card.id} name={card.name} />
          ))}
        </S.CardGrid>
        {showModal && (
          <S.ModalOverlay onClick={() => setShowModal(false)}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <h3>🚧 Em Construção</h3>
              <p>O sistema de busca avançada está sendo preparado!</p>
              <p>Em breve você verá os resultados para:</p>
              <p><strong>{search || "Nenhuma carta digitada"}</strong></p>
              <button onClick={() => setShowModal(false)}>Entendi!</button>
            </S.ModalContent>
          </S.ModalOverlay>
        )}

      </S.DashboardWrapper>
    </DefaultLayout>
  );
};