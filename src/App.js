import './App.css';
import Aside from './Components/Aside/Aside';
import PedidoDefault from './Components/PedidoDefault/PedidoDefault';
import Principal from './Components/Principal/Principal';

function App() {
  return (
    <div className='main'>
      <Aside />
      <Principal>
        <PedidoDefault/>
      </Principal>
    </div>
  );
}

export default App;
