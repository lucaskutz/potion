import logo from 'assets/logo.png';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu (){
  const rotas = [{
    label: 'Início',
    to: '/'    
  }, {
    label: 'Potion',
    to: '/Potion'
  }, {
    label: 'Sobre',
    to: '/Sobre'
  }];
  return (
    <nav className={styles.menu}>
      <img src={logo} alt='logo do shaiya'></img>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}