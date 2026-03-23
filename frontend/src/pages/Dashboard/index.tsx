import React, { useState } from 'react';
import { DefaultLayout } from '../../components/templates/DefaultLayout';
import { CustomSelect } from '../../components/atoms/CustomSelect';
import { CustomSearchInput } from '../../components/atoms/CustomSearchInput';
import { LANGUAGES, QUALITIES, GAMES, Option } from '../../constants/gameOptions';

import { CardGridItem } from '../../components/atoms/CardGridItem';
import * as S from './styles';

export const DashboardPage: React.FC = () => {
  const [game, setGame] = useState('one-piece');
  const [search, setSearch] = useState('');

  const mockCards = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: i % 2 === 0 ? "Placeholder1.0" : "Placeholder2.0"
  }));

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
            />
          </S.SearchColumn>
          <S.RightSelectsColumn>
            <CustomSelect label="Qualidade" width="130px">
              {QUALITIES.map((q: Option) => (<option key={q.value} value={q.value}>{q.label}</option>))}
            </CustomSelect>
            <CustomSelect label="Idioma" width="130px">
              {LANGUAGES.map((lang: Option) => (<option key={lang.value} value={lang.value}>{lang.label}</option>))}
            </CustomSelect>
            <CustomSelect label="Extras" width="130px">
              <option value="Foil">Foil</option>
              <option value="Non-Foil">Non-Foil</option>
            </CustomSelect>
          </S.RightSelectsColumn>
        </S.FiltersRow>
        <S.CardGrid>
          {mockCards.map((card) => (
            <CardGridItem key={card.id} name={card.name} />
          ))}
        </S.CardGrid>

      </S.DashboardWrapper>
    </DefaultLayout>
  );
};