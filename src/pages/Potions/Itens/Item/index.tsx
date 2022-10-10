
import styles from './item.module.scss';
import potions from 'data/potions.json';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = typeof potions[0];

export default function Item(props: Props){
  const {id, title, description, category, size, serving, price, photo} = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={()=> navigate(`/potion/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.tem__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]:true, 
            [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,

          })}>
            {category.label}
          </div>
          <div className={styles.item__syze}>
            {size}
          </div>
          <div className={styles.item__type}>
            {serving} Potion
          </div>
          <div className={styles.item__price}>
            {price.toFixed(3)}g
          </div>
        </div>
      </div>
    </div>
        
  );
    
}