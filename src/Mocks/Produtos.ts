import Celularjpeg from '../../public/celular.jpeg';
import Ps7jpeg from '../../public/ps7.jpeg';
import Livrojpeg from '../../public/livro.jpeg';
import Notebookjpeg from '../../public/notebook.jpeg';
import TShirt from '../../public/t-shirt.jpeg';
import Tenisjpeg from '../../public/tenis.jpeg';
import TShirt2 from '../../public/tshirt-2.jpeg';
import ValePresentejpeg from '../../public/vale-presente.jpeg';
import { Categoria } from '../Enums/Categoria';

export default [
  {
    id: 1,
    imagem: Celularjpeg,
    titulo: 'Celular',
    descricao: 'Descubra a mais recente tecnologia em comunicação com nossos celulares de última geração.',
    valorNovo: 1997.99,
    valorAntigo: 2596.99,
    categoria: Categoria.Eletronicos,
  },
  {
    id: 2,
    imagem: Ps7jpeg,
    titulo: 'Video Game PS7',
    descricao: 'Mergulhe no mundo dos jogos com nosso console de última geração',
    valorNovo: 4497.99,
    valorAntigo: 6999.99,
    categoria: Categoria.Eletronicos,
  },
  {
    id: 3,
    imagem: Livrojpeg,
    titulo: 'Livro de HTML e CSS',
    descricao: 'Aprenda como criar páginas incríveis com HTML e CSS',
    valorNovo: 9.99,
    valorAntigo: 19.99,
    categoria: Categoria.Livros,
  },
  {
    id: 4,
    imagem: Notebookjpeg,
    titulo: 'Macbook Pear Pro 2021',
    descricao: 'Eleve sua produtividade com nossos notebooks de alto desempenho',
    valorNovo: 7549.99,
    valorAntigo: 10596.99,
    categoria: Categoria.Eletronicos,
  },
  {
    id: 5,
    imagem: TShirt,
    titulo: 'Camiseta',
    descricao: 'Apresenta um novo design para expressar seu carinho pelos felinos',
    valorNovo: 29.97,
    valorAntigo: 58.99,
    categoria: Categoria.Roupas,
  },
  {
    id: 6,
    imagem: Tenisjpeg,
    titulo: 'Tenis',
    descricao: 'Escolha entre uma variedade de modelos para se destacar com elegância em qualquer ocasião',
    valorNovo: 497.99,
    valorAntigo: 1096.99,
    categoria: Categoria.Roupas,
  },
  {
    id: 7,
    imagem: TShirt2,
    titulo: 'Camiseta',
    descricao: 'Mostre seu amor pelos felinos com nossa camiseta de gato',
    valorNovo: 29.97,
    valorAntigo: 59.99,
    categoria: Categoria.Roupas,
  },
  {
    id: 8,
    imagem: ValePresentejpeg,
    titulo: 'Vale Presente',
    descricao: 'Que tal presentear quem você mais ama?',
    valorNovo: 50,
    valorAntigo: undefined,
    categoria: Categoria.Outros,
  },
];
