import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './Components/Aside/Aside';
import Default from './Components/Default/Default';
import Principal from './Components/Principal/Principal';
import ClientesInterior from './Pages/Clientes/ClientesInterior';
import ClientesLista from './Pages/Clientes/ClientesLista';
import ClientesNuevo from './Pages/Clientes/ClientesNuevo';
import Cobranza from './Pages/Cobranza/Cobranza';
import InvDiario from './Pages/InventarioDiario/InvDiario';
import Pedidos from './Pages/Pedidos/Pedidos';
import PedidosInterior from './Pages/Pedidos/PedidosInterior';
import Periodicos from './Pages/Productos/Periodicos';
import ProductosList from './Pages/Productos/ProductosList';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Aside />
        <Principal>
        <Routes>
          <Route path='/' element={<Default />} />
          {/*inventario Diario*/}
          <Route path='/inventario-diario' element={<InvDiario/>} />
          {/*Clientes*/}
          <Route path='/clientes' element={<ClientesLista />} />
          <Route path='/clientes/:id' element={<ClientesInterior/>}/>
          <Route path='/clientes/:nuevo' element={<ClientesNuevo/>}/>
          {/*Productos*/}
          <Route path='/productos' element={<ProductosList />}/>
          <Route path='/productos/:id' element={<Periodicos />}/>
          <Route path='/productos/nuevo' element={<Periodicos />}/>
          {/*Pedidos*/}
          <Route path='/pedidos' element={<Pedidos />}/>
          <Route path='/pedidos/:id' element={<PedidosInterior />}/>
          {/*Cobranza */}
          <Route path='/cobranza' element={<Cobranza />}/>
        </Routes>
        </Principal>
      </div>
    </BrowserRouter>
  );
}

export default App;
