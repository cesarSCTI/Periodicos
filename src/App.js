import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContextProvider, { UserContext } from './context/userContext';
import Aside from './Components/Aside/Aside';
import Default from './Components/Default/Default';
import Principal from './Components/Principal/Principal';
import ClientesInterior from './Pages/Clientes/ClientesInterior';
import ClientesLista from './Pages/Clientes/ClientesLista';
import ClientesNuevo from './Pages/Clientes/ClientesNuevo';
import Cobranza from './Pages/Cobranza/Cobranza';
import InvDiario from './Pages/InventarioDiario/InvDiario';
import Login from './Pages/Login/Login';
import Pedidos from './Pages/Pedidos/Pedidos';
import PedidosInterior from './Pages/Pedidos/PedidosInterior';
import Periodicos from './Pages/Productos/Periodicos';
import PeriodicosNuevo from './Pages/Productos/PeriodicosNuevo';
import ProductosList from './Pages/Productos/ProductosList';
import Reportes from './Pages/Reportes/Reportes';
import ErrorComponent from './Components/ErrorComponent/ErrorComponent';
import './App.css';

function App() {
  const { Allow }  = useContext(UserContext)
  const [Permitir, setPermitir ] = useState(true)

  useEffect(()=>{

    setPermitir(Allow)
    console.log("Allow " + Allow)
    console.log("Permitir " + Permitir)

  }, [Allow])

  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className='main'>
          {
           ! Permitir
            ? <Login />
            :
            <>
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
                <Route path='/productos/nuevo' element={<PeriodicosNuevo />}/>
                {/*Pedidos*/}
                <Route path='/pedidos' element={<Pedidos />}/>
                <Route path='/pedidos/:id' element={<PedidosInterior />}/>
                {/*Cobranza */}
                <Route path='/cobranza' element={<Cobranza />}/>
                {/*Cobranza */}
                <Route path='/reportes' element={<Reportes />}/>
                {/*Login */}
                <Route path='/*' element={<ErrorComponent />}/>
              </Routes>
              </Principal>
            </>
          } 
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
