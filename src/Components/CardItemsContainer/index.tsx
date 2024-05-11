import CardItem from '../CardItem';
import Produtos from '../../Mocks/Produtos';
import * as S from './styles';

const CardItemsContainer = (): JSX.Element => {
  return (
    <S.StyledGroupcardItems>
      {Produtos.map(item => {
        return <CardItem key={item.id} {...item} />;
      })}
    </S.StyledGroupcardItems>
  );
};

export default CardItemsContainer;
