import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome='Matheus'/>   
      <Pessoa nome='Kauan' idade='20' profissao='Programador Front-End' foto='https://via.placeholder.com/150'/>   
    </div>
  );
}

export default App;
