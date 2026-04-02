import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DefaultLayout } from '../../components/templates/DefaultLayout';
import * as S from './styles';

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const VerListas: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const state = location.state as { listId?: number; listName?: string };
  const listId = state?.listId;
  const listName = state?.listName;

  const [listDetails, setListDetails] = useState<any[]>([]);
  const [currentListName, setCurrentListName] = useState<string | null>(listName || null);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const [stores, setStores] = useState({
    liga: true,
    tcgPlayer: true,
    mypCards: true,
    cardTrader: true,
  });

  const fetchListData = () => {
    if (!listId) return;
    setIsLoading(true);
    axios.get(`http://localhost:3333/lists/${listId}`)
      .then((response) => {
        const dadosDoBanco = response.data;     
        setCurrentListName(dadosDoBanco.name);
        const itensFormatados = dadosDoBanco.items.map((item: any) => ({
          id: item.id,
          name: item.card?.name || 'Carta sem nome',
          qty: item.qty,
          condition: item.condition,
          lang: item.lang,
          extra: item.extra,
          img: item.card?.imageUrl,
          prices: { liga: 10.5, tcgPlayer: 12.0, mypCards: 9.0, cardTrader: 11.0 }
        }));
        setListDetails(itensFormatados);
      })
      .catch((error) => console.error("Erro ao carregar lista:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchListData();
  }, [listId]);

  const handleStoreChange = (storeName: keyof typeof stores) => {
    setStores((prev) => ({ ...prev, [storeName]: !prev[storeName] }));
  };

  const toggleSubMenu = (id: number) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const getCardAverage = (prices: any) => {
    let total = 0; let count = 0;
    if (stores.liga) { total += prices.liga; count++; }
    if (stores.tcgPlayer) { total += prices.tcgPlayer; count++; }
    if (stores.mypCards) { total += prices.mypCards; count++; }
    if (stores.cardTrader) { total += prices.cardTrader; count++; }
    return count === 0 ? 0 : total / count;
  };

  const totals = useMemo(() => {
    let totalLiga = 0, totalTcg = 0, totalMyp = 0, totalTrader = 0, totalMedio = 0;
    listDetails.forEach((card) => {
      const qty = card.qty || 1;
      if (stores.liga) totalLiga += card.prices.liga * qty;
      if (stores.tcgPlayer) totalTcg += card.prices.tcgPlayer * qty;
      if (stores.mypCards) totalMyp += card.prices.mypCards * qty;
      if (stores.cardTrader) totalTrader += card.prices.cardTrader * qty;
      totalMedio += getCardAverage(card.prices) * qty;
    });
    return { totalLiga, totalTcg, totalMyp, totalTrader, totalMedio };
  }, [listDetails, stores]);

  const activeColumnsCount = Object.values(stores).filter(Boolean).length + 1;

  return (
    <DefaultLayout>
      <S.PageContainer>
        <S.ControlsContainer>
          {/* Checkboxes agora colados no topo */}
          <S.CheckboxGroup>
            {Object.keys(stores).map((store) => (
              <label key={store}>
                <input 
                  type="checkbox" 
                  checked={stores[store as keyof typeof stores]} 
                  onChange={() => handleStoreChange(store as keyof typeof stores)} 
                /> 
                {store.charAt(0).toUpperCase() + store.slice(1)}
              </label>
            ))}
          </S.CheckboxGroup>

          <S.LoadButton 
            onClick={fetchListData} 
            disabled={!listId || isLoading}
          >
            {isLoading ? "Sincronizando..." : "Carregar Lista"}
          </S.LoadButton>
        </S.ControlsContainer>

        {listId && listDetails.length > 0 && (
          <S.ListContainer>
            <S.TableHeader>
              <div>Foto.</div><div>Quant.</div><div>Nome da Carta</div><div>Estado</div><div>Idioma</div><div>Extras</div><div></div>
            </S.TableHeader>

            {listDetails.map((card) => (
              <S.CardRowWrapper key={card.id}>
                <S.TableRow>
                  <div>{card.img ? <img src={card.img} alt={card.name} /> : <div style={{width: 40, height: 56, background: '#eee', margin: '0 auto', border: '2px solid #000', borderRadius: '6px'}} />}</div>
                  <div>{card.qty}x</div>
                  <div>{card.name}</div>
                  <div>{card.condition}</div>
                  <div>{card.lang}</div>
                  <div>{card.extra || '-'}</div>
                  <div className="toggle-btn" onClick={() => toggleSubMenu(card.id)}>{expandedCardId === card.id ? '^' : 'V'}</div>
                </S.TableRow>

                {expandedCardId === card.id && (
                  <S.SubMenuBox columns={activeColumnsCount}>
                    {stores.liga && <div className="col"><span>Liga</span><span>{formatCurrency(card.prices.liga)}</span></div>}
                    {stores.tcgPlayer && <div className="col"><span>Tcg Player</span><span>{formatCurrency(card.prices.tcgPlayer)}</span></div>}
                    {stores.mypCards && <div className="col"><span>Myp cards</span><span>{formatCurrency(card.prices.mypCards)}</span></div>}
                    {stores.cardTrader && <div className="col"><span>Card Trader</span><span>{formatCurrency(card.prices.cardTrader)}</span></div>}
                    <div className="col"><span>Média</span><span>{formatCurrency(getCardAverage(card.prices))}</span></div>
                  </S.SubMenuBox>
                )}
              </S.CardRowWrapper>
            ))}

            <S.SummarySection>
              <h3>Resumo: {currentListName}</h3>
              <S.SummaryTable columns={activeColumnsCount}>
                {stores.liga && <div className="col"><span>Liga</span><span>{formatCurrency(totals.totalLiga)}</span></div>}
                {stores.tcgPlayer && <div className="col"><span>Tcg Player</span><span>{formatCurrency(totals.totalTcg)}</span></div>}
                {stores.mypCards && <div className="col"><span>Myp cards</span><span>{formatCurrency(totals.totalMyp)}</span></div>}
                {stores.cardTrader && <div className="col"><span>Card Trader</span><span>{formatCurrency(totals.totalTrader)}</span></div>}
                <div className="col"><span>Total Médio</span><span>{formatCurrency(totals.totalMedio)}</span></div>
              </S.SummaryTable>
            </S.SummarySection>
          </S.ListContainer>
        )}

        {listId && listDetails.length === 0 && !isLoading && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#666', fontWeight: 'bold' }}>
                Esta lista está vazia no banco de dados.
            </div>
        )}
      </S.PageContainer>
    </DefaultLayout>
  );
};