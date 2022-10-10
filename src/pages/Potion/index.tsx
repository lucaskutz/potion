import styles from './Potion.module.scss';
import { useParams, useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import Potions from 'data/potions.json';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/Menu/PaginaPadrao';

export default function Detalhes(){
  const { id } = useParams();
  const navigate = useNavigate();
  const potion = Potions.find(item => item.id === Number(id));
  if(!potion) {
    return <NotFound />;
  }
  return (
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {' < Return '}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {potion.title}
        </h1>
        <div className={styles.imagem}>
          <img src={potion.photo} alt={potion.title}/>
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {potion.description}
          </p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__tipo]:true,
              [styles[`tags__tipo__${potion.category.label.toLowerCase()}`]]: true
            })
             
            }>
              {potion.category.label}
            </div>
            <div className={styles.tags__syze}>
              {potion.size}
            </div>
            <div className={styles.tags__type}>
              {potion.serving}
            </div>
            <div className={styles.tags__price}>
              {potion.price.toFixed(4)}g
            </div>
          </div>
        </div>
      </section>     
    </PaginaPadrao>
  );
}