import React, { useState } from 'react';
import { HiOutlineUser, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLocation, useNavigate } from 'react-router-dom';
import logoCafofo from '../../../assets/images/logo-cafofo-laranja.png';

import { Button } from '../../atoms/Button';
import * as S from './styles';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Lógica para pegar o nome dinâmico
  const storedUser = JSON.parse(localStorage.getItem('@Cafofo:User') || '{}');
  const userName = storedUser.name || "Usuário"; 

  const isCreationPage = location.pathname === '/dashboard';

  const handleTogglePage = () => {
    navigate(isCreationPage ? '/ver-listas' : '/dashboard');
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    localStorage.removeItem('@Cafofo:Token');
    localStorage.removeItem('@Cafofo:User'); // Limpa o usuário ao deslogar
    navigate('/login');
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer 
        onClick={() => navigate('/dashboard')} 
        style={{ cursor: 'pointer' }}
      >
        <img src={logoCafofo} alt="Logo Cafofo" />
      </S.LogoContainer>

      <S.RightSection>
        <S.UserMenuContainer>
          <S.UserGreeting onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <HiOutlineUser />
            Olá {userName}
          </S.UserGreeting>

          {isDropdownOpen && (
            <S.LogoutDropdown onClick={handleLogout}>
              <HiOutlineArrowRightOnRectangle size={22} />
              Deslogar
            </S.LogoutDropdown>
          )}
        </S.UserMenuContainer>

        <Button onClick={handleTogglePage}>
          {isCreationPage ? 'Ver Listas' : 'Criação de listas'}
        </Button>
      </S.RightSection>
    </S.HeaderContainer>
  );
};

export default Header;