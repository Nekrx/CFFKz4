import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DefaultLayout } from '../../components/templates/DefaultLayout';
import * as S from './styles';

const mockListDetails = [
  { 
    id: 1, name: 'Ace & Sabo & Luffy', qty: 1, condition: 'NM', lang: 'EN', extra: 'Foil', 
    prices: { liga: 10.50, tcgPlayer: 12.00, mypCards: 9.00, cardTrader: 11.00 }, 
    img: 'https://via.placeholder.com/45x60?text=IMG' 
  },
  { 
    id: 2, name: 'Roronoa Zoro (Alt Art)', qty: 2, condition: 'NM', lang: 'EN', extra: 'Foil', 
    prices: { liga: 45.00, tcgPlayer: 50.00, mypCards: 42.00, cardTrader: 48.00 }, 
    img: 'https://via.placeholder.com/45x60?text=IMG' 
  },
  { 
    id: 3, name: 'Monkey D. Luffy (Parallel)', qty: 1, condition: 'NM', lang: 'EN', extra: 'Foil', 
    prices: { liga: 120.00, tcgPlayer: 115.00, mypCards: 110.00, cardTrader: 125.00 }, 
    img: 'https://via.placeholder.com/45x60?text=IMG' 
  },
];
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
export const VerListas: React.FC = () => {
  const location = useLocation(); 
  const [stores, setStores] = useState({
    liga: true,
    tcgPlayer: true,
    mypCards: true,
    cardTrader: true,
  });
  const [currentListName, setCurrentListName] = useState<string | null>(location.state?.listName || null);
  const [isListLoaded, setIsListLoaded] = useState(location.state?.autoLoad || false);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  useEffect(() => {
    if (location.state?.listName) {
      setCurrentListName(location.state.listName);
      if (location.state?.autoLoad) setIsListLoaded(true);
    }
  }, [location.state]);
  const handleStoreChange = (storeName: keyof typeof stores) => {
    setStores((prev) => ({ ...prev, [storeName]: !prev[storeName] }));
  };
  const handleLoadList = () => {
    if (currentListName) setIsListLoaded(true);
  };
  const toggleSubMenu = (id: number) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };
  const activeColumnsCount = [stores.liga, stores.tcgPlayer, stores.mypCards, stores.cardTrader].filter(Boolean).length + 1;
  const hasSelectedList = currentListName !== null;
  const getCardAverage = (prices: typeof mockListDetails[0]['prices']) => {
    let total = 0;
    let count = 0;
    
    if (stores.liga) { total += prices.liga; count++; }
    if (stores.tcgPlayer) { total += prices.tcgPlayer; count++; }
    if (stores.mypCards) { total += prices.mypCards; count++; }
    if (stores.cardTrader) { total += prices.cardTrader; count++; }
    return count === 0 ? 0 : total / count;
  };
  const getSummaryTotals = () => {
    let totalLiga = 0, totalTcg = 0, totalMyp = 0, totalTrader = 0, totalMedio = 0;

    mockListDetails.forEach((card) => {
      if (stores.liga) totalLiga += card.prices.liga * card.qty;
      if (stores.tcgPlayer) totalTcg += card.prices.tcgPlayer * card.qty;
      if (stores.mypCards) totalMyp += card.prices.mypCards * card.qty;
      if (stores.cardTrader) totalTrader += card.prices.cardTrader * card.qty;

      totalMedio += getCardAverage(card.prices) * card.qty;
    });

    return { totalLiga, totalTcg, totalMyp, totalTrader, totalMedio };
  };
  const totals = getSummaryTotals();

  
  return (
    <DefaultLayout>
      <S.PageContainer>
        
        <S.ControlsContainer>
          <S.SelectedListDisplay hasList={hasSelectedList}>
            {hasSelectedList ? (
              <>Lista Selecionada: <span>{currentListName}</span></>
            ) : (
              "Nenhuma lista selecionada. Use a busca acima ☝️"
            )}
          </S.SelectedListDisplay>

          <S.CheckboxGroup>
            <label><input type="checkbox" checked={stores.liga} onChange={() => handleStoreChange('liga')} /> Liga</label>
            <label><input type="checkbox" checked={stores.tcgPlayer} onChange={() => handleStoreChange('tcgPlayer')} /> Tcg Player</label>
            <label><input type="checkbox" checked={stores.mypCards} onChange={() => handleStoreChange('mypCards')} /> Myp cards</label>
            <label><input type="checkbox" checked={stores.cardTrader} onChange={() => handleStoreChange('cardTrader')} /> Card Trader</label>
          </S.CheckboxGroup>

          <S.LoadButton disabled={!hasSelectedList} onClick={handleLoadList}>
            Carregar Lista
          </S.LoadButton>
        </S.ControlsContainer>

        {isListLoaded && hasSelectedList && (
          <S.ListContainer>
            
            <S.TableHeader>
              <div>Foto.</div>
              <div>Quant.</div>
              <div>Nome da Carta</div>
              <div>Estado</div>
              <div>Idioma</div>
              <div>Extras</div>
              <div></div>
            </S.TableHeader>

            {mockListDetails.map((card) => (
              <S.CardRowWrapper key={card.id}>
                
                <S.TableRow>
                  <div>
                    <img src={card.img} alt={card.name} />
                  </div>
                  <div>{card.qty}x</div>
                  <div>{card.name}</div>
                  <div>{card.condition}</div>
                  <div>{card.lang}</div>
                  <div>{card.extra}</div>
                  <div className="toggle-btn" onClick={() => toggleSubMenu(card.id)}>
                    {expandedCardId === card.id ? '^' : 'V'}
                  </div>
                </S.TableRow>

                {expandedCardId === card.id && (
                  <S.SubMenuBox columns={activeColumnsCount}>
                    {stores.liga && (
                      <div className="col"><span>Liga</span><span>{formatCurrency(card.prices.liga)}</span></div>
                    )}
                    {stores.tcgPlayer && (
                      <div className="col"><span>Tcg Player</span><span>{formatCurrency(card.prices.tcgPlayer)}</span></div>
                    )}
                    {stores.mypCards && (
                      <div className="col"><span>Myp cards</span><span>{formatCurrency(card.prices.mypCards)}</span></div>
                    )}
                    {stores.cardTrader && (
                      <div className="col"><span>Card Trader</span><span>{formatCurrency(card.prices.cardTrader)}</span></div>
                    )}
                    <div className="col">
                      <span>Valor Médio</span>
                      <span>{formatCurrency(getCardAverage(card.prices))}</span>
                    </div>
                  </S.SubMenuBox>
                )}
              </S.CardRowWrapper>
            ))}

            <S.SummarySection>
              <h3>Resumo {currentListName}</h3>
              <S.SummaryTable columns={activeColumnsCount}>
                {stores.liga && (
                  <div className="col"><span>Liga</span><span>{formatCurrency(totals.totalLiga)}</span></div>
                )}
                {stores.tcgPlayer && (
                  <div className="col"><span>Tcg Player</span><span>{formatCurrency(totals.totalTcg)}</span></div>
                )}
                {stores.mypCards && (
                  <div className="col"><span>Myp cards</span><span>{formatCurrency(totals.totalMyp)}</span></div>
                )}
                {stores.cardTrader && (
                  <div className="col"><span>Card Trader</span><span>{formatCurrency(totals.totalTrader)}</span></div>
                )}
                <div className="col">
                  <span>Valor Médio</span>
                  <span>{formatCurrency(totals.totalMedio)}</span>
                </div>
              </S.SummaryTable>
            </S.SummarySection>

          </S.ListContainer>
        )}
      </S.PageContainer>
    </DefaultLayout>
  );
};