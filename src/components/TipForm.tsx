import { useState } from 'react';
import TipButton from './TipButton';
import './skin.css';
import "bootstrap/dist/css/bootstrap.min.css";


const TipForm = () => {

  return (
    <div className = "outercard card mb-5">
        <div className = "innercard card-body d-flex flex-column align-items-center">
            <div className = "formtip">
                <p className="formlabel">Enter amount in ETH</p>
                <div className="mb-3"><input type="number" placeholder="0.1" className="inputeth"></input></div>
                <TipButton />
            </div>
        </div>
    </div>
  );
};

export default TipForm;
