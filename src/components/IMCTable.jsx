import React from 'react'

import Button from './Button'

import './IMCTable.css';

const IMCTable = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div id="result-container">

      <p id="IMC-number">
        Seu IMC:
        <span className={infoClass}> {imc}</span>
      </p>

      <p id="IMC-info">
        Situação atual:
        <span className={infoClass}> {info}</span>
      </p>

      <h3>
        Confira as classificações:
      </h3>

      <div id="IMC-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {data.map((item) => (
        <div className="table-data" key={item.info}>
          <p>{item.classification}</p>
          <p>{item.info}</p>
          <p>{item.obesity}</p>
        </div>
      ))}
      </div>
      <Button id="back-btn" text="Voltar" action={resetCalc}/>
    </div>
  )
}

export default IMCTable