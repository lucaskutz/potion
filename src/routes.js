import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Potions from 'pages/Potions';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/Menu/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Potion from 'pages/Potion';


export default function appRouter(){
  return (
    <main className='container'>
      <Router>
        <Menu />
                
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='/Potion' element={<Potions />} />
            <Route path='/Sobre' element={<Sobre />}/>
          </Route>
          <Route path='Potion/:id' element={<Potion />}  />
          <Route path='*' element={<NotFound />}  />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}