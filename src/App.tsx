import InputCalc from './components/inputCalc/inputCalc';
import ColumnsContainer from './components/columnsContainer/columnsContainer';
import BtnTest from './components/btnTest/btnTest';
import './App.css';

function App() {


  return (
    <div className='App'>
      <div>
        <ColumnsContainer/>
        <InputCalc/>
        <BtnTest/>
      </div>
    </div>
  );
}

export default App;
