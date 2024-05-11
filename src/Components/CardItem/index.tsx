import React from 'react';
import * as S from './styles';

export interface CardItemProps {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  valorNovo: number;
  valorAntigo?: number;
}

const CardItem = (produto: CardItemProps) => {
  const { imagem, titulo, descricao, valorNovo, valorAntigo } = produto;

  return (
    <S.StyledCard>
      <S.StyledCardMedia src={imagem} about={titulo} />

      <S.StyledCardContent>
        <S.StyledTitle>{titulo}</S.StyledTitle>
        <S.StyledDescription>{descricao}</S.StyledDescription>
        <S.StyledPriceGroup>
          <S.StyledPrice>R$ {valorNovo}</S.StyledPrice>
          {valorAntigo && (
            <S.StyledPrice color="red" old>
              R$ {valorAntigo}
            </S.StyledPrice>
          )}
        </S.StyledPriceGroup>
      </S.StyledCardContent>
    </S.StyledCard>
  );
};

export default CardItem;
