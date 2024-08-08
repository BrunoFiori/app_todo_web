import React from 'react';
import * as S from './styles';

const Header = () => {
  const navItems = ['Nome da Loja', 'Livros', 'Eletrônicos', 'Presentes'];
  return (
    <S.StyledHeader>
      <S.StyledGroupMenuButtons>
        {navItems.map(item => (
          <>
            •<S.StyledMenuButton key={item}>{item}</S.StyledMenuButton>
          </>
        ))}
      </S.StyledGroupMenuButtons>
    </S.StyledHeader>
  );
};

export default Header;
