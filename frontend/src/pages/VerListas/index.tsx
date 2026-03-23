import React from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'; 
import { DefaultLayout } from '../../components/templates/DefaultLayout';
import * as S from './styles';

export const VerListas: React.FC = () => {
  const mockCards = [1, 2, 3];

  return (
    <DefaultLayout>
      <S.PageWrapper>
        <S.TopSearchContainer>
          <S.BigSearchButton>
            Escolher lista
            <HiOutlineMagnifyingGlass />
          </S.BigSearchButton>
        </S.TopSearchContainer>


        <S.CheckboxRow>
          <label><input type="checkbox" defaultChecked /> Liga</label>
          <label><input type="checkbox" defaultChecked /> Tcg Player</label>
          <label><input type="checkbox" defaultChecked /> Myp cards</label>
          <label><input type="checkbox" defaultChecked /> Card Trader</label>
        </S.CheckboxRow>


        <S.LoadButton>Carregar Lista</S.LoadButton>


        <S.TableContainer>
          <S.TableHeader>
            <div>Foto.</div>
            <div>Quant.</div>
            <div>Nome da Carta</div>
            <div>Estado</div>
            <div>Idioma</div>
            <div>Estado</div>
          </S.TableHeader>

          {mockCards.map((item) => (
            <S.TableRow key={item}>
              <S.DomainPlaceholder>
                <span>✦</span> 
              </S.DomainPlaceholder>
              
              <div>xx</div>
              <div>Placeholder</div>
              <div>NM</div>
              <div>EN</div>
              <div>
                <select defaultValue="Foil">
                  <option value="Foil">Foil</option>
                  <option value="Normal">Normal</option>
                </select>
              </div>
            </S.TableRow>
          ))}
        </S.TableContainer>
        <S.SummarySection>
          <h3>Resumo Lista X</h3>
          <S.SummaryTable>
            <div className="header-cell">Liga</div>
            <div className="header-cell">Tcg Player</div>
            <div className="header-cell">Myp cards</div>
            <div className="header-cell">Card Trader</div>
            <div className="header-cell">Valor Médio</div>

            <div className="value-cell">R$ 11,00</div>
            <div className="value-cell">R$ 12,00</div>
            <div className="value-cell">R$ 8,00</div>
            <div className="value-cell">R$ 9,00</div>
            <div className="value-cell">R$ 10,00</div>
          </S.SummaryTable>
        </S.SummarySection>

      </S.PageWrapper>
    </DefaultLayout>
  );
};