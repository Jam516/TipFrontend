import { useEffect, useState } from 'react';
import { useEditionDrop } from '@thirdweb-dev/react';
import TipForm from './TipForm';
import './skin.css';
import './bootstrap/css/bootstrap.min.css';

const Tip = () => {

  return (
    <div className="tipbod">
      <div className="container tipbod d-flex flex-column justify-content-lg-center align-items-lg-center">
          <h1 className="headtip">Tipooor</h1>
          <p className="subhead">Toss a coin to your friendly neighbourhood data nerd✨</p>
          <div className="row formrow d-flex justify-content-center">
              <div className="col-md-6 col-xl-4">
                  <TipForm />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Tip;
