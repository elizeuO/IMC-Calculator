import { useState } from 'react';
import data from './data/data';

import './App.css'

import IMCCalc from './components/IMCCalc'
import './components/IMCCalc.css'

import IMCTable from './components/imcTable';
import './components/IMCTable.css'


function App() {


  const calcIMC = (e, height, weight) => {
    e.preventDefault();

    console.log(height, weight)

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const IMCResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setIMC(IMCResult);

    data.forEach((item) => {
      if (IMCResult > item.min && IMCResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  }

  const resetCalc = (e) => {
    e.preventDefault();

    setIMC("");
    setInfo('');
    setInfoClass('');
  }

  const [imc, setIMC] = useState('');
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('');

  return (
    <div className='container'>
      {!imc ? (
        <IMCCalc calcIMC={calcIMC} />
      ) : (
        <IMCTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>
      )}
    </div>
  )
}

export default App
