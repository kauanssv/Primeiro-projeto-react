import './App.css';
import HelloWorld from './components/HelloWorld';
import OutraLista from './components/OutraLista';
function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <HelloWorld/>
      <h2>Redenrização de listas</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
