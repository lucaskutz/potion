import styles from './Potion.module.scss'
import logo from 'assets/logo.png'
import Buscador from './Buscador'
import { useState} from 'react'
import Filtros from './Filtros'
import Ordenador from './Ordenador'
import Itens from './Itens'


export default function Merchant(){
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('') 
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt='logo do shaiya'></img>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Potion Arsenal
                </div>
            </header>
            <section className={styles.potion}>
                <h3 className={styles.potion__titulo}>Potions</h3>
                <Buscador
                busca = {busca}
                setBusca={setBusca} />
                <div className={styles.potion__filtros}>
                   <Filtros
                   filtro = {filtro}
                   setFiltro = {setFiltro} />
                   <Ordenador
                   ordenador={ordenador}
                   setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca}
                filtro={filtro}
                ordenador={ordenador}/>
            </section>
        </main>
    )
}