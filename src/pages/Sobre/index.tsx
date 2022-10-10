import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import principal from 'assets/imagem/shaiya.png';
import imagem1 from 'assets/imagem/shaiya1.png';
import imagem2 from 'assets/imagem/shaiya2.png';

const imagens = [imagem1, imagem2];

export default function Sobre (){
    
  return (
    <section>
      <h3 className={stylesTema.titulo}>About</h3>
      <div className={styles.sobreNos}>
        <img className={styles.imagem__principal} src={principal} alt='home potion'/>
        <div className={styles.sobreNos__texto}>
          <p>
            Exemple text Exemple text Exemple text Exemple text Exemple text Exemple text  
          </p>
          <p>
            Exemple text Exemple text Exemple text Exemple text Exemple text Exemple text 
          </p>
          <p>
            Exemple text Exemple text Exemple text Exemple text Exemple text Exemple text 
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt='imagem shaiya'/>
          </div> 
        ))}
            
      </div>
    </section>
  );
}