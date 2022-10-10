import Potions from 'data/potions.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/imagem/home.png';
import { useNavigate } from 'react-router-dom';


export default function Inicio (){
  let potionRecomendados = [...Potions];
  potionRecomendados = potionRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();
  
  function redirecionarParaDetalhes(potion: typeof Potions[0]){
    navigate(`/Potion/${potion.id}`, { state: {potion}, replace:true});
  }
  
  return (
    <section>
            
      <h3 className={stylesTema.titulo}>Recommendations</h3>
      <div className={styles.recomendados}>
        {potionRecomendados.map(item => (
          <div key={item.id} className={styles.recomendados}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title}/>
            </div>
            <button className={styles.recomendado__botao}
              onClick={()=> redirecionarParaDetalhes(item)}>
                            View more
            </button>
          </div>
        ))}
      </div>
      <h3 className={styles.titulo__home} >Home</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='potions house'/>
        <div className={styles.nossaCasa__endereco}>
                    Merchant in Arcadia <br /> <br />   Shaiya NPC
        </div>
      </div>
    </section>
       
  );

}