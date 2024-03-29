import React, {useEffect, useContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usuarioContext } from '../context/userContext'
import Aside from '../Components/Aside/Aside';
import Default from '../Components/Default/Default';
import Principal from '../Components/Principal/Principal';
import ClientesInterior from '../Pages/Clientes/ClientesInterior';
import ClientesLista from '../Pages/Clientes/ClientesLista';
import ClientesNuevo from '../Pages/Clientes/ClientesNuevo';
import Cobranza from '../Pages/Cobranza/Cobranza';
import InvDiario from '../Pages/InventarioDiario/InvDiario';
import Login from '../Pages/Login/Login';
import Pedidos from '../Pages/Pedidos/Pedidos';
import PedidosInterior from '../Pages/Pedidos/PedidosInterior';
import Periodicos from '../Pages/Productos/Periodicos';
import PeriodicosNuevo from '../Pages/Productos/PeriodicosNuevo';
import PedidosNuevo from '../Pages/Pedidos/PedidosNuevo';
import ProductosList from '../Pages/Productos/ProductosList';
import Reportes from '../Pages/Reportes/Reportes';
import ErrorComponent from '../Components/ErrorComponent/ErrorComponent';
import TicketExample from '../Pages/Ticket/TicketExample';
import TicketExample_2 from '../Pages/Ticket/TicketExample_2';
import TicketAdeudos from '../Pages/Ticket/TicketAdeudos';

const Routing = () => {
  const { Allow }  = useContext(usuarioContext)

  useEffect(()=>{

  },[Allow])

  return (
    <BrowserRouter>
        <div className='main'>
          {
            Allow
            ?
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
                <Route path='/clientes/nuevo' element={<ClientesNuevo/>}/>
                {/*Productos*/}
                <Route path='/productos' element={<ProductosList />}/>
                <Route path='/productos/:id' element={<Periodicos />}/>
                <Route path='/productos/nuevo' element={<PeriodicosNuevo />}/>
                {/*Pedidos*/}
                <Route path='/pedidos' element={<Pedidos />}/>
                <Route path='/pedidos/:id' element={<PedidosInterior />}/>
                <Route path='/pedidos/nuevo' element={<PedidosNuevo/>}/>
                {/*Cobranza */}
                <Route path='/cobranza' element={<Cobranza />}/>
                {/*Cobranza */}
                <Route path='/reportes' element={<Reportes />}/>
                {/*Tickets */}
                <Route path='/ticket' element={<TicketExample/>}/>
                <Route path='/ticket_2' element={<TicketExample_2/>}/>
                <Route path='/ticketAdeudo' element={<TicketAdeudos/>}/>
                {/*Errores de url*/}
                <Route path='/*' element={<ErrorComponent />}/>
              </Routes>
              </Principal>
            </>
            : <Login />
           
          } 
        </div>
      </BrowserRouter>
  )
}

export default Routing