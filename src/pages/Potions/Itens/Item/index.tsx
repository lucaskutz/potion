
import styles from './item.module.scss'
import potions from '../itens.json'
import classNames from 'classnames'

type Props = typeof potions[0];

export default function Item(props: Props){
    const {title, description, category, size, serving, price, photo} = props;
    return (
        <div className={styles.tem}>
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
        
    )
    
}