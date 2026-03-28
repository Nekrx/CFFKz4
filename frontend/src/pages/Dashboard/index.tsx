import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultLayout } from '../../components/templates/DefaultLayout';
import { CustomSelect } from '../../components/atoms/CustomSelect';
import { CustomSearchInput } from '../../components/atoms/CustomSearchInput';
import { LANGUAGES, QUALITIES, GAMES, EXTRAS, Option } from '../../constants/gameOptions';
import { CardGridItem } from '../../components/atoms/CardGridItem';
import * as S from './styles';
const mockCardsData = [
  { id: 1, name: "Ace & Sabo & Luffy" },
  { id: 2, name: "Roronoa Zoro" },
  { id: 3, name: "Sanji" },
  { id: 4, name: "Monkey D. Luffy" },
  { id: 5, name: "Nami" },
  { id: 6, name: "Tony Tony Chopper" },
  { id: 7, name: "Nico Robin" },
  { id: 8, name: "Franky" },
];
export const DashboardPage: React.FC = () => {
  const navigate = useNavigate(); 
  const [game, setGame] = useState('one-piece');
  const [search, setSearch] = useState('');
  const [quality, setQuality] = useState('nm');
  const [isQualityOpen, setIsQualityOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isExtrasOpen, setIsExtrasOpen] = useState(false);
  const [displayedCards, setDisplayedCards] = useState(mockCardsData);
  const handleSearchClick = () => {
    console.log(`Buscando a carta: "${search}" no jogo: ${game}`);
    if (search.trim() === '') {
      setDisplayedCards(mockCardsData);
    } else {
      const resultados = mockCardsData.filter((card) => 
        card.name.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayedCards(resultados);
    }
  };
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
          {displayedCards.map((card) => (
            <CardGridItem key={card.id} name={card.name} />
          ))}
          {displayedCards.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
              Nenhuma carta encontrada para "{search}".
            </div>
          )}
        </S.CardGrid>

      </S.DashboardWrapper>
    </DefaultLayout>
  );
};