import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import ListSearch from '../molecules/ListSearch';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #E9E0C5; 
`;

const MainContent = styled.main`
  flex: 1; 
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <ListSearch />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};