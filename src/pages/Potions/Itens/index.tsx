import potion from 'data/potions.json';
import Item from './Item';
import styles from './itens.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

interface Props {
    busca:string,
    filtro:number | null,
    ordenador:string;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(potion);
  const {busca, filtro, ordenador } =props;

  function testaBusca(title:string){
    const regex = new RegExp(busca,  'i');
    return regex.test(title);
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof potion){
    switch(ordenador){
    case 'size':
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'type':
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1 );
    case 'price':
      return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista;
    }
  }

  useEffect(()=>{
    const novaLista = potion.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  },[busca, filtro, ordenador]);


  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item 
          key={item.id}
          {...item} />
      ))}
    </div>
  );
}